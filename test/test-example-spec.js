
const Application = require("spectron").Application
const assert = require("assert");

describe("My Test App", function () {
    // SETUP section

    let app;

    this.timeout(20000)

    before(function () {

        // get reference to Glue42 Desktop and configure it to start a single app (your app)
        app = new Application({
            path: `${process.env.LOCALAPPDATA}/Tick42/GlueDesktop/tick42-glue-desktop.exe`,
            cwd: `${process.env.LOCALAPPDATA}/Tick42/GlueDesktop`,
            args: [
                "-- config=%LOCALAPPDATA%/Tick42/GlueDesktop/config/system.json",
                "--singleApp=%LOCALAPPDATA%/Tick42/UserData/T42-DEMO/apps/test-app.json",
                "--useEmbeddedShell=false"
            ],
        });

        // make sure you get the correct window reference (your app)
        const waitForSecondWindow = () => {
            return new Promise(resolve => {
                const inverval = setInterval(() => {
                    app.client.getWindowCount()
                        .then((count) => {
                            if (count > 2) {
                                clearInterval(inverval);
                                resolve();
                            }
                        });
                }, 100)
            })
        };

        // start Glue42 Desktop and your app before all tests
        return app.start()
            .then(() => waitForSecondWindow())
            .then(() => app.client.windowByIndex(1))
            .then(() => app.client.waitUntilWindowLoaded())
            .catch(console.error)
    });

    // shutdown Glue42 Desktop after all tests
    after(function () {
        // if (app && app.isRunning()) {
        //     return app.stop();
        // }
    });

    // TESTS section

    // test 1
    it("Should have the correct title", async function () {
        const title = await app.client.getTitle();

        assert.equal(title, "My Test App");
    });

    // test 2
    it("Should get a URL", async () => {
        const title = await app.client.url("https://docs.glue42.com/")
            .getTitle();

        assert.equal(title, "Glue42 Documentation");
    });
});
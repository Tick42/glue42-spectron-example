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

                // We need a config file, that has no application stores configured.
                "--config=%LOCALAPPDATA%/Tick42/GlueDesktop/config/system-test.json",
                "--noSplash",
                "--singleApp=%LOCALAPPDATA%/Tick42/UserData/T42-DEMO/apps/js-test-app.json"
            ],

            // A workaround for a limitation described in https://github.com/electron-userland/spectron/issues/443.
            chromeDriverArgs: ['remote-debugging-port=' + Math.floor(Math.random() * (9999 - 9000) + 9000)],
        });

        // start Glue42 Desktop and your app before all tests
        return app.start()
            .catch(console.error)
    });

    // shutdown Glue42 Desktop after all tests
    after(function () {
        if (app && app.isRunning()) {
            return app.stop();
        }
    });

    // TESTS section

    // test 1
    it("Should have the correct title", async function () {
        const title = await app.client.getTitle();

        assert.equal(title, "My Test App");
    });

    // test 2
    it("Should get a URL", async () => {
        await app.client.url("https://docs.glue42.com/");

        const title = await app.client.getTitle();

        assert.equal(title, "Glue42 Documentation - What is Glue42 Enterprise? > General Overview");
    });
});

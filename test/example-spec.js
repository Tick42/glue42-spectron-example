const assert = require('assert');
const { Application } = require('spectron')

describe('Application launch', function () {
    this.timeout(320000);
    let app;

    before(function () {
        app = new Application({
            path: `${process.env.LOCALAPPDATA}/Tick42/GlueDesktop/tick42-glue-desktop.exe`,
            cwd: `${process.env.LOCALAPPDATA}/Tick42/GlueDesktop`,
            args: [
                "-- config=%LOCALAPPDATA%/Tick42/GlueDesktop/config/system.json",
                "--singleApp=%LOCALAPPDATA%/Tick42/GlueDesktop/config/apps/devTools.json",
                "--useEmbeddedShell=false"
            ],
        });

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

        return app.start()
            .then(() => waitForSecondWindow())
            .then(() => app.client.windowByIndex(1))
            .then(() => app.client.waitUntilWindowLoaded())
            .catch(console.error)
    });

    after(() => {
        console.log("after");
        // if (app && app.isRunning()) {
        //     return app.stop()
        // }
    });

    it('Should have the correct title', (done) => {
        console.log("RUNNING");
        app.client.getTitle()
            .then((title) => {
                console.log(title);
                try {
                    assert.equal(title, "Expected Title")
                    done();
                } catch (e) {
                    done(e)
                }
            });
    });

    it('Should get a url', async () => {
        const title = await app.client.url("https://docs.glue42.com/")
            .getTitle();

        assert.equal(title, 'Glue42 Documentation');
    });

    it('Should get a url', async () => {
        const title = await app.client.url("https://docs.glue42.com/")
        app.client.click(".grid-item a");

        assert.equal(title, 'Glue42 Documentation');
    })
});
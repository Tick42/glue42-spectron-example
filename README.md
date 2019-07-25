# Overview

This repo contains a simple JS web app and an example test, provided to help you learn how to test your app within the Glue42 environment.

# Running the Vanilla JS App

1. From a Windows command prompt navigate to the app directory and start an `HTTP` server at port 3333:

```cmd
http-server -p 3333
```

2. To add the test app to the list of applications in the App Manager on the Glue42 Desktop Toolbar, copy the `test-app.json` configuration file in `%LocalAppData%\Tick42\UserData\<REG-ENV>\apps`.

3. You can verify that the app is added correctly to Glue42 Desktop by starting Glue42 Desktop and starting the app itself.

# Running the Tests

1. Shutdown Glue42 Desktop, if running.

2. Setup your tests in your favorite editor. (For more details on how to do that, see our testing guide [here](https://staging-docs.glue42.com/branches/feature/G4E-1040-docs-new-structure/g4e/developers/testing-your-app/mocha-and-spectron/index.html))

3. Run the tests with the `npm test` command.
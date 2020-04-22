# Overview

This repo contains a simple JS web app and an example test, provided to help you learn how to test your app within the Glue42 environment.

# Project Setup

To install the necessary dependencies, open a command prompt in the main project directory and run:

```cmd
npm install
```

# Running the Project

1. Open a command prompt in the project directory and run the following command, which will create an `http-server` at port 3333 where the example app will be served:

```cmd
npm start
```

2. To add the test app to the list of applications in the App Manager on the Glue42 Desktop Toolbar, copy the `js-test-app.json` configuration file in `%LocalAppData%\Tick42\UserData\<ENV-REG>\apps` where `<ENV-REG>` should be replaced with the name of the environment and region folder of your **Glue42 Enterprise** installation, e.g. - `T42-DEMO`.

3. You can verify that the app is added correctly to **Glue42 Enterprise** by starting **Glue42 Enterprise** and starting the app itself.

# Running the Tests

1. Shutdown **Glue42 Enterprise**, if running.

2. Setup your tests in your favorite editor. For more details on how to do that, see the testing guide in the **Glue42 Enterprise** [documentation](https://docs.glue42.com/developers/testing-your-app/mocha-and-spectron/index.html).

3. Open a **new** command prompt in the project directory and run the following command to execute the tests:

```cmd
npm test
```
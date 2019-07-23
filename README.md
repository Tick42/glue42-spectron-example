# Overview

This repo contains a Glue42 Desktop testing guide, a sample end-to-end test and a sample Vanilla JS app, which you can use to learn how to test your app within the Glue42 environment.

# Running the Vanilla JS App

1. From a Windows command prompt navigate to the app directory and start an `HTTP` server at port 3333:

```cmd
http-server -p 3333
```

2. To add the test app to the list of applications in the App Manager on the Glue42 Desktop Toolbar, copy the `test-app.json` configuration file in `%LocalAppData%\Tick42\UserData\<REG-ENV>\apps`.

3. Start Glue42 Desktop (if Glue42 Desktop is running, the configuration changes will be automatically detected and your app will be automatically added to the list of available apps in the App Manager).

4. Start the app from the App Manager or view it in a browser at this address: "http://localhost:3333/test-app.html".
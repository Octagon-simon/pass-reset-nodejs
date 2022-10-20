# HOW TO IMPLEMENT A PASSWORD RESET FEATURE IN NODEJS

This repository implements a basic password reset feature in NodeJS. You can modify the code to suit your application.

## INSTALLATION

> Before you can use this project, make sure you have a MongoDB provision available. 

Install the dependencies using the command below on your terminal.

```shell
$ npm i
```

After you must have installed the dependencies, head over to `utils/database.js` and replace the connection url in `mongoose.connect()` method with your own.

```javascript
mongoose.connect(CONNECTION_URL, {dbName : "passReset"})
```

## MODIFY INDEX.JS

Now you need to modify `index.js`. 

Uncomment `line 129` for the function to add a new user to the database.

Now start the server

```shell
$ node index.js
```

If all should go well, you should see the message below on your terminal

```shell
App is live
Database is connected
The user Simon has been created
```

Now you can head over to the URL `http://localhost:5000/login` and try to login using the details below

```shell
email = simon@gmail.com
password = 12345
```
Now you may reset the password.

> If you see the message `Email Address does not exist`, then it means that you have not added any user to the database. Go back and modify `index.js`, then uncomment `line 129` and reload your server.
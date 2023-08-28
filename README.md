# TaskTrackerFullStack
I have not included .env file as there I had JSON Web Token and MongoDB connection. However we can run locally by creating new .env file and include the following to run the code

TOKEN_SECRET=''
DB_CONNECT=''

Note:
Inside the '' of TOKEN_SECRET we go to https://jwt.io/ website and grab the jwt token and paste it here.
Inside the '' of DB_CONNECT we need to create a new account in MongoDB Atlas or use existing MongoDB account and there create a new cluster after while connecting (a db link will be seen), we need to install
a MongoDB compass sofware for seeing database visually. We have to copy that db link we seen before and paste it here.

We have to run "npm install" command in the VS code terminal to install the packages required to run this project. After that run "npm start" ,the server starts and then you can copy the "signup.html" file path and paste in your
browser to start the project.

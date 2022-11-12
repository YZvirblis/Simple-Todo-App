### How to run the app:
    - ```cd``` into 'server' folder.
    - `npm i` to install all the reqiured packages.
    - run `db-migrate up todoapp` **(for this step you need to have 'db-migrate' and 'db-migrate-pg' installed globally)**.
    - start postgres server with `sudo service postgresql start` (preferably in a new terminal)  
    - use `npm start` to compile typescript, build and run or use `npm run start:dev` to start the server in development mode with nodemon.
    - `cd` into 'client' folder (preferably in a new terminal).
    - `npm i` to install all the needed packages.
    - `npm start` to start client.

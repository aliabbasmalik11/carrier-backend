# Carrier Backend
#### Install Dependencies
```
npm run install
```
### Create Local Database

1. Create a database like this:

https://www.postgresql.org/docs/8.0/sql-createuser.html

2. Create local database named `blockchain_metrics_development` like this:

https://www.postgresql.org/docs/9.0/sql-createdatabase.html

3. Construct local database and update `src/config/db.js` accoringly


#### Add .env file and attributes.

Please check .env.example file for setting the environment variables

#### Run Migration
```
npm run sequelize:admin:migrate
```

#### Seed Data
```
npm run sequelize:admin:seed:all
```

#### Run Project
```
npm run dev
```
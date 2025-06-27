// Get the client
const express = require('express')
const db = require('./config');
const app = express()
const port = 3000
const itemRoute = require('./routes/item');


app.use(express.json());
app.use(express.static(__dirname + '/static'));


//initialize app
db.init()
    .then(() => {
        app.listen(port, () => console.log(`Listening on port ${port}`));
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

//shutdown app
const gracefulShutdown = () => {
    db.teardown()
        .catch(() => { })
        .then(() => process.exit());
};


//api routes
app.use('/api/item', itemRoute);


process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
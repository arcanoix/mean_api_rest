const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');

const indexRoute = require('./routes/index');
const taskRoute = require('./routes/tasks');


// settings
app.set('views',path.join(__dirname, 'view'));
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(indexRoute);
app.use('/api',taskRoute);



app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

const itemRoutes = require('./routes/Item');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongodb:27017/mevn-crud', {
	useUnifiedTopology: true,
	useNewUrlParser: true
})
.then( () => console.log('db connected'))
.catch(err => console.log(err));

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/item', itemRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
	console.log('server on port', app.set('port'));
});
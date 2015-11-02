import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Right from './components/right';

let env = process.env.NODE_ENV;
let app = express();

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let router = express.Router();

router.get('/', function(req, res, next) {
	let main = ReactDOM.renderToString(
		<Right />
	);

	let context = {
		params: req.params
	};

	res.render('basetemplate', {
		title: 'Express',
		context: JSON.stringify(context),
		bundle: '/js/client.bundle.js',
		main: main
	});
});

app.use(router);
app.use('/', express.static(path.join(__dirname, 'dist')));

module.exports = app;

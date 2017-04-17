/**
* Copyright 2014 IBM
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
**/

var express = require('express');
var stylus	= require('stylus');
var nib		= require('nib');

var PORT = 80;

/*
var app = express();
app.get('/', function (req, res) {
  res.send('Bienvenido a mi primer Contenedor Docker usando Bluemix DevOps! \n A aprovechar Pipeline Services!');
});

*/

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render(	'index',
  			{ title : 'Home' }  
  );
});

app.listen(PORT);
console.log(' Application Running on port' + PORT);

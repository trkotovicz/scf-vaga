const express = require('express');
const app = express();
// var bodyParser = require('body-parser');

const userRouter = require('./routes/userRouter');


app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// o uso do body-parser foi depreciado
// a partir do Express.js versão 4.16.0, as funções express.json() e express.urlencoded() foram adicionadas nativamente no express, sem a necessidade da biblioteca externa body-parser.

// app.use(bodyParser.json());                        
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send(`
  GET user/ </br>
  GET users/ </br>
  POST users/ </br>
  DELETE users/ </br>
  PUT users/ </br>
  `);
});

app.use(userRouter);

const PORT  = 3000;

app.listen(PORT, function(){
  console.log(`Express server listening on port ${PORT}`);
});
const Express = require('express');

const app = Express();
const port = process.env.PORT || 3000;
const cors = require('cors');
var corsOptions = {
    origin: '*',
    credentials: true };

app.use(cors(corsOptions));


app.get('/', function(req, res){
  res.send('api');
});

app.listen(port, function () {
  console.log('Yupiiieee Server started on port', port);
});

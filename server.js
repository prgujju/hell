const Express = require('express');

const app = Express();
const port = process.env.PORT || 3000;


app.get('/', function(req, res){
  res.send('api');
});

app.listen(port, function () {
  console.log('Yupiiieee Server started on port', port);
});

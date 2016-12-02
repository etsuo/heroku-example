'use strict';

const express = require('express');

let app = express();

let PORT = process.env.PORT || 7777;

app.all('*', function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With,X-Auth-Token');
            res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
            next();
        });

app.get('/', (req, res) => {
  res.status(200).json({hello: 'world'});
});

app.listen(PORT, ()=>{
  console.log('server started on port ' + PORT);
});

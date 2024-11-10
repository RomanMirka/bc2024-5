const express = require('express');
const { program } = require('commander');
const fs = require('fs');

program
  .requiredOption('-h, --host <host>', 'server address')
  .requiredOption('-p, --port <port>', 'server port')
  .requiredOption('-c, --cache <cache>', 'directory path');

program.parse(process.argv);

const o = program.opts();

const app = express();

app.use('/', (req, res) => {
  res.send('Server`s alive');
});

app.listen(o.port, o.host, () => {
  console.log(`Server's running at http://${o.host}:${o.port}`);
});

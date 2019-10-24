/**
 * Código usado para executar código de produção.
 * 
 */

import express = require('express');

const app = express();

const baseDir = `${__dirname}/build/`;

app.use(express.static(`${baseDir}`));

app.get('*', (request, response) => response.sendFile('index.html', { root: baseDir }));

const port: number = 3000;

app.listen(port, () => console.log(`Servidor em execução http://localhost:${port}`));

const {Socket} = require('socket.io');

const express = require('express')
const app = express()
const http = require('http').createServer(app);
const path = require('path');
const port = 8080;

const io = require('socket.io')(http);

//intégrer bootstrap
app.use('/bootstrap/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))

//intégrer fichier js
app.use('/bootstrap/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
//intégrer fichier jquery
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
//intégrer fichier js
app.use(express.static('public'))

//envoyer un fichier de template
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'templates/index.html')));
http.listen(port, () => console.log(`Listening on http://localhost:${port}/`));
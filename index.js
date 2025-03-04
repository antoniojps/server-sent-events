const app = require('express')();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/stream', (req, res) => {

  res.setHeader('Content-Type', 'text/event-stream');

  send(res)
})

let i = 0;
function send(res) {
  res.write('data: ' + `Hello, world (${i++})` + '\n\n');
  setTimeout(() => send(res), 1000);
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
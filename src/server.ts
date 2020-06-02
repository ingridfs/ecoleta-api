import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('listagem de usuarios');
 // response.send('Hello World');
 response.json([
   'Diego',
   'Cleiton',
   'Robson',
   'Ingrid'
 ]);
})

app.listen(3333);
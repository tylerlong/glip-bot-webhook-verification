import express from 'express';

const port = 3000;
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  res.set('Validation-Token', req.header('Validation-Token'));
  console.log(req.body);
  res.send('OK');
});

app.listen(port, () => {
  console.log(`WebHook handler listening at http://localhost:${port}`);
});

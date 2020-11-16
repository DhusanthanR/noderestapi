import express from 'express';
import bodyParser from 'body-parser';

import useRouter from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', useRouter);

app.get('/',(req,res) => {
    console.log('[TEST]!');
    res.send('Hello from Home page.');
});

app.listen(PORT, () => console.log(`Server Running on : http://localhost:${PORT} `) );
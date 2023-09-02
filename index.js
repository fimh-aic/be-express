const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const authRouter = require('./routers/auth');
const receiptRouter = require('./routers/receipt');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use([
    authRouter,
    receiptRouter
])

app.get('/', (req, res) => {
    res.send('Hayo cari apa!');
});


app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));

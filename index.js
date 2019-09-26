const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Halo aku express!');
});

app.get('/Login', (req, res) => {
    res.send('Login!');
});

app.post('/register', (req, res) => {
    res.send('Request POST for register!');
});

app.put('/update', (req, res) => {
    res.send('Hai ini put!');
});

app.delete('/delete', (req, res) => {
    res.send('request delete');
})


app.listen(port, ()=> console.log(`App listen on port ${port}`))
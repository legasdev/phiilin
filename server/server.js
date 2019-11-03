const express = require('express');
const app = express();

app.get('/', (request, response) => {
    throw new Error('oops');
});

app.get('/auth/me', (req, res) => {
    res
        .set({
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
        })
        .send({
            id: '1',
            login: 'legasdev',
            name: 'Артем',
            lastName: 'Степанов',
            position: 'Преподаватель',
        });
});


app.use((err, request, response, next) => {
    // логирование ошибки, пока просто console.log
    console.log(err)
    response.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Ok. Server working...');
});
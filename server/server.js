const express = require('express');
const app = express();

const
    authData = {
        user: {
            id: '1',
            login: 'legasdev',
            name: 'Артем',
            lastName: 'Степанов',
            position: 'Преподаватель',
        },
        isAutorized: false
    }

// Проверка авторизации
app.get('/auth/me', (req, res) => {
    res
        .set({
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
        });
    
    if (authData.isAutorized) 
        res
            .status(200)
            .send(authData.user);
    else
        res
            .status(403)
            .send({
                errorCode: 403
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
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const
    authData = {
        user: {
            id: '1',
            login: 'legasdev',
            password: '1',
            name: 'Артем',
            lastName: 'Степанов',
            position: 'Преподаватель',
        },
        isAutorized: true,
    }

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

// Проверка авторизации
app.get('/api/auth/me', (req, res) => {
   
    if (authData.isAutorized) 
        res
            .status(200)
            .json(authData.user);
    else
        res
            .status(403)
            .json({
                errorCode: 403
            });
});

// Авторизация
app.post('/api/auth/login', (req, res) => {
    const {login, password} = {...req.body};

    if (!login) return res.json({errorCode: 1}).status(400);

    if (authData.user.login === login && authData.user.password === password) {
        authData.isAutorized = true;
        return res.json({errorCode: 0}).status(200);
    } else {
        return res.json({errorCode: 2}).status(413);
    }
    
});

// Выход (разлог)
app.delete('/api/auth/login', (req, res) => {
    authData.isAutorized = false;
    return res.json({errorCode: 0}).status(200);
});

// Регистрация
app.post('/api/auth/register', (req, res) => {
    
});

/**
 * 
 * Группы
 * 
*/

const groups = {
    listGroups: [
        {
            id: 1,
            name: '381804м',
            users: 8,
            course: 6,
        },
        {
            id: 2,
            name: '381803',
            users: 5,
            course: 6,
        },
        {
            id: 3,
            name: '381802',
            users: 17,
            course: 5,
        },
        {
            id: 4,
            name: '381801a',
            users: 18,
            course: 4,
        },
        {
            id: 5,
            name: '381801б',
            users: 22,
            course: 3,
        },
        {
            id: 6,
            name: '381805б',
            users: 32,
            course: 2,
        },
        {
            id: 7,
            name: '381809',
            users: 32,
            course: 1,
        },
    ],
};

// Список всех групп
app.get('/api/groups', (req, res) => {

    if (authData.isAutorized) 
        res
            .status(200)
            .json({ 
                listGroups: groups.listGroups,
                errorCode: 0
            });
    else
        res
            .status(403)
            .json({
                errorCode: 403
            });

});

// Добавить новую группу
app.post('/api/groups/add', (req, res) => {
    const {name, course} = {...req.body};
    
    if (!name.length) return res.json({errorCode: 1}).status(400);

    if (authData.isAutorized) {
        console.group('=={ Adding groups... }==')
        console.log(name, course)

        groups.listGroups.push({
            id: Object.keys(groups.listGroups).length + 1,
            name,
            users: 0,
            course: parseInt(course),
        });

        console.log('=={ Groups added! }==')
        console.groupEnd();
        
        return res
            .json({
                listGroups: groups.listGroups, 
                errorCode: 0
            })
            .status(200);
    } else {
        return res.json({errorCode: 2}).status(413);
    }
});

app.listen(8080, () => {
    console.log('Ok. Server working...');
});
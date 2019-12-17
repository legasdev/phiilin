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
    },

    groups = {
        listGroups: [
            {
                id: 1,
                name: '381804м',
                desk: [
                    {users: 8},
                    {course: 6},
                ],
            },
            {
                id: 2,
                name: '381803',
                desk: [
                    {users: 5},
                    {course: 6},
                ],
            },
            {
                id: 3,
                name: '381802',
                desk: [
                    {users: 17},
                    {course: 5},
                ],
            },
            {
                id: 4,
                name: '381801a',
                desk: [
                    {users: 18},
                    {course: 4},
                ],
            },
            {
                id: 5,
                name: '381801б',
                desk: [
                    {users: 22},
                    {course: 3},
                ],
            },
            {
                id: 6,
                name: '381805б',
                desk: [
                    {users: 32},
                    {course: 2},
                ],
            },
            {
                id: 7,
                name: '381809',
                desk: [
                    {users: 32},
                    {course: 1},
                ],
            },
        ],
    },

    users = {
        listUsers: [
            {
                id: 1,
                name: 'Чехов Эдуард Федорович',
                desk: {
                    course: 6,
                    group: '381804м',
                    works: 11,
                    check: 3,
                    edit: 0,
                    done: 8,
                },
            },
            {
                id: 2,
                name: 'Дмитровский Венедикт Филимонович',
                desk: {
                    course: 6,
                    group: '381804м',
                    works: 3,
                    check: 3,
                    edit: 0,
                    done: 0,
                },
            },
            {
                id: 3,
                name: 'Качурина Евгения Александровна',
                desk: {
                    course: 5,
                    group: '381804м',
                    works: 5,
                    check: 3,
                    edit: 1,
                    done: 6,
                },
            },
            {
                id: 4,
                name: 'Головнина Дина Юлиевна',
                desk: {
                    course: 4,
                    group: '381804м',
                    works: 9,
                    check: 3,
                    edit: 2,
                    done: 2,
                },
            },
            {
                id: 5,
                name: 'Помельников Прокофий Изяславович',
                desk: {
                    course: 3,
                    group: '381804м',
                    works: 4,
                    check: 3,
                    edit: 1,
                    done: 0,
                },
            },
            {
                id: 6,
                name: 'Яшнов Адам Леонидович',
                desk: {
                    course: 2,
                    group: '381804м',
                    works: 12,
                    check: 3,
                    edit: 2,
                    done: 3,
                },
            },
            {
                id: 7,
                name: 'Карякин Станислав Архипович',
                desk: {
                    course: 1,
                    group: '381802',
                    works: 22,
                    check: 3,
                    edit: 3,
                    done: 5,
                },
            },
            {
                id: 8,
                name: 'Кравчикова Милена Данииловна',
                desk: {
                    course: 8,
                    group: '381804м',
                    works: 12,
                    check: 4,
                    edit: 6,
                    done: 5,
                },
            },
        ]
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

// Список всех групп/инфа о группе
app.get('/api/groups', (req, res) => {

    const {id} = {...req.query};

    const list = 
        id
            ? groups.listGroups.filter(item => item.id === parseInt(id))
            : groups.listGroups;

    if (authData.isAutorized) 
        res
            .status(200)
            .json({ 
                listGroups: list,
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

/**
 * 
 * Пользователи
 * 
*/

// Список всех пользователей
app.get('/api/users', (req, res) => {

    const {id} = {...req.query};

    const [group] = groups.listGroups.filter(item => item.id === parseInt(id));

    const list = 
        id
            ? users.listUsers.filter(item => item.desk.group === group.name)
            : users.listUsers;

    if (authData.isAutorized) 
        res
            .status(200)
            .json({ 
                listUsers: list,
                errorCode: 0
            });
    else
        res
            .status(403)
            .json({
                errorCode: 403
            });

});

// Запуск сервера
app.listen(8080, () => {
    console.log('Ok. Server working...');
});
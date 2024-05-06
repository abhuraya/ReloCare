const { User } = require('../models');

const userData = [
    {
        username: "Admin",
        email:'admin@ReloCare.com',
        password: 'ReloCare123'
    },
    {
        username: "Vermont",
        email: 'vermont@gmail.com',
        password: 'cookies123'
    },
    {
        username: "test2",
        email: 'test2@gmail.com',
        password: 'th1s1saw3som3'
    },
    {
        username: "superUser",
        email:'devtest@ReloCare.com',
        password: '123ReloCare'
    },
    {
        username: "nhnewbie",
        email: 'manchvegas1@gmail.com',
        password: 'cookies456'
    },
    {
        username: "dirtywater",
        email: 'redsoxfan@gmail.com',
        password: 'Nomaah123'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
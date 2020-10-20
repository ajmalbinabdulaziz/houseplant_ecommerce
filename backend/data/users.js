import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'AdminUser',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Zidane',
        email: 'zizou@example.com',
        password: bcrypt.hashSync('123456',10)

    },
    {
        name: 'Ronaldinho',
        email: 'dinho@example.com',
        password: bcrypt.hashSync('123456',10)
    },
]

export default users
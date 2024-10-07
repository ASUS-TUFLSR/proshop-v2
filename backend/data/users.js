import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin user",
        email: 'admin31666@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: "Bardock",
        email: 'BarDock3666@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: "Vegeta",
        email: 'vegeta36@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
]

export default users;
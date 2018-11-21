module.exports = {
    default: {
        username: process.env.DBUSER,
        password: process.env.DBPASSWD,
        database: process.env.DBNAME,
        host: process.env.DBHOST,
        port: process.env.DBPORT,
        dialect: 'postgres'
    }
}

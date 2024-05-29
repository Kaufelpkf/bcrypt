const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('dblog','root','senai',{
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(()=>{
//     console.log('Banco conectado!')
// }).catch((err)=>{
//     console.error('Erro de conexão!',err)
// })

module.exports = sequelize
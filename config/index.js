require('dotenv').config()
const {Pool} = require('pg')
const isProduction = process.env.NODE_ENV === 'development'
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  connectionString: isProduction ? connectionString : connectionString,
  // ssl: {
  //   rejectUnauthorized: false
  //   }
})
console.log(process.env.DATABASE_URL)
console.log(connectionString);
console.log(isProduction);
console.log(pool)
module.exports = {
    port: parseInt(process.env.PORT, 10),
    pool
}

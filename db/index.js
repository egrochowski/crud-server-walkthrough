const mysql = require('mysql2');
require('dotenv').config();
const Promise = require('bluebird');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'glossary',
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log('connected to mysql db!'))
  .then(() => {
    return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS words (
      word varchar(256),
      synonym varchar(256),
      partOfSpeech varchar(128)
    )`);
  })
  .catch(console.error);

module.exports = db;

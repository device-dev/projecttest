
var mysql = require("mysql2");
require("dotenv").config();
var db_name =  'projecttest';


const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : db_name
  }
});

// const knex = require('knex')({
//   client: 'mysql2',
//   connection: {
//     host : 'localhost',
//     user : 'ktb_prod',
//     password : '0,7B@oIO/TO_i^8kGH9rc34B2d0BR,+]42f',
//     database : db_name,
//   }
// });


module.exports = {  knex,
  JOB_SCHEDULE: '* * * * *'
};

// load the connection to our database from our conn.js script
const db = require('./conn')

// the method for query takes a string for the first argument.
// this string represents a sql query
// here we're using it to create a table named posts with the columns id, title and content
db.query(`
 CREATE TABLE posts (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    content CHAR(255) NOT NULL;
  )
`).then(function () {
  // .then is a method that takes a callback which will be run after the query is complete and is successful.
  console.log('🔫 Created table posts!');
  process.exit(); // tells node to quit our program. We do this because otherwise, the script is going to lock our terminal.
}).catch(function (error) {
  // .catch is a method that takes a callback which will be run if the query fails for any reason.
  console.error(error);
})

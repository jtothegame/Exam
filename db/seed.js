const db = require('./conn');
const faker = require('faker');

for (let i = 0; i < 20; i += 1) {
  // In the query below, $<title> refers to the property of the same name
  // of the object in the second argument
  // $<content> also refers to the property of the same name
  db.query(`
    INSERT INTO posts (name, content) VALUES ($<title>, $<content>)
  `, {
    title: `${faker.hacker.noun()}`,
    content: `${faker.hacker.phrase()}`,
    time: `${faker.date.recent()}`
  }).then(function () {
    console.log(`💣 Created tweet`);

    // only exit node on the last insert
    if (i === 19) process.exit();
  }).catch(function(err){console.log(err);})

}

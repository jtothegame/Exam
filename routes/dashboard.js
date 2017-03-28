const Express = require('express');
const router = Express.Router();
const db = require('../db/conn');

router.get('/',function(req,res,next){
  db.query(`SELECT * FROM posts ORDER BY posts DESC`)

   .then(function(posts){
      //res.send is useful to simply test if you're receiving the data you want
      // res.send(posts);
      console.log(posts)
      res.render('dashboard',{ posts })
    })
    .catch(function(err){
      res.send(err);
    })
  // res.render('posts/index');
})

router.post('/',function(req,res,next){
  const post = req.body;
  console.log(JSON.stringify(post))
  db.query(`
    INSERT INTO posts (name, content)
    VALUES ($<name>, $<tweet>)
  `, post).then(function(){
    res.redirect('/dashboard');
  }).catch(function(error){
    res.send(error);
  })
})


module.exports = router;

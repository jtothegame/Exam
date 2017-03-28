const Express = require('express');
const router = Express.Router();
const db = require('../db/conn');

router.get('dashboard',function(req,res,next){
  db.query(`SELECT * FROM posts ORDER BY posts DESC`)
    //terminate a route inside the callback passed to then and catch
    //e.g. res.send(), res.render()

   .then(function(posts){
      //res.send is useful to simply test if you're receiving the data you want
      // res.send(posts);
      res.render('dashboard',{posts})
    })
    .catch(function(err){
      res.send(err);
    })
  // res.render('posts/index');
})

router.get('/',function(req,res,next){
  res.render('dashboard');
})

router.post('dashboard',function(req,res,next){
  const post = req.body;
  console.log(JSON.stringify(post))
  db.query(`
    INSERT INTO posts (title, content)
    VALUES ($<title>, $<content>)
  `, post).then(function(){
    res.redirect('dashboard');
  }).catch(function(error){
    res.send(error);
  })
})


module.exports = router;

let express = require('express');
let path = require('path');
let bodyparser = require('body-parser');
let day = require('./currentdate');
let app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public')); // static files

var works=[];
var workitems =[];
app.get('/',(req,res)=>{

     res.render('list',{
           listtitle:day,
           newlist_item:works
     });
});


app.get('/work',(req,res)=>{
      res.render('list',{
            listtitle:"Work list",
            newlist_item:workitems
      });
 });

app.post('/',(req,res)=>{
     
      let item = req.body.work; 
      
      if(req.body.list === "Work list"){
         workitems.push(item);
         res.redirect('/work');
      }
     else {
        works.push(item);
        res.redirect('/');
     }
 });

app.get('/about',(req,res)=>{
    res.render('about');
});

app.listen(300);    
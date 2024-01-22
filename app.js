//jshint esversion:6

require('dotenv').config();
const express = require("express");
const mongoose=require("mongoose");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const session = require('express-session');
const app = express();


app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

// Require the express-session package


// Use the session middleware with some options
app.use(session({
  secret: 'i m jetlin', // a secret string to sign the session ID
  resave: false, // do not save session if unmodified
  saveUninitialized: true, // create session even if no data is stored
  cookie: { maxAge: 10000 } // set the cookie expiration time
}));

//databse       
mongoose.connect(process.env.MONGODB_URL);
//datastructure
const stu = new mongoose.Schema(
    { name: String,
     class: Number});
//data collection
const studentinfo = mongoose.model('studentinfo', stu);

app.get('/', function(req,res){

    res.render('home.ejs');
});


app.post('/', async function(req, res) {

    try {
        const fname=req.body.fname;
        const cname=req.body.cname;
        const persion = new studentinfo({
            name: fname,
            class: cname,
        });

        await persion.save(); 
       // console.log(result)
        const result=await studentinfo.findOne({name:fname}); 
        res.render('main.ejs',{pers:result});
    } catch (err) {
        console.log(err);
    }
});

// In your app.post('/result') route, use req.session.results instead of results
app.post('/result',async function(req,res){
    try {
        const one=req.body.one;
        const two=req.body.two;
        const three=req.body.three;
        const four=req.body.four;
        const five=req.body.five;
        const six=req.body.six;
        const seven=req.body.seven;
        const eight=req.body.eight;
        const nine=req.body.nine;
        const ten=req.body.ten;
        const el=req.body.el;
        const tw=req.body.tw;
        const thir=req.body.thir;
        const fort=req.body.fort;
        const fif=req.body.fif;
        const sixn=req.body.sixn;
        const svn=req.body.svn;
        const eighteen=req.body.eighteen;
        const nint=req.body.nint;
        const tenty=req.body.tenty;
        const tento=req.body.tento;
        const tenttw=req.body.tenttw;
        const tenthr=req.body.tenthr;
        const tentfr=req.body.tentfr;
        const tentfive=req.body.tentfive;
        const tentsx=req.body.tentsx;
        const tentsev=req.body.tentsev;
        const tentegh=req.body.tentegh;
        const tentnine=req.body.tentnine;
        const thirty=req.body.thirty;

// Initialize req.session.results to 0 if it does not exist
        if (!req.session.results) {
          req.session.results = 0;
        }
        if(one==="displacement"){
           req.session.results++
        }if(two==="caocl2"){
           req.session.results++
        }if(three==="NaHCO3"){
            req.session.results++
         }if(four==="mercury"){
            req.session.results++
         }if(five==="threeistoone"){
            req.session.results++
         }if(six==="copperndzinc"){
            req.session.results++
         }if(seven==="aldehyde"){
            req.session.results++
         }if(eight==="bond"){
            req.session.results++
         }if(nine==="liver"){
            req.session.results++
         }if(ten==="absence"){
            req.session.results++
         }if(el==="right"){
            req.session.results++
         }if(tw==="mito"){
            req.session.results++
         }if(thir==="cyto"){
            req.session.results++
         }if(fort==="syna"){
            req.session.results++
         }if(fif==="ovary"){
            req.session.results++
         }if(sixn==="pol"){
            req.session.results++
         }if(svn==="thisone"){
            req.session.results++
         }if(eighteen==="male"){
            req.session.results++
         }if(nint==="minus"){
            req.session.results++
         }if(tenty==="concave"){
            req.session.results++
         }if(tento==="near"){
            req.session.results++
         }if(tenttw==="red"){
            req.session.results++
         }if(tenthr==="ampere"){
            req.session.results++
         }if(tentfr==="voltmeter"){
            req.session.results++
         }if(tentfive==="one"){
            req.session.results++
         }if(tentsx==="onew"){
            req.session.results++
         }if(tentsev==="silicon"){
            req.session.results++
         }if(tentegh==="south"){
            req.session.results++
         }if(tentnine==="meth"){
            req.session.result++
         }if(thirty==="twenty"){
            req.session.results++
         }
      
       res.render('new.ejs',{mark: req.session.results} )
   
    }catch(err){
 console.log('err')
    }
 
});


app.post('/return',function(req,res){
    res.render('home.ejs');
});

let port = process.env.PORT;
if(port == null || port == ""){
  port = 3000;
}

app.listen(3000,function(){
    console.log("Server running well");
  })






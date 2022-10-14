console.log('hello');

const path=require('path');
const express=require('express');
const app=express();
const port=80;

//for serving static files
app.use('/static',express.static('static'));

//set the template engine as pug
app.set('view engine', 'pug');

//set the views directory
app.set('views', path.join(__dirname, 'template'))



// our pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
  })




app.get("/",(req,res)=>{
    res.send("this is homepage of my first app of node js")
});

app.get("/about",(req,res)=>{
    res.status(200).send("this is about of my first app of node js")
});

app.get("/this",(req,res)=>{
    res.status(404).send("PAGE NOT FOUND");
 
});

app.post("/about",(req,res)=>{
    res.send("this is post req  about of my first app of node js")
});

app.listen(port,()=>{
    console.log(`this is running on port${port}`);
});

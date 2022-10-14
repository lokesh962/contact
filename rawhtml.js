console.log('raw html');

const express=require('express');
const app=express();
const path=require('path');
const port=80;

//EXPRESS SPECIFIC CONFIG...

//serving static file
app.use('/static',express.static('static'));


//PUG SPECIFIC CONFIG...

//set template engline as pug
app.set('view engine','pug');

//set the views directory
app.set('views',path.join(__dirname,'template'));


//ENDPOINTS

app.get('/',(req,res)=>{
    const con="this is best ever content on the internet"
    const params=
    {
        'title':"My fav Game",
        'content':con
    };
res.status(200).render('index.pug',params);
});

//START SERVER
app.listen(port,()=>{
    console.log('running');
});
console.log('raw html');

const express=require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const app=express();
const path=require('path');
const { stringify } = require('querystring');
const port= process.env.PORT || 80;


//EXPRESS SPECIFIC CONFIG...

//serving static file
app.use('/static',express.static('static'));
app.use(express.urlencoded());


//PUG SPECIFIC CONFIG...

//set template engline as pug
app.set('view engine','pug');

//set the views directory
app.set('views',path.join(__dirname,'template'));


//ENDPOINTS

app.get('/',(req,res)=>{
    const con="this is lokesh"
    const params=
    {
        'title':"GYM WEBSITE",
        'content':con
    };
res.status(200).render('index.pug',params);
});



function main() {
    mongoose.connect('mongodb+srv://lokesh96:Hari0000@cluster0.7nwtzsv.mongodb.net/mydatabase?retryWrites=true&w=majority');
    console.log('connected successfully');
}
main();

const newSchema = new mongoose.Schema({
    name: String,
    age:Number,
    gender:String,
    address:String,
    more:String
});


const newModel = mongoose.model('userData', newSchema);



app.post('/',(req,res)=>{

    console.log(req.body);
  const params=
    {
        'message':"YOUR FORM HAS BEEN SENT SUCCESSFULLY"
    };
    res.status(200).render('index.pug',params)


    const user = new newModel({ name: req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        address:req.body.address,
        more:req.body.more });

        user.save();
});

newModel.find((err,data)=>{
    let b=JSON.stringify(data);
    fs.writeFileSync('temp.txt',b)
});
// console.log(d);



//START SERVER
app.listen(port,()=>{
    console.log('running');
});
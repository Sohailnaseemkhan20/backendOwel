const express = require('express');
const app = express();

app.get("", (req,res)=>{
    res.send( `
        <h1> Hello World </h1>
        <a href="/json"> Go to JSON </a>
        `)
})

app.get("/json", (req,res)=>{
    res.send( 
        [
            {"name": "Sohail", "age": 22},
            {"name": "Ali", "age": 23},
            {"name": "Ahmed", "age": 24}

        ]
        )
})

app.listen(2000, ()=>{
    console.log("Server is running on port 2000");
});
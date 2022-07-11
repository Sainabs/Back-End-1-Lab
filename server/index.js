const express = require('express');
const app =express();
const cors = require('cors');
const { get } = require('http');

app.use(cors());
app.use(express.json());


app.get('/api/users',(req, res)=>{
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

app.get('/weather/:temperature',(req, res)=> {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);

});

// With object destructuring, we can make the above code a little easier to read
// app.get("/weather/:temperature", (req, res) => {
//   const { temperature } = req.params;
//   const phrase = `<h3>It was ${temperature} today</h3>`;
//   res.status(200).send(phrase);
// });

app.listen(4000,()=>{
    console.log("Server running on port 4000")
});
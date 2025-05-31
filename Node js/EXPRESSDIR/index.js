const express = require("express") ;
const app = express() ;
console.dir(app) ;
let port = 3000 ;
app.listen(port , () => {
    console.log(`app listening on port ${port}`);
});

app.get("/" , (req , res) =>{
    res.send("Hello I am Root") ;
}) ;
// app.get("/apple" , (req ,res) => {
//     res.send(" You contacted apple path ") ;
// });
// app.get("/orange" , (req , res) => {
//     res.send("You contacted Orange path") ; 
// })
// app.get("*" , (req , res) => {
//     res.send("This Path does not exist ") ;
// }) ;
// app.post("/" , (req , res) => {
//     res.send("You send a post request ") ; 
// }) ;
app.get("/:username/:id", (req , res) =>{
    let { username ,id } = req.params ;
    let htmlStr  = `<h1>Welcome to the page of @${username}!</h1>`

    res.send(htmlStr) ;
}) ;

app.get("/search", (req , res ) => {
     let { q}  = req.query  ;
     if(!q) {
        res.send("Nothing Searched ") ;
        
     }
    res.send(` Search results for query: ${q}`) ;
    
})

// app.use((req ,res) =>{
//     console.log("request received") ;
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li> <li>Orange</li></ul>" ;
//     res.send(code) ;
// }) ;


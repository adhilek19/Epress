const express= require("express");
const app=express();
const usersRouter= require("./routes/users")
app.use(express.json());

app.get('/',(req,res)=>{

    res.send("hello wrold")

})
app.use("/users",usersRouter);


app.listen(3000,()=>{
    console.log("serever run at 3000")
})
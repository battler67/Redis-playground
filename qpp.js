import express from "express";
import axios from "axios";
import client from "./client.js";
const app = express();

app.use("/",async (req,res)=>{
    let CacheValue = await client.get("todos");
    if(CacheValue) res.json(JSON.parse(CacheValue));
    let {data} = await  axios.get("https://jsonplaceholder.typicode.com/todos/10");
    await client.set("todos",JSON.stringify(data));
    await client.expire("todos",30);
    res.send(data);
})
app.listen(9000,(req,res)=>{
    console.log("app is listeing");
});


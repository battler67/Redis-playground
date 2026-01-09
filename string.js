import client from "./client.js";

async function  init(){
    // await  client.set("name", "murali");
    // await client.expire("name",10);
    let res  = await client.get("name");
    console.log("Result ->",res);
}   

init();
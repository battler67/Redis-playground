import client from "./client.js";

async function init(){
    // await client.lPush("messages","1");
    // await client.lPush("messages","2");
    // await client.lPush("messages","3");
    // await client.lPush("messages","4");
    let res = await client.blPop("messages",40);
    console.log(res);
}   

init();
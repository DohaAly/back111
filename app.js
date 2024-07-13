const yargs = require("yargs")
const data10=require("./data10")
yargs.command ({
    command : "add",
    describe :"Add an item",
    handler : (x)=>{
        //console.log("Adding an item")
        data10.addPerson(x.id,x.fname,x.lname,x.city,x.age)
    }
})

yargs.command({
    command:"delete",
    describe:"Delete an item",
    handler:(x)=>{
data10.deleteData(x.id)
    }
})
//////////////////////////////////////////
yargs.command({
    command:"read",
    describe:"to read data",
    builder :{
        id :{
            describe: "id of the person",
            demandOption: true,
            type: "string"
        }
    },
    handler :(x)=>{
data10.ReadData(x.id)
    }
})
//////////////////////////////////////
yargs.command({
    command:"list",
    describe:"list data",
    handler :()=>{
        data10.list()
    }

})
yargs.parse()
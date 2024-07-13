const fs = require("fs")

const addPerson = (id,fname,lname,city,age)=>{

const allData = loadInfo()

const duplicateddata = allData.filter((obj)=>{
return obj.id === id
})
if(duplicateddata.length==0){
allData.push({
    id:id,
    fname : fname,
    lname : lname,
    city : city,
    age : age
})

saveallData(allData)
}
else {
    console.log("ID already exists")
}
}
/////////////////////////////////////////////////////
const loadInfo = ()=>{
    try{
        const datajson = fs.readFileSync("data10.json").toString()
    return  JSON.parse(datajson)
    }
    catch{
        return []
    }
}
////////////////////////////////////////////////////
const saveallData =(allData)=>{
const savedatajson =JSON.stringify(allData)
fs.writeFileSync("data10.json",savedatajson)
}
//////////////////////////////////////////////////////////
//delete data 
const deleteData =(id)=>{
const allData =loadInfo()
    const datatokeep = allData.filter((obj)=>{
return obj.id!==id

    })
    saveallData(datatokeep )
}
///////////////////////////////////////////////////
//to read data
const ReadData = (id)=>{
const allData =loadInfo()
const itemneeded =allData.find((obj)=>{
return obj.id ==id
})
if(itemneeded){
    console.log(itemneeded)
}
else{
    console.log("ID not found")
}
}
//////////////////////////////////////////////////////
//list data
const list = ()=>{
    const allData = loadInfo()
    allData.forEach(obj => {
        console.log(obj.fname,obj.city)
    })
        
    
}


///////////////////////////////////////////////
module.exports = {
    addPerson ,
    deleteData ,
    ReadData,
    list
}
const getDetails = (req,res) =>{
    res.send({
        name:"Rakesh",
        age:21,
        work:"free"
    })
}
module.exports.getDetails = getDetails
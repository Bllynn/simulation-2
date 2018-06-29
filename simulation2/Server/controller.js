module.exports={
    getAllHouses:(req,res)=>{
    //console.log(1111111111,res);
        const dbInstance=req.app.get('db');

        dbInstance.getAll().then( houses => res.send(houses))
        .catch(err=> {
            console.log(err)
            res.send(err)
            })
        },
    newHouse:(req,res)=>{
        const dbInstance=req.app.get('db');
        const {name,address,city,state,zipCode}=req.body
        // console.log(1111111111111,res);
        dbInstance.addHouse([name,address,city,state,zipCode]).then(houses=>res.send(houses))
        .catch(err=>{
            console.log(err)
            res.send(err)
        })
    }



}
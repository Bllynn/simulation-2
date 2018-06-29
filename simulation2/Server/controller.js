module.exports={
    getAllHouses:(req,res)=>{
    //console.log(1111111111,res);
        const dbInstance=req.app.get('db');

        dbInstance.getAllHouses().then( houses => res.send(houses))
        .catch(err=> {
            console.log(err)
            res.send(err)
            })
        },
    newHouse:(req,res)=>{
        const dbInstance=req.app.get('db');
        // console.log(1111111111111,res);
        dbInstance.newHouse().then(response=>res.send(response))
        .catch(err=>{
            console.log(err)
            res.send(err)
        })
    }



}
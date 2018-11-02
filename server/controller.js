module.exports={

    create:(req,res)=>{
        let dbInstance=req.app.get('db');
        const {id, name, price, img}=req.body;

        dbInstance.create_products([id, name, price, img]).then (response=>(
            res.status(200).send(response)
        )).catch (err=>{
            console.log('dbInstance is broken',err)
            res.status(500).send(err)
        });
    },

    get:(req,res)=>{
        let dbInstance=req.app.get('db');
        
        dbInstance.get_inventory().then(response=>{
            res.status(200).send(response)
        }).catch (err=>{
            console.log('its broken',err)
            res.status(500).send(err)
        })

    },

    delete:(req,res)=> {
        const dbInstance=req.app.get('db')
        const {id}= req.params;

        dbInstance.delete_products([id]).then (response=>{
            res.status(200).send(response)
        }).catch(err=>{
            res.status(500).send(err)
        })
    }

}
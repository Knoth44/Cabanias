const router = require("express").Router()
let Cabanias = require("../models/cabanias.models")

router.route("/").get((req,res)=>{
    Cabanias.find()
    .then(cabanias => res.json(cabanias))
    .catch(err=> res.status(400).json("Error: "+err))
})

router.route("/add").post((req,res)=>{
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newCabania = new Cabanias({
        username,
        description,
        duration,
        date,
    })
    newCabania.save()
    .then(()=>res.json("Cabania agregada"))
    .catch(err=>res.status(400).json("Error: "+err))
})

router.route("/:id").get((req,res)=>{
    Cabanias.findById(req.params.id)
    .then(cabanias => res.json(cabanias))
    .catch(err=>res.status(400).json("Error: "+err))
})

router.route("/:id").delete((req,res)=>{
    Cabanias.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Cabania borrada"))
    .catch(err=>res.status(400).json("Error: "+err))
})

router.route("/update/:id").post((req,res)=>{
    Cabanias.findById(req.params.id)
    .then(cabanias => {
        cabanias.username = req.body.username
        cabanias.description = req.body.description
        cabanias.duration = Number(req.body.duration)
        cabanias.date = Date.parse(req.body.date)

        cabanias.save()
        .then(()=> res.json("Cabania modificada"))
        .catch(err => res.status(400).json("Error: "+err))
    })
    .catch(err=>res.status(400).json("Error: "+err))
})


module.exports = router
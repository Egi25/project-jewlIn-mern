const express = require("express")
const contactModel = require("../models/contact.js")


const app = express()

//sa here qe kalojme info nga front ne back perdorim POST

app.post('/addContact',async(req,res)=>{

    try{
        //ka marre info nga frontend
        const newContact = new contactModel(req.body)
        //ka ruajtur infot 
        await newContact.save()
        res.status(200).send(newContact)
    }catch(err){
        console.log("Contact not saved",err)

        res.status(500).send("COntact not saved ",err )

    }

})



module.exports = app
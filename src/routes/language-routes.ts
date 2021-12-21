import express, { Router } from "express";

const languageRoutes = express.Router();

let languages: string[]= ["English", "French", "Italian", "Spanish"]

languageRoutes.get("/", function(req, res) {
    res.json(languages);
});

//this is to show a language by id /languages/:id
languageRoutes.get("/:id", function(req, res){
    let searchIndex: number = Number.parseInt(req.params.id) - 1;
    let languageObject = languages[searchIndex];
    res.json(languageObject);
})

languageRoutes.get("/random", function(req, res){
    res.json("Random languages");
});


export default languageRoutes;
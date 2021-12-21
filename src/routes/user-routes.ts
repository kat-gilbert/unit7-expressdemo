import express from "express";
import shopRoutes from "./shop-routes";

const userRoutes = express.Router();

userRoutes.post("/", function(req, res) {
    console.log(res.json(req.body));
});

userRoutes.get("/", function(req, res) {
    res.json(req.body);
});

// get a user by id
userRoutes.get("/:id/", function(req, res) {

    //search shop array

    res.json(`User ID: ${req.params.id}`); //any time you visit /users/ANY NUMBER you will get that id #
});

export default userRoutes;

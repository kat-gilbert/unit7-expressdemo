import express  from "express";
import Shop from "../models/shop";

const shopRoutes = express.Router();

const shops: Shop[] = [
        { id: 111, name: "Pepper's Pizza", rating: 4.5 },
        { id: 222, name: "Clive's Chives", rating: 3.4 },
        { id: 333, name: "Bretty's Brews", rating: 4.3 },
        { id: 444, name: "Sylvester's Shoes", rating: 3.8 },
        { id: 555, name: "Teddy's Tunes", rating: 4.7 }
];

//add Query ?minRating=4.0
shopRoutes.get("/", function (req, res) {
    let minRatingParam:string = req.query.minRating as String;
    if(minRatingParam) {
        let minRating: number = Number.parseFloat(minRatingParam);
        console.log(minRating);
        let filteredShops: Shop[] = shops.filter(shop => shop.rating >= minRating);
        res.json(filteredShops);
        }
    else {
    res.json(shops);
    }
});

shopRoutes.get("/:id", function (req, res) {
 
    // search array for id
    for (let i=0; i<shops.length; i++){
    if (parseInt(req.params.id) === shops[i].id) {
        res.json(shops[i]);
        break;
    }
}
    res.status(404);
    res.send({"error": "Shop not found"});
});

export default shopRoutes;
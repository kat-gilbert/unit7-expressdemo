import express from "express";
import routes from "./routes/app-routes";
import languageRoutes from "./routes/language-routes";
import userRoutes from "./routes/user-routes";
import searchRoutes from "./routes/search-routes";
import shopRoutes from "./routes/shop-routes";

const app = express();

const port = 3000; // spot where one application can run by itself - 3k is standard

app.use(express.json()); // enables express.json use and request object
app.use("/", routes);  //for this domain run these routse
app.use("/languages/", languageRoutes);
app.use("/users/", userRoutes);
app.use("/", searchRoutes); // first part already defined in search file -- just an alternative way
app.use("/api/shop", shopRoutes);




// directly set routes
// we have access to:
app.get("/students", function(request, response){ //allow someone to visit here
    response.json("Getting all students...");
}); 

app.post("/students", function(req, res) {
    res.json("Adding a student");
});

app.put("/student", function(req, res) {
    res.json("Updating a student");
});

app.delete("/student", function(req, res) {
    res.json("Deleting a student");
});

app.listen(port, function(){
    console.log(`Listening on ${port}`);
});
// run localhost:3000 in browser - "cannot GET" mesns connected just not working yet
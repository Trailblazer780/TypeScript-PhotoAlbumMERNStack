let express = require("express");
let cors = require('cors');
let path = require('path');
let MongoClient = require("mongodb").MongoClient;
let sanitize = require('express-sanitizer');
let ObjectId = require('mongodb').ObjectId;

// MongoDB constants
const URL = "mongodb://mongo:27017/";
const DB_NAME = "dbPhotos";

// construct application object via express
let app = express();
// add cors as middleware to handle CORs errors while developing
app.use(cors());
// add body-parser as middleware to handle JSON data
app.use(express.json());
// add middleware for sanitizer to check on incoming data
app.use(sanitize());

const CLIENT_BUILD_PATH = path.join(__dirname, "./../../client/build");

app.use("/", express.static(CLIENT_BUILD_PATH));

app.get("/get", async(request, response) => {
    // construct a MongoClient object, passing in additional options
    let mongoClient = new MongoClient(URL, { useUnifiedTopology: true });
    try {
        await mongoClient.connect();
        // get reference to database via name
        let db = mongoClient.db(DB_NAME);
        let photoArray = await db.collection("photos").find().sort("title",1).toArray();
        let json = { "photos": photoArray };
        // serializes sampleJSON to string format
        response.status(200);
        response.send(json);
    } catch (error) {
        console.log(`>>> ERROR : ${error.message}`);
        response.status(500);
        response.send({ "error": error.message });
    } finally {
        mongoClient.close();
    }
});


app.post("/addcomment", async(request, response) => {
    // construct a MongoClient object, passing in additional options
    let mongoClient = new MongoClient(URL, { useUnifiedTopology: true });
    let id = new ObjectId(request.sanitize(request.body.photoId));
    try {
        await mongoClient.connect();
        // let id = new ObjectId(request.sanitize(request.body.photoId));
        request.body.comment = request.sanitize(request.body.comment);
        request.body.author = request.sanitize(request.body.author);
        let selector = { "_id": id };

        // let update = { $push: { "comments": request.body } };

        let update = { $push: {"comments": {$each: [{"author":request.body.author, "comment":request.body.comment}]}}};
        // get reference to database via name
        let db = mongoClient.db(DB_NAME);
        let result = await db.collection("photos").updateOne(selector, update);



        // serializes sampleJSON to string format
        response.status(200);
        response.send(result);
    } catch (error) {
        console.log(`>>> ERROR : ${error.message}`);
        response.status(500);
        response.send({ "error": error.message });
    } finally {
        mongoClient.close();
    }
});

app.delete("/delete", async (request, response) => {
    // construct a MongoClient object, passing in additional options
    let mongoClient = new MongoClient(URL, { useUnifiedTopology: true });
    // get the id from the request
    // let id = request.body.id;
    let id = new ObjectId(request.sanitize(request.body.id));

    try {
        await mongoClient.connect();

        // get reference to collection
        let photoArray = mongoClient.db(DB_NAME).collection("photos");
        // Setup the delete query
        let selector = { "_id": id};
        // make it happen
        let result = await photoArray.deleteOne(selector);

        // status code
        response.status(200);
        response.send(result);


    } catch (error) {
        console.log(`>>> ERROR : ${error.message}`);
        response.status(500);
        response.send({ "error": error.message });
    } finally {
        mongoClient.close();
    }
});


app.use((request, response) => {
    response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(8080, () => console.log("Listening on port 8080"));
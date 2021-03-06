import { createRequire } from "module";
import { resolve } from "dns";
const require = createRequire(import.meta.url);
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var fs = require("fs");
import qs from "qs";
const app = express();
const apiPort = 5000;
var MongoClient = require("mongodb").MongoClient;
var http = require("http");
var https = require("https");

var privateKey = fs.readFileSync("certs/dissertation-experiment-sb.key", "utf8");
var certificate = fs.readFileSync("certs/dissertation-experiment-sb.chained.crt", "utf8");
var credentials = {key: privateKey, cert: certificate};

var optionsDict = {
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0
};

const numInSelection = 25;

app.listen(apiPort);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
console.log("Listening on port 5000");

app.post("/", function(req, res) {
  console.log("here in api");
  console.log(req.body);
  incrementOptionsDict(req.body.option);
  addData(req.body);
});

app.post("/page", function(req, res) {
  console.log("here in api");
  console.log(req.body);
  console.log(req.body.option);
  addPage(req.body);
});

function incrementOptionsDict(option) {
  optionsDict[option] = optionsDict[option] + 1;
  console.log(JSON.stringify(optionsDict));
  fs.writeFile("options.json", JSON.stringify(optionsDict), function(err) {
    if (err) throw err;
    console.log("complete");
  });
}

app.get("/code", function(req, res) {
  console.log(optionsDict);
  if (optionsDict[1] < numInSelection) {
    res.send({ option: 1 });
  } else if (optionsDict[2] < numInSelection) {
    res.send({ option: 2 });
  } else if (optionsDict[3] < numInSelection) {
    res.send({ option: 3 });
  } else if (optionsDict[4] < numInSelection) {
    res.send({ option: 4 });
  } else {
    console.log("I no longer care about results");
  }
});

class MongoBot {
  constructor() {
    const uri =
      "mongodb://user:password@mongodb:27017/participants?authSource=admin";

    this.client = new MongoClient(uri, { useNewUrlParser: true });
  }
  async init() {
    await this.client
      .connect()
      .then(() => {
        console.log("Connected to Database");
      })
      .catch(err => {
        console.log("Not Connected to Database ERROR! ", err);
      });
    console.log("connected");

    this.db = this.client.db("participants");
    this.collection = this.db.collection("Answers");
    this.collectionPages = this.db.collection("Pages");
  }

  async addAnswer(answer) {
    console.log(this.collection);
    const newAnswer = await this.collection.insertOne(answer);
    return newAnswer;
  }

  async addPage(page) {
    console.log(this.collection);
    const newPage = await this.collectionPages.insertOne(page);
    return newPage;
  }

  async viewAll() {
    this.collection.find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result[0]);
    });
  }
}

const mongoBot = new MongoBot();

async function addData(data) {
  await mongoBot.addAnswer(data);
}

async function addPage(page) {
  await mongoBot.addPage(page);
}

async function start() {
  await mongoBot.init();
}

setTimeout(function() {
  start();
}, 15000);
//start();

/*

app.get("/", function(req, res) {
  addData({ user: "sami" });
  var allData = findAllData();
  res.send(allData);
});

app.get("/addResults", function(req, res) {
  console.log(req);
  console.log(res);
});


async function addData(data) {
  await mongoBot.addAnswer(data);
}


async function start() {
  await mongoBot.init();
}



async function findAllData() {
  await mongoBot.viewAll();
}

start();

*/

//var httpsServer = https.createServer(credentials, app);
//httpsServer.listen(5000);

let data = fs.readFileSync("options.json");
let jsonData = JSON.parse(data);
console.log(data);
console.log(jsonData);
/*
console.log(jsonData.length);
for (var i = 0; i < jsonData.length; i++) {
  console.log(optionsDict[i]);
  console.log(jsonData[i]);
  optionsDict[i] = jsonData[i];
}
*/

for (var prop in jsonData) {
  if (!jsonData.hasOwnProperty(prop)){
    continue;
  }
  optionsDict[prop] = jsonData[prop];
}

console.log(optionsDict);

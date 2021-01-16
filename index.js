const express = require('express');
const consign = require('consign');
const PORT = 3000;
const HOST = '0.0.0.0';

const app = new express();
app.set('json spaces', 4)


consign()
.include("models")
.then("libs/middlewares.js")
.then("routes")
.then("libs/boot.js")
.into(app);

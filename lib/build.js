#!/usr/bin/env node
var fs = require('fs');
var Liquid = require("liquid-node")
var engine = new Liquid.Engine

var d = JSON.parse(fs.readFileSync('data/recipes.json', 'utf-8'));
var t = fs.readFileSync('_layouts/recipes.html','utf-8');
// Write the JSON into file
d.forEach(function (e, i, a){
  engine
    .parse(t)
    .then(function (template){
      return template.render(e)
    })
    .then(function(result) { 
      fs.writeFileSync('_recipes/' + e["basename"] + '.md', result) 
    });
})

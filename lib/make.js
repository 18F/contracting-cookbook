#!/usr/bin/env node
var fs = require('fs');
var yaml = require('js-yaml');

// Get each of the files in the recipes directory
var files = fs.readdirSync("_recipes-data");
var res = files.

  // First, ignore the template.yml file
  filter (function (d) {
    if (d != "template.yml") return true;
  }).

  // Then, get the YAML from each recipe into JSON
  map(function (d){
    return yaml.safeLoad(fs.readFileSync('_recipes-data/' + d, 'utf8'));
  })

// Write the JSON into file
fs.writeFileSync('data/recipes.json',JSON.stringify(res, null, 1))
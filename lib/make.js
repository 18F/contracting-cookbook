var fs = require('fs');
var yaml = require('js-yaml');

var files = fs.readdirSync("recipes");
var res = files.map(function (d){
  return yaml.safeLoad(fs.readFileSync('recipes/' + d, 'utf8'));
})
fs.writeFileSync('data/recipes.json',JSON.stringify(res, null, 1))
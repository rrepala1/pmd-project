var Walker=require("Walker"),path=require("path"),fs=require("fs"),handlebars=require("handlebars"),basePath=path.resolve(__dirname,".."),jsPath=path.join(basePath,"src/js"),fileOptions={encoding:"utf-8"},indexContent=fs.readFileSync(path.join(basePath,"index.hbs"),fileOptions),indexTemplate=handlebars.compile(indexContent),indexWritePath=path.join(basePath,"index.html");handlebars.registerHelper("toJSON",function(e){return new handlebars.SafeString(JSON.stringify(e))});var namespace=function(e,i){for(var t=0;t<e.length;t++)0!==e[t].length&&(i[e[t]]||(i[e[t]]={}),i=i[e[t]])};module.exports=function(){var e=Walker(jsPath),i={files:["\\utils\\utils.js","\\items\\AbstractContentItem.js"],directories:{}},t=this.async();e.on("file",function(e){var t=e.replace(jsPath,"");i.files.indexOf(t)===-1&&i.files.push(t)}),e.on("dir",function(e){namespace(e.replace(jsPath,"").split(path.sep),i.directories)}),e.on("end",function(){var e="var lm="+JSON.stringify(i.directories)+";";fs.writeFileSync(__dirname+"/ns.js",e),fs.writeFile(indexWritePath,indexTemplate(i),t)})};
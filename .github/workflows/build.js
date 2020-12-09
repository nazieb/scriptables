#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const getDirectories = source =>
    fs.readdirSync(source, { withFileTypes: true })
        .filter(dir => dir.isDirectory() && !dir.name.startsWith("."))
        .map(dir => path.resolve("./", dir.name));

const deployDir = path.resolve("./", ".deploy");
if (!fs.existsSync(deployDir)){
    fs.mkdirSync(deployDir);
}

getDirectories("./").forEach(dir => {
    const json = require(`${dir}/config.json`);
    json.script = fs.readFileSync(`${dir}/script.js`, "UTF-8");

    const result = JSON.stringify(json, null, 2);
    fs.writeFileSync(`${deployDir}/${json.name}.scriptable`, result, "UTF-8");
});
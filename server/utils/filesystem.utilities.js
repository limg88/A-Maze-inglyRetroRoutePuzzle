"use strict";

const fs = require("fs");

function readData(filePath) {
  try {
    return fs.readFileSync(filePath);
  } catch (err) {
    throw err;
  }
}

function parseJson(data) {
  return JSON.parse(data);
}

module.exports = {
  readData: readData,
  parseJson: parseJson
};

"use strict";

const validate = require("../validators/validators");

function reader() {
  let inputArgs = process.argv.slice(process.env.NORM_FACTOR);
  validate.inputLength(inputArgs);
  validate.isStartRoomNumber(inputArgs[process.env.START_ROOM_INDEX]);

  return inputArgs;
}

module.exports.reader = reader;
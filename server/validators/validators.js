"use strict";

function startRoom(startRoom, roomsMap) {
  if (!roomsMap[startRoom]) {
    throw new Error("\nError | Invalid departure room\n");
  }

  return true;
}

function objectsToCollect(toCollect, objectsMap) {
  toCollect.forEach(object => {
    if (!objectsMap[object]) {
      throw new Error("\nError | Could not find a path\n");
    }
  });

  return true;
}

function inputLength(inputArgs) {
  if (inputArgs.length < process.env.MIN_ALLOWED_PAREMETERS) {
    throw new Error("\nError | The minimum number of inputs allowed is two\n");
  }

  return true;
}

function isStartRoomNumber(startRoom) {
  let start = Number(startRoom);
  if (!Number.isInteger(start) || start < 1) {
    throw new Error("\nError | Invalid departure room\n");
  }

  return true;
}

module.exports = {
  inputLength: inputLength,
  isStartRoomNumber: isStartRoomNumber,
  objectsToCollect: objectsToCollect,
  startRoom: startRoom
};

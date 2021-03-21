"use strict";

const roomsMap = [];
const adjacencyMap = [];
const objectsMap = [];

function calculateDataStructures(map) {
  map.rooms.forEach(currentRoom => {
    calculateRoomsMap(currentRoom);
    calculateAdjacencyMap(currentRoom);
    calculateObjectsMap(currentRoom);
  });

  return;
}

function calculateRoomsMap(room) {
  roomsMap[room.id] = room;
  return roomsMap;
}

function calculateAdjacencyMap(room) {
  adjacencyMap[room.id] = calculateRoomNeighbors(room);
  return adjacencyMap;
}

function calculateRoomNeighbors(room) {
  let neighbors = [];

  if (room.north) {
    neighbors[room.north] = 1;
  }
  if (room.south) {
    neighbors[room.south] = 1;
  }
  if (room.west) {
    neighbors[room.west] = 1;
  }
  if (room.east) {
    neighbors[room.east] = 1;
  }

  return neighbors;
}

function calculateObjectsMap(room) {
  if (room.objects.length) {
    room.objects.forEach(object => {
      objectsMap[object.name] = room.id;
    });
  }

  return objectsMap;
}

function getObjectsRooms(objects) {
  let nodes = [];
  objects.forEach(currentObject => {
    if (
      objectsMap[currentObject] &&
      !nodes.includes(objectsMap[currentObject])
    ) {
      nodes.push(objectsMap[currentObject]);
    }
  });

  return nodes;
}

const getAdjacencyMap = () => adjacencyMap;

const getObjectsMap = () => objectsMap;

const getRoomsMap = () => roomsMap;

module.exports = {
  calculateDataStructures: calculateDataStructures,
  getObjectsRooms: getObjectsRooms,
  getAdjacencyMap: getAdjacencyMap,
  getRoomsMap: getRoomsMap,
  getObjectsMap: getObjectsMap
};

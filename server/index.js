"use strict";

require('dotenv').config();

const readerUtils = require("./utils/read.utilities");
const fileSystemUtils = require("./utils/filesystem.utilities");
const mapUtils = require("./utils/map.utilities");
const validators = require("./validators/validators");
const breadthFirstSearchUtils = require("./utils/breadth-first-search.utilities");
const printUtils = require("./utils/print.utilities");

const args = readerUtils.reader();
const filePath = args[process.env.FILE_PATH_INDEX];
const toCollect = args.slice(process.env.TO_COLLECT_INDEX);
const startRoom = Number(args[process.env.START_ROOM_INDEX]);

const data = fileSystemUtils.readData(filePath);
const map = fileSystemUtils.parseJson(data);

mapUtils.calculateDataStructures(map);
const roomsMap = mapUtils.getRoomsMap();
const targetRooms = mapUtils.getObjectsRooms(toCollect);
const objectsMap = mapUtils.getObjectsMap();

validators.startRoom(startRoom, roomsMap);
validators.objectsToCollect(toCollect, objectsMap);

const adjacencyMap = mapUtils.getAdjacencyMap();
const route = breadthFirstSearchUtils.getRoute(adjacencyMap, startRoom, targetRooms);

isRouteEmpty(route);
printUtils.printResult(route, roomsMap, toCollect);

function isRouteEmpty(route) {
  if (!route) {
    throw new Error("\nError | Could not find a path\n");
  }
}

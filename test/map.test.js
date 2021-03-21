"use strict";

const assert = require("assert");
const mapUtils = require("../server/utils/map.utilities");
const fileSystemUtils = require("../server/utils/filesystem.utilities");

const stringifiedRoom = '{"rooms": [{ "id": 1, "name": "Hallway", "north": 2, "objects": [] }, { "id": 2, "name": "Dining Room", "south": 1, "west": 3, "east": 4, "objects": [] }, { "id": 3, "name": "Kitchen","east":2, "objects": [ { "name": "Knife" } ] }, { "id": 4, "name": "Sun Room","west":2, "objects": [ { "name": "Potted Plant" } ] }]}';

const map = fileSystemUtils.parseJson(stringifiedRoom);

describe("Data Structures - takes as input a mocked test map", function() {
  describe("#calculateDataStructures", function() {
    mapUtils.calculateDataStructures(map);
    describe("#getRoomsMap()", function() {
      it("should return a data structure consistent with the provided test map, this means that each non empty position j inside the array should contains the same data of the room with id=j", function() {
        let roomsMap = mapUtils.getRoomsMap();
        map.rooms.forEach(room => {
          assert.strictEqual(roomsMap[room.id].id, room.id);
          assert.strictEqual(roomsMap[room.id].name, room.name);
          assert.strictEqual(roomsMap[room.id].north, room.north);
          assert.strictEqual(roomsMap[room.id].south, room.south);
          assert.strictEqual(roomsMap[room.id].east, room.east);
          assert.deepStrictEqual(roomsMap[room.id].objects, room.objects);
        });
      });
    });

    describe("#getObjectsMap()", function() {
      let objectsMap = mapUtils.getObjectsMap();
      it("should return a data structure consistent with the provided test map, this means that in each non empty position j inside the array should contanins the same object contained inside the rooom with id=j ", function() {
        map.rooms.forEach(room => {
          let objectInRoom = room.objects;
          if (objectInRoom && objectInRoom.length > 0) {
            assert.strictEqual(room.id, objectsMap[room.objects[0].name]);
          }
        });
      });
      it("should return a data structure in which Knife is in room 3 and Potted Plant is in room 4", function() {
        assert.strictEqual(3, objectsMap["Knife"]);
        assert.strictEqual(4, objectsMap["Potted Plant"]);
      });
    });

    describe("#getAdjacencyMap()", function() {
      let adjacencyMap = mapUtils.getAdjacencyMap();
      it("should return a matrix in which room 1 is connected with room 2", function() {
        assert.strictEqual(1, adjacencyMap[1][2]);
      });
      it("should return a matrix in which room 2 is connected with room 1, room 3 and room 4", function() {
        assert.strictEqual(1, adjacencyMap[2][1]);
        assert.strictEqual(1, adjacencyMap[2][3]);
        assert.strictEqual(1, adjacencyMap[2][4]);
      });
    });

    describe("#getObjectsRooms()", function() {
      it("should return an array in which Knife should associated with room 3 and Potted Plant shoudl be associated with room 4", function() {
        let objectRooms = mapUtils.getObjectsRooms(["Knife", "Potted Plant"]);
        assert.strictEqual(3, objectRooms[0]);
        assert.strictEqual(4, objectRooms[1]);
      });
    });
  });
});

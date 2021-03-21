"use strict";

var expect = require('chai').expect;

const validators = require("../server/validators/validators");

const startRoom = 2;
const toCollect = ["Knife", "Potted Plant"];
const objectsMap = {
  Knife: 3,
  "Potted Plant": 4
};
const roomsMap = [{},
  {
    id: 1,
    name: "Hallway",
    north: 2,
    objects: []
  },
  {
    id: 2,
    name: "Dining Room",
    south: 1,
    west: 3,
    east: 4,
    objects: []
  },
  {
    id: 3,
    name: "Kitchen",
    east: 2,
    objects: [{
      name: "Knife"
    }]
  },
  {
    id: 4,
    name: "Sun Room",
    west: 2,
    objects: [{
      name: "Potted Plant"
    }]
  }
];

describe("Validators", function () {
  describe("#startRoom()", function () {
    it("should execute without error if start room is inside the map", function () {
      expect(validators.startRoom(startRoom, roomsMap)).to.be.true;
    });

    it("should throw error if start room is not inside the map", function () {
      expect(function () {
          validators.startRoom(11, roomsMap)
        })
        .to.throw(Error);
    });
  });

  describe("#objectsToCollect()", function () {
    it("should execute without error if test objects to collect are inside the map", function () {
      expect(validators.objectsToCollect(toCollect, objectsMap)).to.be.true;
    });

    it("should throw error if test objects to collect are not inside the map", function () {
      expect(function () {
          validate.objectsToCollect(["Bubbles", "Glass"], objectsMap)
        })
        .to.throw(Error);
    });
  });

  describe("#isStartRoomNumber()", function () {
    it("should execute without error if start room is inside the map", function () {
      expect(validators.isStartRoomNumber(startRoom)).to.be.true;
    });
    it("should throw error if start room is not a number", function () {
      expect(function () {
          validate.isStartRoomNumber("5A")
        })
        .to.throw(Error);
    });
  });

  describe("#inputLength()", function () {
    it("should execute without error if provide at least two input arguments for the script", function () {
      expect(validators.inputLength(["map", 2])).to.be.true;
    });
    it("should exit with error code 1 if the script it's executed with less than 2 arguments", function () {
      expect(function () {
          validate.inputLength("map")
        })
        .to.throw(Error);
    });
  });
});

"use strict";

const assert = require("assert");
const breadthFirstSearchUtils = require("../server/utils/breadth-first-search.utilities");

const tree = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]
];

const start = 2;
const end = 4;
const parents = [1, 2, null, 1, 2, 5];
const targetNode = 3;
const targetRooms = [3, 4];

describe("breadthFirstSearchUtils", function () {
  describe("#breadthFirstSearch()", function () {
    it("should return [2,1,4] when input are test tree, start=2, end=4", function () {
      assert.deepStrictEqual([2, 4], breadthFirstSearchUtils.breadthFirstSearch(tree, start, end));
    });
  });

  describe("#getRoute()", function() {
    it("should return [2,4,2,3] when I provide the test tree, the test start room and the test target rooms", function() {
      assert.deepStrictEqual(
        [2, 4, 2, 3], breadthFirstSearchUtils.getRoute(tree, start, targetRooms)
      );
    });
  });
});
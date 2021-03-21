"use strict";

const breadthFirstSearch = function(tree, rootNode, targetNode) {
  let parents = [];
  let queue = [];
  let visited = [];
  let current = [];

  queue.push(rootNode);
  parents[rootNode] = null;
  visited[rootNode] = true;

  while (queue.length) {
    current = queue.shift();

    if (current === targetNode) {
      let path = calculateRoute(parents, targetNode);
      return path;
    }

    for (let i = 0; i < tree.length; i++) {
      if (i !== current && tree[current][i] && !visited[i]) {
        parents[i] = current;
        visited[i] = true;
        queue.push(i);
      }
    }
  }

  return null;
};

const calculateRoute = function(parents, targetNode) {
  let result = [targetNode];

  while (parents[targetNode] !== null) {
    targetNode = parents[targetNode];
    result.push(targetNode);
  }
  return result.reverse();
};

const getRoute = function(adjacencyMap, rootNode, _targetNode) {
    let route = [rootNode];
  
    while (_targetNode.length) {
      let targetNode = _targetNode.pop();
      let path = breadthFirstSearch(adjacencyMap, rootNode, targetNode);
  
      if (!path) {
        return path;
      }

      path.shift();
      route = route.concat(path);
      rootNode = targetNode;
    }
  
    return route;
  }  

module.exports = {
  breadthFirstSearch: breadthFirstSearch,
  getRoute: getRoute
};

import { GNodeStr } from "../graph/graph";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
    start: GNodeStr,
    result: string[] = [],
    visited = new Set([start])): string[] {

      //add start.val to result
      //access start.adjacent and use forEach,
      //check if child was seen already (is in visited):
      // if true don't do anything, if false, add to visited
      // result.push(...rdfs(child))
      //
      //return
  return ["todo"];
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: GNodeStr): string[] {
  return ["todo"];
}

/** Return array of nodes, in BFS order (not recursive version)  */

function bfs(start: GNodeStr): string[] {
  return ["todo"];
}


export { iDfs, rDfs, bfs };
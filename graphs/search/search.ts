import { GNodeStr } from "../graph/graph";
import { Queue } from "../common/queue";

/** Return array of nodes, in DFS order (recursive version)  */
//TODO: ask question about test for rDFs
function rDfs(
  start: GNodeStr,
  result: string[] = [],
  visited = new Set([start])): string[] {
  result.push(start.value);

  start.adjacent.forEach((child) => {
    if (!visited.has(child)) {
      visited.add(child);
      rDfs(child, result, visited);
      // result.push(...rDfs(child, [], visited));
    }
  })

      //add start.val to result
      //access start.adjacent and use forEach,
      //check if child was seen already (is in visited):
      // if true don't do anything, if false, add to visited
      // result.push(...rdfs(child))
      //
      //return
  return result;
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: GNodeStr): string[] {
  const toVisit = [start]; //TODO: use stack
  const visited: Set<GNodeStr> = new Set([]);
  let result: string[] = [];

  while (toVisit.length > 0) {
    const poppedNode = toVisit.pop()!;
    visited.add(poppedNode);

    poppedNode.adjacent.forEach(c => {
      if (!visited.has(c)) {
        toVisit.push(c);
      }
    });
  }
  visited.forEach(n => result.push(n.value));
  return result;
}

/** Return array of nodes, in BFS order (not recursive version)  */

function bfs(start: GNodeStr): string[] {
  const toVisit = new Queue<GNodeStr>([start]);
  const visited: Set<GNodeStr> = new Set([]);
  let result: string[] = []; //TODO: Move to where we use it, or append as we go (and drop line 68)

  while (!toVisit.isEmpty()){
    const dNode = toVisit.dequeue()!;
    visited.add(dNode);

    dNode.adjacent.forEach(c => {
      if(!visited.has(c)){
        toVisit.enqueue(c);
      }
    });
  }
  visited.forEach(n => result.push(n.value));
  return result;
}


export { iDfs, rDfs, bfs };
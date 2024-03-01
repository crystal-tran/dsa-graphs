import { GNodeStr } from "../graph/graph";
import { Queue } from "../common/queue";
import { Stack } from "../common/stack";

/** Return array of nodes, in DFS order (recursive version)  */
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
  const toVisit = new Stack([start]);
  const visited: Set<GNodeStr> = new Set([]);
  let result: string[] = [];

  while (!toVisit.isEmpty()) {
    const poppedNode = toVisit.pop()!;
    if(!visited.has(poppedNode)){
      visited.add(poppedNode);
      result.push(poppedNode.value)
    }

    poppedNode.adjacent.forEach(c => {
      if (!visited.has(c)) {
        toVisit.push(c);
      }
    });
  }
  return result;
}

/** Return array of nodes, in BFS order (not recursive version)  */

function bfs(start: GNodeStr): string[] {
  const toVisit = new Queue([start]);
  const visited: Set<GNodeStr> = new Set([]);
  let result: string[] = [];

  while (!toVisit.isEmpty()){
    const dNode = toVisit.dequeue()!;
    if(!visited.has(dNode)){
      visited.add(dNode);
      result.push(dNode.value);
    }

    dNode.adjacent.forEach(c => {
      if(!visited.has(c)){
        toVisit.enqueue(c);
      }
    });
  }

  return result;
}


export { iDfs, rDfs, bfs };
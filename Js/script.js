"use strict";

let start = +prompt('Введіть вихідний стан', '0');
let finish = +prompt('Введіть кінцевий стан', '11');

let graph = [
         [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
         [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
         [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
         [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
         [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
         [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

//debugger;
function bfs(start, finish){
	let prev = solve(start);
	return reconstructPath(start, finish, prev);
}

function solve(start){
	let queue = [start];

	let visited = new Array(15).fill(false);
	visited[start] = true;

	let prev = new Array(15).fill(null);
	while(queue.length){
		let node = queue.pop();
		for (let i = 0; i < graph[node].length; i++){
			if(graph[node][i] == 1){
				if(!visited[i]){
					queue.push(i);
					visited[i] = true;
					prev[i] = node;
				}
			
			}
		}
	}
	return prev;
}

function reconstructPath(start, finish, prev){
	let path = [];
	for(let at = finish; at != null; at = prev[at]){
		path.push(at);
	}

	path.reverse();

	if(path[0] == start)
		return path;
	return null;

}
let result = bfs(start, finish);
if(result == null){
	alert(`Шлях із ${start} до ${finish}, не знайдено`)
}else{
	alert(result);
}
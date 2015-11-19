#pragma strict

var objectToSpawn : GameObject;
var spawnDelay = 1.0;


function Start () 
{
	Invoke("Spawn", spawnDelay);
}

function Spawn()
{
	Instantiate(objectToSpawn, transform.position, transform.rotation);
	Invoke("Spawn",spawnDelay);
}
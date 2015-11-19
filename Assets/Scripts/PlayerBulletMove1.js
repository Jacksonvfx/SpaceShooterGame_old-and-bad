#pragma strict

var bulletSpeed : float = 25;


function Update () 
{
transform.position += transform.forward*bulletSpeed*Time.deltaTime;


}

function OnBecameInvisible () {
	Destroy(gameObject);
}

function OnCollisionEnter()
	{
		Destroy(gameObject);
	}

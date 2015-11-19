#pragma strict

var bullet:GameObject ;
var fire : KeyCode;

var fireRate = 0.2;
var readyToShoot = true;

function Update () 
{
	if (Input.GetKey(fire) && readyToShoot)
	{
	Instantiate(bullet, transform.position,transform.rotation);
	readyToShoot = false;
	Invoke("ResetReadyToShoot", fireRate);
	}

}
function ResetReadyToShoot()
{
readyToShoot = true;
}
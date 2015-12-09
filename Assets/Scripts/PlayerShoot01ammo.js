#pragma strict

var bullet:GameObject ;
var fire : KeyCode;

var fireRate = 0.2;
var readyToShoot = true;

function Update ()
{
	if (Input.GetKey(fire) && readyToShoot && GameMaster.ammo > 0)
	{
	    var newBullet = Instantiate(bullet, transform.position,transform.rotation);
	    GameMaster.ammo -=0.5;
	readyToShoot = false;
	Invoke("ResetReadyToShoot", fireRate);
	}

}
function ResetReadyToShoot()
{
readyToShoot = true;
}

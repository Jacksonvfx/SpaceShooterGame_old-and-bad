#pragma strict

var bulletSpeed : float = 4;


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
function OnTriggerStay(other: Collider) 
    {
        if (other.tag == "PlayerBubble")
            GameMaster.power +=1;
    }

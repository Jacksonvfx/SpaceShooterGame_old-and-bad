

var life = 0.0;


function OnCollisionEnter(bullet : Collision) {
    if(bullet.gameObject.tag == "PowerBullet")
    {
        TakeDamage(10.0);
    }
}


function TakeDamage(damage: float) {
    life += damage;
    Debug.Log("got Hit for " + damage + " damage");

    Update();
}

function Update() {
    if(life >= 6)
    {
        Destroy(transform.parent.gameObject);
        GameMaster.currentScore += 1;
    }
}

function OnBecameInvisible()
{
	Destroy(transform.parent.gameObject);
}

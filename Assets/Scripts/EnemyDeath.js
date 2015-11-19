

var life = 0;
 
 
function OnCollisionEnter(bullet : Collision) {
 
    if(bullet.gameObject.tag == "Bullet")
    {
           life +=1;
           if(life >= 6)
           {
           	Destroy(transform.parent.gameObject);
           	GameMaster.currentScore += 1;
           }
    }
	if(bullet.gameObject.tag == "Missile")
    {
           life +=5;
           if(life >= 6)
           {
           	Destroy(transform.parent.gameObject);
           	GameMaster.currentScore += 1;
           }
    }
}


function OnBecameInvisible()
{
	Destroy(transform.parent.gameObject);
}
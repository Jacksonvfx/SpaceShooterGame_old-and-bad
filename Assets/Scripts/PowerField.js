#pragma strict

function OnTriggerStay(other: Collider) 
{
    if (other.tag == "EnemyBullet")
    GameMaster.power +=1;
}

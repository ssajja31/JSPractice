//Generators - functions that can be paused
//concept of iteration (has value and done properties)

const getNum = function* () 
{
    for(var i = 0; i < 5; i++)
    {
        yield i;
    }
}

const a = getNum();

for(var i = 0; i < 6; i++)
{
    console.log(a.next().value);
}

//Async Await
//Yield promises using await
//returns a promise

const randomUsers = async n =>
{
    try
    {
        const fetchApi = await fetch(`https://randomuser.me/api/?results=${n}`);   
        const randomUsers = await fetchApi.json();
        randomUsers.results.forEach(data => console.log(data.name.first + " " + data.name.last));
    }
    catch(e)
    {
        console.log("Error - " + e);
    }
}

randomUsers(3);


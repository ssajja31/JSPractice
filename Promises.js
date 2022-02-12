/* promise - asynchronous computations
3 states - pending, fulfilled, rejected
*/

var first = ["a", "b", "c"];
var second = ["c", "d", "e"];

const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(first);
    }, 10);
    
    setTimeout(() => {
        reject("Failure");
    }, 50);
})

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(second);
    }, 10);
    
    setTimeout(() => {
        reject("Failure");
    }, 50);
})

firstPromise.then(data => console.log(data)).catch(error => console.log(error));

Promise.all([firstPromise, secondPromise]).
    then(data => 
    {
        const [fir, last] = data;
        for(var i = 0; i < fir.length; i++)
        {
            console.log(`${fir[i]} ${last[i]}`);
        }
    }).
    catch(error => console.log(error));
    
const getRandomUsers = n =>
{
    const fetchApi = fetch(`https://randomuser.me/api/?results=${n}`);
    fetchApi.then(data => {
        var jsonData = data.json();
        jsonData.then(data => {
            var results = data.results;
            results.forEach(data => console.log(data.name.first + " " + data.name.last));
        });
    })
}

getRandomUsers(10);

const third = new Promise((resolve, reject) => {
    resolve("Success");
    reject("Failure");
});

third.then(data => console.log(data));



function printDivs() 
{
    startTime = Date.now()
    randomNum = Math.floor(Math.random() * stopValue);
    for(i = 0; i <= stopValue; i++) 
        {
            if(randomNum == i)
                {
                    document.getElementById('div1').innerHTML += `<div id="${i}" class="lightOn" onclick="turnOffLight()"></div>`;
                }
            else if (randomNum != i) 
                {
                    document.getElementById('div1').innerHTML += `<div id="${i}" class="lightOff"></div>`;
                }
        }

       
   
}

function printList() 
{
    let result = "";
    for (let i = 0; i < reactionTimes.length; i++) {
    result+=
    `
    <li>${reactionTimes[i]}ms
    `
    }

    return result;
}

function turnOffLight() 
{
newTime = Date.now() - startTime;
reactionTimes.push(newTime);
html.innerHTML = ``;
updateView();
}
updateView();

function updateView() 
{
    
    html.innerHTML = /*HTML*/ 
    `
    <div class="container" id="container">
    <span clss="divs" id="div1"></span>
    </div>
    <div class="list" id="list">Reaction times: ${printList()} </div>
    `;
    printDivs();
}
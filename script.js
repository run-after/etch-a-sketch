const container = document.querySelector("#container");

let gridSize = 4;
createGrid();
//selects button and stores it in object(?) button
const button = document.querySelector("button");
//adds the click event listener
button.addEventListener('click', e => {
    // need to delete old element and then create a new one using the same code as above.
   
    for(let x = 0; x<gridSize*gridSize; x++){
        document.getElementById(x).remove();

    }

    gridSize = prompt("how many");
    createGrid();


})
function createGrid(){
    container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, auto`);

    for(let i = 0; i<gridSize*gridSize; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid');
    //allows size to change, but the padding keeps it square.
    gridItem.setAttribute('style', 'width: auto; padding-bottom: 100%')
    //gives each item a unique id
    gridItem.id = i;
    //puts boxes onto page
    container.appendChild(gridItem);
    //changes box color upon mouse touching
    document.getElementById(i).addEventListener("mouseenter", function(event) {
        document.getElementById(i).style.backgroundColor = "blue";
    });
    
}
}
const container = document.querySelector("#container");

for(let i = 0; i<16; i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid');

gridItem.setAttribute('style', 'border: solid; height: 50px; width: 50px')
//gives each item a unique id
gridItem.id = i;
//puts boxes onto page
container.appendChild(gridItem);
//changes box color upon mouse touching
document.getElementById(i).addEventListener("mouseenter", function(event) {
    document.getElementById(i).style.backgroundColor = "blue";
});
}


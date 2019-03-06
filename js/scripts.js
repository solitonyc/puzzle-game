const gamePieces = document.querySelectorAll(".gamePieces");

function allowDrop(ev) {
    ev.preventDefault();
}


function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
}

//this is my default code for drop using 'id'
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("id");
    ev.target.appendChild(document.getElementById(data));
    if (ev.dataTransfer.getData('id') === 'pieces') {
        alert('Correct')
    } else {alert('Wrong')}
}

// //pull images from folder into an array
// const images = document.images,
//     data = [];
// for (var i = 0, len = images.length; i < len; i++) {
//   data.push(images[i].src);
//   console.log(data[i]);
//   return data;
// }

//run randomizer of images
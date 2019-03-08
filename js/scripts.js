

const gamePieceImages = [
  {
    id: 1,
    dataDiv: 1,
    src: "images/rd1/puzzle1_01.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 2,
    dataDiv: 2,
    src: "images/rd1/puzzle1_02.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 3,
    dataDiv: 3,
    src: "images/rd1/puzzle1_03.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 4,
    dataDiv: 4,
    src: "images/rd1/puzzle1_04.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 5,
    dataDiv: 5,
    src: "images/rd1/puzzle1_05.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 6,
    dataDiv: 6,
    src: "images/rd1/puzzle1_06.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 7,
    dataDiv: 7,
    src: "images/rd1/puzzle1_07.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 8,
    dataDiv: 8,
    src: "images/rd1/puzzle1_08.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 9,
    dataDiv: 9,
    src: "images/rd1/puzzle1_09.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  }
]
//shuffles images in the array above
function shuffledImages(array) {
  let m = array.length, t, i;
  for (i = 0; i < array.length; i++) {
  while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  return array;
  }
}


//this captures the shuffled images from above
let newArray = shuffledImages(gamePieceImages)
 console.log(newArray)

//this displays the captures images into the DIV pieces
const gamePiecesDiv = document.getElementById('pieces');

//this dynamically creates the pieces array on left side of page from objects up top

// for (let i=0; i<newArray.length; i+=1) {

//   const imgEl = document.createElement('img');
//   imgEl.id = `${newArray[i].id}`;
//   imgEl.setAttribute('data-div', `div${i+1}`)
//   imgEl.src = `${newArray[i].src}`;
//   imgEl.draggable = `${newArray[i].draggable}`;
//   imgEl.setAttribute('ondragstart', 'drag(event)')
//   gamePiecesDiv.appendChild(imgEl);
// }

newArray.forEach( (img, i) => {
  if (img.id === img.dataDiv) {
  let imgEl = document.createElement('img')
  imgEl.src = img.src
  imgEl.id = img.id
  imgEl.draggable = `${i}.draggable`
  imgEl.setAttribute('ondragstart', 'drag(event)')
  imgEl.setAttribute('data-div', `div${img.id}` )
  console.log(imgEl)
  gamePiecesDiv.appendChild(imgEl)
  }
})


console.log(gamePiecesDiv)


  



const gamePieces = document.querySelectorAll(".gamePieces");



//enables drag and drop
function allowDrop(ev) {
    ev.preventDefault();
}

//Drag portion that reads div ID
function drag(ev) {
    ev.dataTransfer.setData("content", ev.target.id);
    
}

//Drop event & checks <img id> w 'data-div'
function drop(ev) {
    ev.preventDefault();
    let image = ev.dataTransfer.getData("content");
    console.log(image)
    if (ev.target.id == document.getElementById(image).getAttribute('data-div')) {
        alert('Great move, that is correct!');
        ev.target.appendChild(document.getElementById(image));
        } else {alert('Sorry, that is incorrect.')}
}


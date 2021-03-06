

const gamePieceImages = [
  {
    id: 1,
    dataDiv: 1,
    src: "images/rd3/puzzle3_01.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 2,
    dataDiv: 2,
    src: "images/rd3/puzzle3_02.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 3,
    dataDiv: 3,
    src: "images/rd3/puzzle3_03.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 4,
    dataDiv: 4,
    src: "images/rd3/puzzle3_04.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 5,
    dataDiv: 5,
    src: "images/rd3/puzzle3_05.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 6,
    dataDiv: 6,
    src: "images/rd3/puzzle3_06.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 7,
    dataDiv: 7,
    src: "images/rd3/puzzle3_07.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 8,
    dataDiv: 8,
    src: "images/rd3/puzzle3_08.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 9,
    dataDiv: 9,
    src: "images/rd3/puzzle3_09.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 10,
    dataDiv: 10,
    src: "images/rd3/puzzle3_10.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 11,
    dataDiv: 11,
    src: "images/rd3/puzzle3_11.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 12,
    dataDiv: 12,
    src: "images/rd3/puzzle3_12.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 13,
    dataDiv: 13,
    src: "images/rd3/puzzle3_13.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 14,
    dataDiv: 14,
    src: "images/rd3/puzzle3_14.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 15,
    dataDiv: 15,
    src: "images/rd3/puzzle3_15.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 16,
    dataDiv: 16,
    src: "images/rd3/puzzle3_16.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 17,
    dataDiv: 17,
    src: "images/rd3/puzzle3_17.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 18,
    dataDiv: 18,
    src: "images/rd3/puzzle3_18.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 19,
    dataDiv: 19,
    src: "images/rd3/puzzle3_19.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 20,
    dataDiv: 20,
    src: "images/rd3/puzzle3_20.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 21,
    dataDiv: 21,
    src: "images/rd3/puzzle3_21.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 22,
    dataDiv: 22,
    src: "images/rd3/puzzle3_22.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 23,
    dataDiv: 23,
    src: "images/rd3/puzzle3_23.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 24,
    dataDiv: 24,
    src: "images/rd3/puzzle3_24.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
  {
    id: 25,
    dataDiv: 25,
    src: "images/rd3/puzzle3_25.jpg",
    draggable: "true",
    ondragstart: "drag(event)"
  },
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


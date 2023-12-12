// find and save ref to element (first with class) and controls
let ornamentContainer = document.getElementsByClassName("ornamentContainer")[0];
let widthControl = document.getElementById("widthControl");
let heightControl = document.getElementById("heightControl");

// set width to current width
widthControl.value = parseInt(ornamentContainer.getBoundingClientRect().width);
heightControl.value = parseInt(ornamentContainer.getBoundingClientRect().height);

widthControl.addEventListener("input", () => {changeContainerWidth(widthControl.value);})
heightControl.addEventListener("input", () => {changeContainerHeight(heightControl.value);})

// run on change width
// do i want a combo width and height?
function changeContainerWidth(newWidth){
  ornamentContainer.style.width = newWidth + `px`;
}
function changeContainerHeight(newHeight){
  ornamentContainer.style.height = newHeight + `px`;
}

// store the rag handle details in clockwise order
// { className , resize function }
let handleInfoArray = {
  testFunction: (e) => {console.log(e)}
}

// initiate resizing handles on given element
// 8 handles going clockwise from 12
function createDragHandles(resizeElement){
  // create scoped variables
  let x, y, w, h = 0;
  // define directional move functions
  const dirResizeFunc = {
    resizeTopMouseMove: (e) => {
      let newHeight = parseInt(h - ((e.clientY - y)*2));
      resizeElement.style.height = newHeight + 'px';
      heightControl.value = newHeight;
    },
    resizeTopRightMouseMove: (e) => {
      let newHeight = parseInt(h - ((e.clientY - y)*2));
      resizeElement.style.height = newHeight + 'px';
      heightControl.value = newHeight;
      let newWidth = parseInt(w + ((e.clientX - x)*2));
      resizeElement.style.width = newWidth + 'px';
      widthControl.value = newWidth;
    },
    resizeRightMouseMove: (e) => {
      let newWidth = parseInt(w + ((e.clientX - x)*2));
      resizeElement.style.width = newWidth + 'px';
      widthControl.value = newWidth;
    },
    resizeBottomRightMouseMove: (e) => {
      let newHeight = parseInt(h + ((e.clientY - y)*2));
      resizeElement.style.height = newHeight + 'px';
      heightControl.value = newHeight;
      let newWidth = parseInt(w + ((e.clientX - x)*2));
      resizeElement.style.width = newWidth + 'px';
      widthControl.value = newWidth;
    },
    resizeBottomMouseMove: (e) => {
      let newHeight = parseInt(h + ((e.clientY - y)*2));
      resizeElement.style.height = newHeight + 'px';
      heightControl.value = newHeight;
    },
    resizeBottomLeftMouseMove: (e) => {
      let newHeight = parseInt(h - ((e.clientY - y)*2));
      resizeElement.style.height = newHeight + 'px';
      heightControl.value = newHeight;
      let newWidth = parseInt(w - ((e.clientX - x)*2));
      resizeElement.style.width = newWidth + 'px';
      widthControl.value = newWidth;
    },
    resizeLeftMouseMove: (e) => {
      let newWidth = parseInt(w - ((e.clientX - x)*2));
      resizeElement.style.width = newWidth + 'px';
      widthControl.value = newWidth;
    },
    resizeTopLeftMouseMove: (e) => {
      let newHeight = parseInt(h - ((e.clientY - y)*2));
      resizeElement.style.height = newHeight + 'px';
      heightControl.value = newHeight;
      let newWidth = parseInt(w - ((e.clientX - x)*2));
      resizeElement.style.width = newWidth + 'px';
      widthControl.value = newWidth;
    }
  }
  
  // iterate through directions and create specifc div
  for(i = 0; i < 8; i++){
    let newHandle = document.createElement("div");
    newHandle.classList = dragHandlesInfo[i].classList;
    // retrieve reference to needed function
    let moveFunction = dirResizeFunc[Object.keys(dirResizeFunc)[i]];
    const resizeMouseDown = (e) => {            
      x = e.clientX; // get start position
      y = e.clientY;            
      w = resizeElement.getBoundingClientRect().width; // get element size
      h = resizeElement.getBoundingClientRect().height;
      document.addEventListener('mousemove', moveFunction);
      document.addEventListener('mouseup', resizeMouseUp);
    }
    let resizeMouseMove = (e) => { 
      resizeElement.style.height = h - ((e.clientY - y)*2) + 'px';
    }
    let resizeMouseUp = () => {
      document.removeEventListener('mousemove', moveFunction);
      document.removeEventListener('mouseup', resizeMouseUp);
    }
    newHandle.addEventListener('mousedown', resizeMouseDown);
    resizeElement.appendChild(newHandle);
  }
}


// set up drag handles
createDragHandles(ornamentContainer);
// details for the drag resize handles : organised clockwise in 8 directions starting at top
const dragHandlesInfo = [
  {
    classList : "resizer resizer-t",
    resizeFunction: (e) => {e.target.parentElement.style.height = h - ((e.clientY - y)*2) + 'px';}
  },
  {
    classList : "resizer resizer-tr",
    resizeFunction: (e) => {e.target.parentElement.style.height = h - ((e.clientY - y)*2) + 'px';}
  },
  {
    classList : "resizer resizer-r",
    resizeFunction: (e) => {e.target.parentElement.style.height = h - ((e.clientY - y)*2) + 'px';}
  },
  {
    classList : "resizer resizer-br",
    resizeFunction: (e) => {e.target.parentElement.style.height = h - ((e.clientY - y)*2) + 'px';}
  },
  {
    classList : "resizer resizer-b",
    resizeFunction: (e) => {e.target.parentElement.style.height = h - ((e.clientY - y)*2) + 'px';}
  },
  {
    classList : "resizer resizer-bl",
    resizeFunction: (e) => {e.target.parentElement.style.height = h - ((e.clientY - y)*2) + 'px';}
  },
  {
    classList : "resizer resizer-l",
    resizeFunction: (e) => {e.target.parentElement.style.height = h - ((e.clientY - y)*2) + 'px';}
  },
  {
    classList : "resizer resizer-tl",
    resizeFunction: (e) => {e.target.parentElement.style.height = h - ((e.clientY - y)*2) + 'px';}
  }
];
{ 

}
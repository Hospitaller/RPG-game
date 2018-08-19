getTable();
/* draw2d(); */
getImgWall(1,15);
getImgFloor(16, 75);
getImgWall(76, 80);
getImgFloor(81, 81);
getImgWall(82, 90);
getImgFloor(91, 225);
//Генерация игрового поля с уникальными ID
function getTable() {
    for (var i = 0; i < 400; i++) {
        var container = document.getElementById("container");
        var cellElem = document.createElement("div");
        cellElem.className = "cellElem";
        cellElem.id = i+1;
        cellElem.innerHTML = "";
        container.appendChild(cellElem);
    }
}
function getImgWall(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/wall.jpg")');
    }
}
function getImgFloor(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/floor.jpg")');
    }
}



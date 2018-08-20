getTable();
/* draw2d(); */
getImgWallTopLeft(1,1);
getImgWall(2, 19);
getImgWallTopRight(20, 20);
getImgWallSideLeft(21, 21);
getImgFloor(22, 39);
getImgWallSideRight(40, 40);
getImgWallSideLeft(41, 41);
getImgFloor(42, 59);
getImgWallSideRight(60, 60);
getImWallWallLeft(61, 61);
getImgWall(62, 67);
getImgDoor(68, 68);
getImgWall(69, 74);
getImgWallTDowm(75, 75);
getImgWall(76, 79);

getImWallWallRight(80, 80);




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

////Рисование нижних угловых стен
function getImWallBottomLeft(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/wall_bottom_left.jpg")');
    }
}
function getImWallBottomRight(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/wall_bottom_left.jpg")');
    }
}

//Рисование верхних угловых стен
function getImgWallTopLeft(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/wall_tile_left.jpg")');
    }
}
function getImgWallTopRight(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/wall_tile_right.jpg")');
    }
}
//--Рисование верхних угловых стен

//Рисование стен сторон
function getImgWallSideLeft(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/wall_left.jpg")');
    }
}
function getImgWallSideRight(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/wall_right.jpg")');
    }
}
//--Рисование стен сторон

////Рисование стен сторон с примыканием
function getImWallWallLeft(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/wall_wall_left.jpg")');
    }
}
function getImWallWallRight(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/wall_wall_right.jpg")');
    }
}
//Рисование стен
function getImgWall(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/wall.jpg")');
    }
}
//Рисование т-образной стены
function getImgWallTDowm(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/wall_t_down.jpg")');
    }
}
//Рисование пола
function getImgFloor(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/floor_tile.jpg")');
    }
}
//Рисование двери
function getImgDoor(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("/img/door.jpg")');
    }
}




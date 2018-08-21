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

getImgWallSideLeft(81, 81);
getImgFloor(82, 94);
getImgWallSideLeft(95, 95);
getImgFloor(96, 97);
getImgBox(98, 98);
getImgStairsDown(99, 99);
getImgWallSideRight(100, 100);

getImgWallSideLeft(101, 101);
getImgFloor(102, 106);
getImgWallTopLeft(107, 107);
getImgWall(108, 111);
getImgWallTopRight(112, 112);
getImgFloor(113, 114);
getImgWallSideLeft(115, 115);
getImgFloor(116, 119);
getImgWallSideRight(120, 120);

getImgWallSideLeft(121, 121);
getImgFloor(122, 126);
getImgWallSideLeft(127, 127);
getImgFloor(128, 129);
getImgChestClose(130, 130);
getImgFloor(131, 131);
getImgWallSideRight(132, 132);
getImgFloor(133, 134);
getImgWallVCap(135, 135);
getImgFloor(136, 136);
getImgFlask(137, 137);
getImgFlaskBroken(138, 138);
getImgFlaskBrokenSmall(139, 139);
getImgWallSideRight(140, 140);

getImgWallSideLeft(141, 141);
getImgFloor(142, 146);
getImgWallSideLeft(147, 147);
getImgFloor(148, 151);
getImgWallSideRight(152, 152);
getImgFloor(153, 156);
getImgFlask(157, 158);
getImgFloor(159, 159);
getImgWallSideRight(160, 160);

getImgWallSideLeft(161, 161);
getImgFloor(162, 166);
getImgWallSideLeft(167, 167);
getImgFloor(168, 171);
getImgWallSideRight(172, 172);
getImgFloor(173, 174);
getImgWallSideLeft(175, 175);
getImgFloor(176, 179);
getImgWallSideRight(180, 180);

getImgWallSideLeft(181, 181);
getImgFloor(182, 182);
getImgWallTopLeft(183, 183);
getImgWall(184, 186);
getImWallBottomRight(187, 187);
getImgFloor(188, 191);
getImgWallSideRight(192, 192);
getImgFloor(193, 194);
getImWallBottomLeft(195, 195);
getImgWall(196, 199);
getImWallWallRight(200, 200);

getImgWallSideLeft(201, 201);
getImgFloor(202, 202);
getImgWallSideLeft(203, 203);
getImgFloor(204, 211);
getImgWallSideRight(212, 212);
getImgFloor(213, 213);
getImgWallCrumb(214, 214);
getImgWallBreak(215, 215);
getImgWall(216, 219);
getImWallWallRight(220, 220);

getImgWallSideLeft(221, 221);
getImgFloor(222, 222);
getImWallBottomLeft(223, 223);
getImgWall(224, 225);
getImgDoor(226, 226);
getImgWall(227, 231);
getImgWallTUp(232, 232);
getImgWall(233, 239);
getImWallWallRight(240, 240);

getImgWallSideLeft(241, 241);
getImgFloor(242, 259);
getImgWallSideRight(260, 260);

getImgWallSideLeft(261, 261);
getImgFloor(262, 279);
getImgWallSideRight(280, 280);

getImgWallSideLeft(281, 281);
getImgFloor(282, 299);
getImgWallSideRight(300, 300);

getImgWallSideLeft(301, 301);
getImgFloor(302, 308);
getImgColumn(309, 309);
getImgFloor(310, 311);
getImgColumn(312, 312);
getImgFloor(313, 314);
getImgColumn(315, 315);
getImgFloor(316, 319);
getImgWallSideRight(320, 320);

getImgWallSideLeft(321, 321);
getImgFloor(322, 339);
getImgWallSideRight(340, 340);

getImgWallSideLeft(341, 341);
getImgFloor(342, 348);
getImgColumn(349, 349);
getImgFloor(350, 351);
getImgColumn(352, 352);
getImgFloor(353, 354);
getImgColumn(355, 355);
getImgFloor(356, 359);
getImgWallSideRight(360, 360);

getImgWallSideLeft(361, 361);
getImgFloor(362, 379);
getImgWallSideRight(380, 380);

getImWallBottomLeft(381, 381);
getImgWall(382, 399);
getImWallBottomRight(400, 400);








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
        elem.setAttribute('style', 'background-image : url("img/wall_bottom_left.jpg")');
    }
}
function getImWallBottomRight(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/wall_bottom_right.jpg")');
    }
}

//Рисование верхних угловых стен
function getImgWallTopLeft(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/wall_tile_left.jpg")');
    }
}
function getImgWallTopRight(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/wall_tile_right.jpg")');
    }
}
//--Рисование верхних угловых стен

//Рисование стен сторон
function getImgWallSideLeft(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/wall_left.jpg")');
    }
}
function getImgWallSideRight(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/wall_right.jpg")');
    }
}
//--Рисование стен сторон

////Рисование стен сторон с примыканием
function getImWallWallLeft(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/wall_wall_left.jpg")');
    }
}
function getImWallWallRight(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/wall_wall_right.jpg")');
    }
}
//Рисование стен
function getImgWall(x,y) {
    for (var i = x; i <= y; i++) {
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/wall.jpg")');
    }
}
//Рисование т-образной стены 
function getImgWallTDowm(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/wall_t_down.jpg")');
    }
}
function getImgWallTUp(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/wall_t_up.jpg")');
    }
}
//Рисование заглушки стены
function getImgWallVCap(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/wall_v_cap.jpg")');
    }
}
//Рисование разлома стены влево
function getImgWallBreak(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/break_wall_left.jpg")');
    }
}
//Рисование крошек разлома
function getImgWallCrumb(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/break_crumb.jpg")');
    }
}
//Рисование колонны
function getImgColumn(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/column.jpg")');
    }
}
//Рисование пола
function getImgFloor(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/floor_tile.jpg")');
    }
}
//Рисование двери
function getImgDoor(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/door.jpg")');
    }
}

//Рисование бутылки
function getImgFlask(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/flask.jpg")');
    }
}
//Рисование бутылки разбита
function getImgFlaskBroken(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/flask_broken.jpg")');
    }
}
//Рисование бутылки разбита осколки
function getImgFlaskBrokenSmall(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/flask_broken_small.jpg")');
    }
}

//Рисование сундук закрыт
function getImgChestClose(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/chest_close.jpg")');
    }
}

//Рисование ящика
function getImgBox(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/box.jpg")');
    }
}

//Рисование лестница вниз
function getImgStairsDown(x,y) {
    for (var i = x; i <= y; i++){
        var elem = document.getElementById(i);
        elem.setAttribute('style', 'background-image : url("img/stairs_down.jpg")');
    }
}

//Движение персонажа
    var div = $('#container');

    div.click(function(){
    
        
    
        $(document).keydown(function(e) {
        switch (e.which) {
            case 37: //влево
            $('#hero').removeClass().addClass('moveLeft')
            div.css('left', div.offset().left + 10);
            break;
            case 38://вверх
            $('#hero').removeClass().addClass('moveUp')
            div.css('top', div.offset().top + 10);
            break;
            case 39://вправо
            $('#hero').removeClass().addClass('moveRight');
            div.css('left', div.offset().left - 10);
            break;
            case 40://вниз
            $('#hero').removeClass().addClass('moveDown')
            div.css('top', div.offset().top - 10);
            break;
            }
        })
    
});
    
/* 
if ($('#hero').hasClass('.moveRight')) {
    $('.moveRight').css({'color':'red'})
}  */
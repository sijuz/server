var divC = {
    div1: '<div id="',
    div2: '">',
    div3: '</div>'
}
var img = '<?php require_once "content.php"; ?>';
var contentV = divC.div1 + 'img' + divC.div2 + img + divC.div3;
document.getElementById('menu').innerHTML = contentV;
document.getElementsByName('title').innerHTML = 'О нас';
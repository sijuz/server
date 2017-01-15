var a = 0;
var b = 0;
var url = 0;
var typeId = 0;
var page = document.location.pathname;

function lol () {
    $('#content').text('Загрузка..');
}

function yes (data) {
    $('#content').text(data);
}

var script = document.createElement('script');
script.src = '/menu.js';
document.head.appendChild(script);

var script2 = document.createElement('script');
script2.src = '/page.js';
script2.id = 'lol';
document.head.appendChild(script2);

$("#menu").bind("click", function () {
    $.ajax ({
        url: "content.php",
        type: "POST",
        data: "",
        dataType: "html",
        success: yes,
        beforeSend: lol
    });
});

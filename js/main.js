var itemSelectedBefore = 'begin';

function setColorSelected(theClass){
    let itemBefore = document.getElementById(itemSelectedBefore);
    itemBefore.style.color = '#AAA';
    let menuItem = document.getElementById(theClass);
    menuItem.style.color = '#37e737';
    itemSelectedBefore = theClass;
}

var jogos2d_list = [
    'snakegame',
    'oresgate',
];

var jogos2d = document.getElementById('jogos_2d');
var div_item;
var img_item;

for(let i = 0; i < jogos2d_list.length; i++){

    div_item = document.createElement("div");
    div_item.setAttribute("class", "item");
    jogos2d.appendChild(div_item);

    img_item = document.createElement("img");
    img_item.setAttribute("class", "box-jogo");
    img_item.src = `img/${jogos2d_list[i]}.png`;
    img_item.alt = `Jogo ${jogos2d_list[i]}`;
    img_item.setAttribute("onclick", "executeGame("+'"'+jogos2d_list[i]+'"'+")");
    div_item.appendChild(img_item);

}

function executeGame(url){
    window.location.href = "games/" + url + "/index.html";
}
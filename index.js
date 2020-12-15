function isHidden() {
  let rice = document.querySelector("#rice");
  let tomato = document.querySelector('#tomato');
  let yam = document.querySelector('#yam');
  let onions = document.querySelector('#onions');
}

function newVisibiltyRice (){
  rice.style.display = 'block';
  document.querySelector('.landing').style.display = 'none';
  document.querySelector('.intro').style.display = 'none';
  tomato.style.display = 'none';
  yam.style.display = 'none';
  onions.style.display = 'none';
}
function newVisibiltyTomato (){
  tomato.style.display = 'block';
  document.querySelector('.landing').style.display = 'none';
  document.querySelector('.intro').style.display = 'none';
  rice.style.display = 'none';
  yam.style.display = 'none';
  onions.style.display = 'none';
}
function newVisibiltyYam (){
  yam.style.display = 'block';
  document.querySelector('.landing').style.display = 'none';
  document.querySelector('.intro').style.display = 'none';
  tomato.style.display = 'none';
  rice.style.display = 'none';
  onions.style.display = 'none';
}
function newVisibiltyOnions (){
  onions.style.display = 'block';
  document.querySelector('.landing').style.display = 'none';
  document.querySelector('.intro').style.display = 'none';
  tomato.style.display = 'none';
  rice.style.display = 'none';
  yam.style.display = 'none';
}
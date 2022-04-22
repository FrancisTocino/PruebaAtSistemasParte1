

function getEvent() {

    //Asignos propiedades de inicio a los elementos
    lista1 =document.getElementById('list-items-marca');
    lista1.style.maxheight = 0;
    lista2 =document.getElementById('list-items-productos');
    lista2.style.maxheight = 0;
}

function doAction(id){
    console.log ('Estoy en Actions');
    element = document.getElementById(id);
    if (element.checked){
        createPill(element.id);
    }
    else{
        deletePill(element.id);
    }
}


function deleteAll() {
    let listOfInputs = document.getElementsByTagName("input");
    console.log (listOfInputs);
    for (let item of listOfInputs) {
        item.checked=false;
    }
    let element = document.getElementById("pills-container");
    while ( element.childNodes.length >= 1 ) {
        element.removeChild( element.firstChild );
    }
}

function createPill(id) {
    //console.log('Estoy en create Pill');
    const pillString = '<span id="pill-'+id+'" class="pill" onclick="deletePill(this.id)">'+id+'</span>';
    console.log (pillString);
    document.getElementById('pills-container').innerHTML += pillString;
}

function deletePill(id) {
    if(id.includes('pill-')) {
        //Cuando Pulso la Pill borro la Pill y uncheck el checkbox
        element = document.getElementById(id);
        element.remove();
        idx = id.replace('pill-', ''); 
        pill = document.getElementById(idx);
        pill.checked = false;
    }
    else {
        //cuando desmarco el CHeck unchech el check y borro la pill
        element = document.getElementById(id);
        element.checked = false;
        idx = 'pill-'+id;
        pill = document.getElementById(idx);
        pill.remove();

    }  
}

function showBrand(id){
    // Lo primero  que hago es cambiar el más por un menos
    console.log('Estoy en show');
    header = document.getElementById(id);
    console.log (id);
    header.lastChild.innerHTML ='Mojón';

    var para = document.getElementById(id);
    para.nextElementSibling.classList.toggle("transition");
    
}

// INICIO -------------
document.addEventListener('DOMContentLoaded', function () {
    getEvent();
  }, false);

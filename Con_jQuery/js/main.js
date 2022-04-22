
// EVENTOS ........................
$('input[type=checkbox]').change(function (e) { 
    e.preventDefault();
    if ($(this).prop('checked')){    
        createPill(this.id);
    }else{
        deletePill(this.id);
    }  

});

$('#deleteAll').click(function() {
    let listOfInputs = $('input');
    //console.log (listOfInputs);
    for (let item of listOfInputs) {
        item.checked=false;
    }
    $(".pill").remove();
  });


$('#MarcaList').click(function (e) { 
    e.preventDefault();
    $('#list-items-marca').toggleClass('transition');
    $('#signoMarcaList').toggleClass('signoMenos');
    
});

$('#productList').click(function (e) { 
    e.preventDefault();
    $('#list-items-productos').toggleClass('transition');
    $('#signoProductList').toggleClass('signoMenos');
});


// FUNCIONES.....................

function init() {
    $('#list-items-marca').css.maxheight = 0;
    $('#list-items-productos').css.maxheight = 0;
}

function createPill(id) {
    console.log('Estoy en create Pill');
    let htmlstring = $('#pills-container').html();
    const pillString = htmlstring + '<span id="pill-'+id+'" class="pill" onclick="deletePill(this.id)">'+id+'</span>';
    console.log (pillString);
    $('#pills-container').html(pillString);
}


function deletePill(id) {

    if(id.includes('pill-')) {
        // Entro Aquí Pulsando la Pildora
        //Cuando Pulso la Pill borro la Pill 
        $("#"+id).remove();

        //y uncheck el checkbox
        idx = id.replace('pill-', ''); 
        console.log("🚀 ~ deletePill ~ idx", idx);
        $("#"+idx).prop('checked', false);
    }
    else {
        // Entro Aquí desmarcando el Check
        //cuando desmarco el CHeck unchech el check y borro la pill
        $("#"+id).prop('checked', false);

        //borro la Pill
        idx = 'pill-'+id;
        $("#"+idx).remove();
    }  
}

// INICIO -------------
$( document ).ready(function() {
    init();
});
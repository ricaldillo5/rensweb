var count=0;
var click=document.getElementById('descripcion');


function ocultar(){    
    click.hidden = false;
    count++;
    
    if(count === 1){
        document.getElementById('det').innerHTML = "Ocultar detalles";
    }else if(count === 2){
        document.getElementById('det').innerHTML = "Mostrar detalles";
        click.hidden = true;
        count = 0;
    }
}



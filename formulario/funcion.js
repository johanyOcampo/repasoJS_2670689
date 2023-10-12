const validarDevolucion =()=>{
    let venta =document.querySelector('#venta');
    let producto =document.querySelector('#producto');
    let motivo = document.querySelector('#motivo');
    if(venta.value.length==0){
        alert('El campo esta vacio')
    }else if(producto.value.length==0){
        alert('el campo esta vacio valide')
    }else if(motivo.value.length==0){
        alert('el campo esta vacio valide')
    }else{
        alert('se envio correctamente')
    }

   
}

const validarLetras =()=>{
    
}
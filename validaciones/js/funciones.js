const validarContacto = ()=>{
    //validar campos vacios
    let documento =document.querySelector('#documento');
    let nombre= document.querySelector('#nombre');
    if (documento.value.length==0){
        //alert('El documento esta vacio. Verefique')
        Swal.fire(
            'El documento esta vacio. Verifique!',
            '',
            'error'
          )
    }
    else if(nombre.value.length==0){
        Swal.fire(
            'El  nombre esta vacio. Verifique!',
            '',
            'error'
          )
    }
    else{
        Swal.fire({
            position: 'top-end',
            icon: 'succes',
            title: 'Datos enviados correctamente',
            showconfirmButton: false,
            timer: 2000
        })
    }
}
//capturar el objeto al cual se le dara clic
const boton= document.querySelector('#btnEnviar')
//Escuchar eventos del boton
boton.addEventListener('click',validarContacto)


/* 
diseñe un formulario de una tabla maestra de su proyecto validar campos abligatorio con js
y subirlo a git
*/
const buscarCliente=(dato) => {
    const documentos = [1010, 1011, 1020, 1030,1957,5550]
    const nombres = ['Carmen','Ines','Juan','Daniela','Maria','Janet']
    //email: dilopezz@sena.edu.co
    
    let encontrado = false;
    let posicion ='';

    for(let i = 0; i<documentos.length; i++){
        
            if(dato == documentos[i]){
                encontrado=true;
                posicion = nombres[i];
            }
    }

    return new  Promise((resolve, reject)=>{
        if(encontrado){
            resolve('DATO ENCONTRADO: '+ posicion)
        }else{
            reject('DATO NO ENCONTRADO')
        }
    })
} 

document.querySelector('#btnBuscar')
.addEventListener('click', () => buscarCliente(document.getElementById('dato').value)
.then(mensaje => alert(mensaje))
.catch(error => alert(error))
)
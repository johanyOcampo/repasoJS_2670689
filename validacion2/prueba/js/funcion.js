const CalcularSubotal=()=>{
    let precio= document.getElementById('precio').value;
    let cantidad= document.getElementById('cantidad').value;

    if(precio.lentgh !=0 || cantidad.lentgh !=0){
        document.getElementById('subtotal').value = precio * cantidad;
    }
   
}
let cajaNombre = document.getElementById('nombresignovital')
let cajaValor = document.getElementById('valorsignovital')
let cajafechaMedicacion = document.getElementById('fechamedicionsignovital')



let botonRegistroSignovital = document.getElementById("bontonensignovital")



botonRegistroSignovital .addEventListener('click',(e) => {
    e.preventDefault()

    let datosFormulario = {
        nombre:cajaNombre.value,
        valor:cajaValor.value,
        fechaMedida:cajafechaMedicacion.value,
    }



    fetch('http://localhost:8080/api/signovital',{
        
        method:'POST',
        headers: {
            'Content-Type': 'application/json', // Especificamos que estamos enviando datos en formato JSON
        },
        body:JSON.stringify(datosFormulario),
    })
    
   
    
    
    
    console.log(datosFormulario);
    
    Swal.fire({
        title: "Buen Trabajo",
        text: "Registro exitoso!",
        icon: "success"
      });
})

let cajaNombre = document.getElementById('nombreenfermedad')
let cajaSintomas = document.getElementById('sintomas')
let cajaClasificacion = document.getElementById('clasificacionenfermedad')
let cajaGradoEnfermedad = document.getElementById('gradoenfermedad')
let cajaProbabilidadSobrevivir = document.getElementById('probabilidadvivir')


let botonRegistroEnfermedad = document.getElementById("bontonenfermedad")



botonRegistroEnfermedad.addEventListener('click',(e) => {
    e.preventDefault()

    let datosFormulario = {
        nombre:cajaNombre.value,
        sintomas:cajaSintomas.value,
        clasificacion:cajaClasificacion.value,
        grado:cajaGradoEnfermedad.value,
        // probabilidadVivir:cajaProbabilidadSobrevivir.value,
    }
    
    fetch('http://localhost:8080/api/enfermedad',{
        
        method:'POST',
        headers: {
            'Content-Type': 'application/json', // Especificamos que estamos enviando datos en formato JSON
        },
        body:JSON.stringify(datosFormulario),
    })
    
    
    Swal.fire({
        title: "Buen Trabajo",
        text: "Registro exitoso!",
        icon: "success"
    });
})

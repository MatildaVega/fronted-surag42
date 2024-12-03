let cajaNombre = document.getElementById('nombremedico')
let cajaMatricula = document.getElementById('matriculamedico')
let cajaEspecialidad = document.getElementById('especialidadmedico')
let cajaSalario = document.getElementById('salariomedico')
let cajaTelefono = document.getElementById('telefonomedico')
let cajaCorreo = document.getElementById('correomedico')
let cajaDireccion = document.getElementById('direcionmedico')
let cajaIpsAsociado = document.getElementById('ipsmedico')
let cajaTrabajaFinesdeSemana = document.getElementById('findesemana')

let botonRegistroMedico = document.getElementById("botonregistromedico")



botonRegistroMedico.addEventListener('click',(e) => {
   e.preventDefault()

    let datosFormulario = {
        nombre:cajaNombre.value,
        matricula:cajaMatricula.value,
        especialidad:cajaEspecialidad.value,
        salario:cajaSalario.value,
        ips:cajaIpsAsociado.value,
        correo:cajaCorreo.value,
        telefono:cajaTelefono.value,
        direccion:cajaDireccion.value,
        //estadisponibleFinDeSemana:cajaTrabajaFinesdeSemana.value,
    }
    
    fetch('http://localhost:8080/api/medico',{
        
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

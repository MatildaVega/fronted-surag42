let cajaNombre = document.getElementById('nombrepaciente')
let cajaFechaNacimiento = document.getElementById('nacimientoPaciente')
let cajaCiudad = document.getElementById('ciudadpaciente')
let cajaCorreo = document.getElementById('correopaciente')
let cajaIPS = document.getElementById('ipspaciente')
let cajaTelefono = document.getElementById('telefonopaciente')
let cajaFechaAfiliacion = document.getElementById('afiliacionpaciente')
let cajaGrupoIngreso = document.getElementById('grupoingresopaciente')
let cajaAsegurado = document.getElementById('tienepoliza')

let botonRegistroPaciente = document.getElementById("botonregistrarpaciente")



botonRegistroPaciente.addEventListener('click',(e) => {
    e.preventDefault()

    let datosFormulario = {
        nombre:cajaNombre.value,
        anioNacimiento:cajaFechaNacimiento.value,
        ciudad:cajaCiudad.value,
        correo:cajaCorreo.value,
        telefono:cajaTelefono.value,
        ips:cajaIPS.value,
        // tienePoliza:cajaAsegurado.value,
        grupoIngreso:cajaGrupoIngreso.value,
        fechaAfiliacion:cajaFechaAfiliacion.value,
    }


    fetch('http://localhost:8080/api/paciente',{
        
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



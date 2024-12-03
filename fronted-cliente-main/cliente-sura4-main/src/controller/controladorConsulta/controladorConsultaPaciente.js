import{ pacientesSimulaciones } from "../../../src/data/simularPaciente.js"

let fila = document.getElementById('fila')


fetch('http://localhost:8080/api/paciente',{
    method: 'GET',
})
.then(data => data.json())
.then(res => {    
    
    console.log(res)

    // debo recorrer los datos de la BD para pintarlos
pacientesSimulaciones.forEach((paciente) =>{
    console.log(paciente)
    //APLICANDO TRAVESING

    //1. Creo una columna para cada paciente
    let columna = document.createElement("div")
    columna.classList.add("col")

    //2. creo una tarjeta para cada paciente
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","h-100","p-5","shadow")

    //3. creo una teiqueta para el nombre de cada paciente
    let etiquetaNombre = document.createElement("h3")
    etiquetaNombre.classList.add("text-center")
    etiquetaNombre.textContent = paciente.nombre

    let etiquetaIcon = document.createElement("img")
    etiquetaIcon.classList.add("img-fluid","w-50","p-3","mx-auto","d-block")
    etiquetaIcon.src = "../../../assets/img/faviconpaciente.png"

    let etiquetaIPS = document.createElement("h4")
    etiquetaIPS.classList.add("text-start")
    etiquetaIPS.textContent = "IPS: " + paciente.ips

    let etiquetaCorreo = document.createElement("h5")
    etiquetaCorreo.classList.add("text-start","textosura")
    etiquetaCorreo.textContent = "Correo: " + paciente.correo

    let etiquetaTelefono = document.createElement("h5")
    etiquetaTelefono.classList.add("text-start")
    etiquetaTelefono.textContent = "Correo: " + paciente.telefono

    let etiquetaCiudad = document.createElement("h5")
    etiquetaCiudad.classList.add("text-start")
    etiquetaCiudad.textContent = "Ciudad: " + paciente.ciudad

    let etiquetaGrupoIngreso = document.createElement("h5")
    etiquetaGrupoIngreso.classList.add("text-start")
    etiquetaGrupoIngreso.textContent = "Grupo Ingreso: " + paciente.grupoIngreso
    
    // let etiquetaGrupoAfiliado = document.createElement("h5")
    // etiquetaGrupoAfiliado.classList.add("text-start","fw-bold")
    // etiquetaGrupoAfiliado.textContent = "Grupo Afiliado: " + paciente.etiquetaGrupoAfiliado

    let etiquetaFechaAfiliacion = document.createElement("h5")
    etiquetaFechaAfiliacion.classList.add("text-start")
    etiquetaFechaAfiliacion.textContent = "Fecha Afiliacion: " + paciente.fechaAfiliacion

    
    let eliminar = document.createElement("button")
    eliminar.classList.add("btn","btn-danger","w-25","menu")

       
    let iconoBasura = document.createElement("i")
    iconoBasura.classList.add("bi","bi-trash-fill")
   


       
    let editar = document.createElement("button")
    editar.classList.add("btn","btn-warning","w-25","my-2","menu")
    


       
    let iconoEditar = document.createElement("i")
    iconoEditar.classList.add("bi","bi-pencil-fill")
   




    //Paso final -- ASOCIO LAS ETIQUETAS
    tarjeta.appendChild(etiquetaNombre)
    tarjeta.appendChild(etiquetaIcon)
    tarjeta.appendChild(etiquetaIPS)
    tarjeta.appendChild(etiquetaCorreo)
    tarjeta.appendChild(etiquetaTelefono)
    tarjeta.appendChild(etiquetaCiudad)
    tarjeta.appendChild(etiquetaGrupoIngreso)
    // tarjeta.appendChild(etiquetaGrupoAfiliado)
    tarjeta.appendChild(etiquetaFechaAfiliacion)
    eliminar.appendChild(iconoBasura)
    editar.appendChild(iconoEditar)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})  
 })


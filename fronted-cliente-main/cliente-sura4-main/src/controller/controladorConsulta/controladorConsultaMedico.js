import{ medicoSimulaciones } from "../../data/simularMedico.js"

let fila = document.getElementById('fila')




fetch('http://localhost:8080/api/medico',{
    method: 'GET',
})
.then(data => data.json())
.then(res => {    
    
    console.log(res)
    medicoSimulaciones .forEach((medico) =>{
    
    

        let columna = document.createElement("div")
        columna.classList.add("col")
    
       
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card","h-100","p-5","shadow")
    
        
        let etiquetaNombre = document.createElement("h3")
        etiquetaNombre.classList.add("text-center")
        etiquetaNombre.textContent = medico.nombre
    
        let etiquetaIcon = document.createElement("img")
        etiquetaIcon.classList.add("img-fluid","w-50","p-3","mx-auto","d-block")
        etiquetaIcon.src = "../../../assets/img/favicondoctor.png"
    
        let etiquetaMatricula = document.createElement("h4")
        etiquetaMatricula.classList.add("text-start")
        etiquetaMatricula.textContent = "Matricula: " + medico.matricula
    
        let etiquetaEspecialidad = document.createElement("h5")
        etiquetaEspecialidad.classList.add("text-start","textosura")
        etiquetaEspecialidad.textContent = "Especialidad: " + medico.especialidad
    
        let etiquetaTelefono = document.createElement("h5")
        etiquetaTelefono.classList.add("text-start")
        etiquetaTelefono.textContent = "Telefono: " + medico.telefono
    
        let etiquetaCorreo = document.createElement("h5")
        etiquetaCorreo.classList.add("text-start")
        etiquetaCorreo.textContent = "Correo: " + medico.correo
    
        let etiquetaIps = document.createElement("h5")
        etiquetaIps.classList.add("text-start")
        etiquetaIps.textContent = "Ips: " + medico.ips
        
        // let etiquetaGrupoAfiliado = document.createElement("h5")
        // etiquetaGrupoAfiliado.classList.add("text-start","fw-bold")
        // etiquetaGrupoAfiliado.textContent = "Grupo Afiliado: " + paciente.etiquetaGrupoAfiliado
    
    
    
        
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
        tarjeta.appendChild(etiquetaMatricula)
        tarjeta.appendChild(etiquetaEspecialidad)
        tarjeta.appendChild(etiquetaTelefono)
        tarjeta.appendChild(etiquetaCorreo)
        tarjeta.appendChild(etiquetaIps)
        eliminar.appendChild(iconoBasura)
        editar.appendChild(iconoEditar)
        tarjeta.appendChild(eliminar)
        tarjeta.appendChild(editar)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    }) 
})



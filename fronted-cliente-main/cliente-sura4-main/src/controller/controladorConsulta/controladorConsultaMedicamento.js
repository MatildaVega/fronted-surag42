import{ medicamentoSimulaciones } from "../../data/simularMedicamento.js"


let fila = document.getElementById('fila')



fetch('http://localhost:8080/api/medicamento',{
    method: 'GET',
})
.then(data => data.json())
.then(res => {    
    
    console.log(res)

    medicamentoSimulaciones.forEach((medicamento) =>{
        
        
    
       
        let columna = document.createElement("div")
        columna.classList.add("col")
    
       
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card","h-100","p-5","shadow")
    
        
        let etiquetaNombre = document.createElement("h3")
        etiquetaNombre.classList.add("text-center")
        etiquetaNombre.textContent = medicamento.nombre
    
        let etiquetaIcon = document.createElement("img")
        etiquetaIcon.classList.add("img-fluid","w-50","p-3","mx-auto","d-block")
        etiquetaIcon.src = "../../../assets/img/faviconmedicamento.png"
    
        let etiquetaPresentacion = document.createElement("p")
        etiquetaPresentacion.classList.add("text-start")
        etiquetaPresentacion.textContent = "Presentación: " + medicamento.presentacion
    
        let etiquetaDosis = document.createElement("p")
        etiquetaDosis.classList.add("text-start","textosura")
        etiquetaDosis.textContent = "Dosis: " + medicamento.dosis
    
        let etiquetaLaboratorio = document.createElement("p")
        etiquetaLaboratorio.classList.add("text-start")
        etiquetaLaboratorio.textContent = "Laboratorio: " + medicamento.laboratorio
    
        let etiquetaContraIndicaciones = document.createElement("p")
        etiquetaContraIndicaciones.classList.add("text-start")
        etiquetaContraIndicaciones.textContent = "Contraindiaciones: " + medicamento.contraindicaciones
    
        let etiquetaFechaCaducidad = document.createElement("p")
        etiquetaFechaCaducidad.classList.add("text-start")
        etiquetaFechaCaducidad.textContent = "Fecha caducidad: " + medicamento.fechaCaducidad
        
        let etiquetaInvima = document.createElement("p")
        etiquetaInvima.classList.add("text-start","fw-bold")
        etiquetaInvima.textContent = "Invima: " + medicamento.registroINVIMA
    
        let etiquetaCopago = document.createElement("p")
        etiquetaCopago.classList.add("text-start")
        etiquetaCopago.textContent = "Copago: " + medicamento.tieneCopago
    
        
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
        tarjeta.appendChild(etiquetaPresentacion)
        tarjeta.appendChild(etiquetaDosis)
        tarjeta.appendChild(etiquetaLaboratorio)
        tarjeta.appendChild(etiquetaContraIndicaciones)
        tarjeta.appendChild(etiquetaFechaCaducidad)
        tarjeta.appendChild(etiquetaInvima)
        tarjeta.appendChild(etiquetaCopago)
        eliminar.appendChild(iconoBasura)
        editar.appendChild(iconoEditar)
        tarjeta.appendChild(eliminar)
        tarjeta.appendChild(editar)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
    })

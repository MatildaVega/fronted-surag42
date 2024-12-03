import{ signovitalSimulaciones } from "../../data/signoVital.js"


let fila = document.getElementById('fila')




fetch('http://localhost:8080/api/signovital',{
    method: 'GET',
})
.then(data => data.json())
.then(res => {
    console.log(res)

    data.forEach((signovital) =>{

   
        let columna = document.createElement("div")
        columna.classList.add("col")
    
       
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card","h-100","p-5","shadow")
    
        
        let etiquetaNombre = document.createElement("h3")
        etiquetaNombre.classList.add("text-center")
        etiquetaNombre.textContent = signovital.nombre
    
        let etiquetaIcon = document.createElement("img")
        etiquetaIcon.classList.add("img-fluid","w-50","p-3","mx-auto","d-block")
        etiquetaIcon.src = "../../../assets/img/faviconsignos-vitales.png"
    
        let etiquetaValor = document.createElement("p")
        etiquetaValor.classList.add("text-start")
        etiquetaValor.textContent = "Valor: " + signovital.valor
    
        let etiquetaFechaMedicion = document.createElement("p")
        etiquetaFechaMedicion.classList.add("text-start","textosura")
        etiquetaFechaMedicion.textContent = "Fecha Medición: " + signovital.fechaMedida
        
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
        tarjeta.appendChild(etiquetaValor)
        tarjeta.appendChild(etiquetaFechaMedicion)
        eliminar.appendChild(iconoBasura)
        editar.appendChild(iconoEditar)
        tarjeta.appendChild(eliminar)
        tarjeta.appendChild(editar)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })

})




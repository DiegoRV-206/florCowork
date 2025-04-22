


function cargarContenido(pagina) {
    fetch(pagina)
      .then(respuesta => respuesta.text())
      .then(data => {
        document.getElementById('main').innerHTML = data;
        document.getElementById("mySidebar").style.width = "4%";
        document.getElementById("main").style.marginLeft= "4%";
        
    })
      .catch(error => {
        console.error("Error al cargar la página:", error);
    });

}

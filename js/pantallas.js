


function cargarContenido(pagina) {
  fetch(pagina)
    .then(respuesta => respuesta.text())
    .then(data => {
      document.getElementById('main').innerHTML = data;
      document.getElementById("mySidebar").style.width = "4%";
      document.getElementById("main").style.marginLeft= "4%";
      document.body.classList.remove("inicio"); // Quitamos clase especial
      document.getElementById("main").style.padding = "16px"; // Restauramos el padding si lo controlás con estilos inline
      document.getElementById("main").style.margin = ""; // Opcional
      //window.location.href = url;
      if (window.innerWidth < 450) {
        document.getElementById("main").style.marginLeft = "8%";
        if(pagina="inicio.html"){
          document.getElementById("main").style.marginLeft = "6%";
          document.getElementById("main").style.padding = "0px";
          document.getElementById("main").style.padding = "0px";
          document.body.style.backgroundColor = "#9d1c20";
          document.getElementById("fotoBranding").style.objectFit = "contein";
        }
      }
      
  })
    .catch(error => {
      console.error("Error al cargar la página:", error);
  });

}
let etiqueta;

botonPresionado = (idColor, color)=>{
  // Almaceno el boton presionado
  etiqueta = document.getElementById(idColor);

  // Reproduce el sonido del boton
  reproducirAudio(idColor);

  // Se cambia el color del boton
  etiqueta.style = "background-color: " + color + "; box-shadow: 0 0 10px " + color + ";";

  // Se resetea el color de fondo despues de 250 ms
  idEspera = setTimeout(()=>{
      
      switch(idColor) {
        case '1':
          etiqueta.style = "background-color: darkgreen; box-shadow: none;";
        break;
        case '2':
          etiqueta.style = "background-color: darkred; box-shadow: none;";
        break;
        case '3':
          etiqueta.style = "background-color: darkgoldenrod; box-shadow: none;";
        break;
        case '4':
          etiqueta.style = "background-color: darkblue; box-shadow: none;";
        break;
      }
    },
    250
  )
}

reproducirAudio = (idColor)=>{
  let aud;

  switch(idColor) {
    case '1':
      aud = document.getElementById("aud1");
    break;
    case '2':
      aud = document.getElementById("aud2");
    break;
    case '3':
      aud = document.getElementById("aud3");
    break;
    case '4':
      aud = document.getElementById("aud4");
    break;
  }

  aud.play();
}
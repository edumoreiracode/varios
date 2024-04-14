tirarDados = ()=> {
  let numero = document.getElementById("numero");
  let img = document.getElementById("img");

  // Inicia el intervalo
  timerId = setInterval(()=>{
      // Multiplico el valor ramdom por 5 y le sumo 1 para evitar el valor 0.
      valor = Math.round(Math.random() * 5 + 1);
      switch(valor) {
        case 1:
          img.src = "./img/1.png"
        break;
        case 2:
          img.src = "./img/2.png"
        break;
        case 3:
          img.src = "./img/3.png"
        break;
        case 4:
          img.src = "./img/4.png"
        break;
        case 5:
          img.src = "./img/5.png"
        break;
        case 6:
          img.src = "./img/6.png"
        break;
      }
    }, 
    500
  );

  
  
  // Detiene el interval despues de los segundos especificados en el timeout
  setTimeout(() => { clearInterval(timerId); numero.textContent = valor }, 3000);
}
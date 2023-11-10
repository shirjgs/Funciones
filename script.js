function cambiarSemaforo() {
    console.log("Cambio de luz a Verde");
    document.getElementById("verde").style.backgroundColor = "green";
    document.getElementById("amarillo").style.backgroundColor = "gray";
    document.getElementById("rojo").style.backgroundColor = "gray";

    setTimeout(function() {
      console.log("Cambio de luz a Amarillo");
      document.getElementById("verde").style.backgroundColor = "gray";
      document.getElementById("amarillo").style.backgroundColor = "yellow";
      document.getElementById("rojo").style.backgroundColor = "gray";

      setTimeout(function() {
        console.log("Cambio de luz a Rojo");
        document.getElementById("verde").style.backgroundColor = "gray";
        document.getElementById("amarillo").style.backgroundColor = "gray";
        document.getElementById("rojo").style.backgroundColor = "red";

        setTimeout(function() {
          cambiarSemaforo(); // Reiniciar el ciclo
        }, 2000); // Tiempo en Rojo
      }, 2000); // Tiempo en Amarillo
    }, 2000); // Tiempo en Verde
  }

  cambiarSemaforo(); // Iniciar el ciclo
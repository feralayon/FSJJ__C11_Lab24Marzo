 console.log("==== Iniciando script ====");

    // 1. Estado del contador
    let count = 0;
    console.log("Estado inicial de count:", count);

    // 2. Referencias al DOM
    const counterEl = document.getElementById("counter");
    const btnInc = document.getElementById("btn-inc");
    const btnDec = document.getElementById("btn-dec");

    console.log("Elemento counterEl:", counterEl);
    console.log("Elemento btnInc:", btnInc);
    console.log("Elemento btnDec:", btnDec);

    // 3. Función para actualizar el texto del contador
    const updateCounter = () => {
      console.log("updateCounter() llamada. count =", count);

      // actualiza el contenido de <h2 id="counter">
      counterEl.textContent = count;
      console.log("Nuevo texto en counterEl:", counterEl.textContent);

      // solo para ver en qué momento llega a 10
      if (count === 10) {
        console.log("¡El contador llegó a 10!");
        counterEl.style.color = "green";  // cambio visual simple
      } else {
        counterEl.style.color = "white";
      }
    };

    // 4. Manejador de click para incrementar
    btnInc.addEventListener("click", () => {
      console.log("Click en botón +1");
      console.log("count ANTES de incrementar:", count);

      count = count + 1; // también podrías usar count++
      console.log("count DESPUÉS de incrementar:", count);

      updateCounter();
    });

    // 5. Manejador de click para decrementar
    btnDec.addEventListener("click", () => {
      console.log("Click en botón -1");
      console.log("count ANTES de decrementar:", count);

      count = count - 1; // también podrías usar count--
      console.log("count DESPUÉS de decrementar:", count);

      updateCounter();
    });

    // 6. Llamada inicial para que el valor inicial se sincronice con el DOM
    console.log("Llamando a updateCounter() por primera vez...");
    updateCounter();

    console.log("==== Script cargado completamente ====");
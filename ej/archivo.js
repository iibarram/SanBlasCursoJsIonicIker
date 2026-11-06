//no hacer caso, apuntes de una web copiados
function validarEmail() {
    const email = document.getElementById("email").value;
    if (email === "") {
      alert("Por favor, escribe tu email");
      return false; // Evita que el formulario se envíe
    }
    return true; // Si está correcto, permite enviar el formulario
  }
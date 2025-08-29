
function mostrar(){
    const input = document.getElementById("pass")
    const icono = document.getElementById("iconoOjito");

    input.type = input.type === "password" ? "text" : "password";

    if(input.type === "password"){
        icono.classList.remove("fa-eye");
        icono.classList.add("fa-eye-slash");
    } else {
        icono.classList.remove("fa-eye-slash");
        icono.classList.add("fa-eye");
    }


}

  const form = document.getElementById("formRegistro");
  const pass1 = document.getElementById("pass1");
  const pass2 = document.getElementById("pass2");
  const mensajeError = document.getElementById("mensajeError");
  
form.addEventListener("submit", function(e) {
if (pass1.value !== pass2.value) {
    e.preventDefault(); // Evita enviar el formulario
    mensajeError.style.display = "block";
} else {
    mensajeError.style.display = "none";
    alert("✅ Registro exitoso (simulado)");
    // Aquí puedes continuar con tu lógica de envío
}
});
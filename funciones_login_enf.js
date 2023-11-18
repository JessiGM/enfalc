function loguear() {
    let email=document.getElementById("email").value;
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("password").value;
    let confirm=document.getElementById("confirm_password").value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passRegex = /^[^\s@]+$/;

    if(email !=="" && user !=="" && pass !=="" && confirm == pass) {
        if (emailRegex.test(email) && passRegex.test(pass)) {
            window.location="formulario_enf_reg.html";
        }     
    else {
        alert("Por favor, ingresa un correo electrónico válido.");
    }
    }
    else {
        alert("Por favor ingresa los datos correctos.")
    }
}
const form = document.getElementById('formPasswordRecovery');
form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const email = data.get('email').trim();
    if (!email) {
        alert("No has especificado un correo electrónico");
    } else {
        const result = fetch("/recovery/password/" + email, {
                method: "get",
                headers: { 'Content-Type': 'application/json' }
                }
        ).then (result => {
            if (result.status === 200) {
                console.log(result);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Revisa tu correo electrónico para que puedas cambiar tu contraseña.",
                    showConfirmButton: false,
                    timer: 2000
                  });
                window.location.replace('/products');
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "El e-mail no esta registrado en la base de datos.",
                  });
            }
        });
        
    }
});
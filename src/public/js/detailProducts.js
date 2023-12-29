const addProductoToCart = async (productId, cartId) => {
    const headers = new Headers({
        "Content-Type": "application/x-www-form-urlencoded"
     });
     try {
         const rta = await fetch('/api/carts/' + cartId + '/product/' + productId, {
             method: 'POST',
             headers: headers,
         });
         const resultado = await rta.json();
         if (resultado.status !== 'failed') {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Producto agregado al 🛒",
                showConfirmButton: false,
                timer: 1500
              });
         } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salio mal!",
              });
         }
     } catch (error) {
         console.log('Error: ' + error);
     }
}

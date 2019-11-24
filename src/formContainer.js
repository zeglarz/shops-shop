const formContainer = document.getElementById("form-container");

console.log(formContainer);


const onFormSubmit = () => {
    const formData = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        imageURL: document.getElementById('imageURL').value,
        iframe: document.getElementById('iframe').value

    };
    Api.createProduct(formData);
    console.log(formData);
};
function loadProductPage(productId) {

    const { iframeUrl, name } = PRODUCTS.find(({ id }) => id === productId)
    const productContainer = `
    <div class="container-fluid p-3">
        <h1 class="text-center">${name}</h1>
    <iframe src="https://www.militaria.pl/noze,_miecze,_maczety/maczety,_siekierki,_saperki,_pily_c421.xml" frameborder ="0" width="100%" height="500px"/>
    </div>
    `;
    document.querySelector("main").innerHTML = productContainer;
    
    };
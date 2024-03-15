var postApi = 'https://fakestoreapi.com/products?limit=10';

fetch(postApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        console.log(products);
        let firstFiveProducts = products.slice(0, 5);

        let htmls = firstFiveProducts.map(function(goods) {
            return `<li>
                <h2>${goods.title}</h2>
                <div>${goods.body}</div>
                <img src="${goods.image}" alt="${goods.title}">
            </li>`;
        });

        let html = htmls.join('');
        document.getElementById('container').innerHTML = html;

   
        document.getElementById('button').addEventListener("click", function() {
            let secondFiveProducts = products.slice(5, 10);

            let htmls2 = secondFiveProducts.map(function(goods) {
                return `<li>
                    <h2>${goods.title}</h2>
                    <div>${goods.body}</div>
                    <img src="${goods.image}" alt="${goods.title}">
                </li>`;
            });
            let html2 = htmls2.join('');
            document.getElementById('container').innerHTML = html2;
        });
    })
    .catch(function(err) {
        console.log(err);
    });

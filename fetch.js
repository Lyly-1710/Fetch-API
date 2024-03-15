
document.getElementById('button').style.display = "none";
fetch('https://fakestoreapi.com/products?limit=10')
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        
        document.getElementById('buttonload').addEventListener("click", function() {
            let firstFiveProducts = products.slice(0, 5);

             let htmls = firstFiveProducts.map(function(goods) {
            return `<li>
                <img src="${goods.image}" alt="${goods.title}">
                <h2>${goods.title}</h2>
                <div>${goods.body}</div>
            </li>`;
        });

            let html = htmls.join('');
            document.getElementById('container').innerHTML = html;
            document.getElementById('button').style.display = "block";

        });
        
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

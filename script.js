const products = [
    { id: 1, name: "Thức ăn hạt cho chó Poutoi", category: "food", price: 150000 },
    { id: 2, name: "Đồ chơi xương cao su", category: "toy", price: 50000 },
    { id: 3, name: "Vòng cổ cho mèo", category: "accessory", price: 80000 },
    { id: 4, name: "Patê cho mèo con", category: "food", price: 25000 },
];

function renderProduct(items) {
    const container = document.getElementById('product-list');

    container.innerHTML = '';
    items.forEach(function (item) {
        const card = document.createElement('div');
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;
        container.appendChild(card);
    });
}

const buttons = document.querySelectorAll('filter-btn');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.filter-btn.active').classList.remove('active');
        this.classList.add('active');

        const selectedCategory = this.getAttribute('data-category');

        let filterProducts = [];
        if(selectedCategory = 'all') {
            filterProducts = products; 
        } else {
            filterProducs = products.filter(function(product) {
                return product.category === selectedCategory;
            })
        }

        renderProduct(filterProducts);
    })
})

renderProduct(products);
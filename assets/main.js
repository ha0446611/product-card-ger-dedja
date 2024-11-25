class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }); // Use Shadow DOM
    }

    connectedCallback() {
        // Get attributes passed to the component
        const image = this.getAttribute("data-image");
        const title = this.getAttribute("data-title");
        const price = this.getAttribute("data-price");
        const link = this.getAttribute("data-link");

        // Template for the product card
        this.shadowRoot.innerHTML = `
            <style>
              
                product-card img {
                    max-width: 100%;
                    border-radius: 8px;
                }
                product-card .product-title {
                    font-size: 18px;
                    font-weight: bold;
                    margin: 12px 0;
                }
                product-card .product-price {
                    font-size: 16px;
                    color: #555;
                    margin: 8px 0;
                }
                product-card .product-link {
                    text-decoration: none;
                    color: #007BFF;
                    font-weight: bold;
                }
                product-card .product-link:hover {
                    text-decoration: underline;
                }
            </style>
            <img src="${image}" alt="${title}">
            <div class="product-title">${title}</div>
            <div class="product-price">${price}</div>
            <a class="product-link" href="${link}">View Product</a>
        `;
    }
}

customElements.define("product-card", ProductCard);
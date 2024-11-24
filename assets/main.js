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
                :host {
                    display: block;
                    font-family: Arial, sans-serif;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    max-width: 300px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                img {
                    max-width: 100%;
                    border-radius: 8px;
                }
                .product-title {
                    font-size: 18px;
                    font-weight: bold;
                    margin: 12px 0;
                }
                .product-price {
                    font-size: 16px;
                    color: #555;
                    margin: 8px 0;
                }
                .product-link {
                    text-decoration: none;
                    color: #007BFF;
                    font-weight: bold;
                }
                .product-link:hover {
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

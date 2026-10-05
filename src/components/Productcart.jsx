export default function Productcart({ product, setCart }) {
    function addToCart(){
        setCart((previousCart) => [
            ...previousCart,
            product
        ])
    }

    return(
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>

            <h2>{product.name}</h2>

            <p className="catgory">
                {product.catgory === "gaming" ? "gaming" : "office"}
            </p>

            <p className="price">
                {product.price.toLocaleString()} toman
            </p>

            <button onClick={addToCart}>
                add to Cart
            </button>

        </div>
    )
}
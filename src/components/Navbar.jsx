export default function Navbar({search, setSearch, cartCount}){
    return(
        <nav className="navbar">
            <h1>Laptop Shop</h1>

            <input 
                type="text" 
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="cart">
                    Shopping Cart: {cartCount}
            </div>
        </nav>
    )
}
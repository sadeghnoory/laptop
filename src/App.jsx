import { useState } from "react"
import Navbar from "./components/Navbar";
import Productcart from "./components/Productcart";
import Filter from "./components/Filter";
import "./App.css";

const products=[
    {
        id:1,
        name:"ASUS TUF Gaming",
        price: 450000000,
        catgory: "gaming",
        image: "/images/ASUS TUF Gaming.jpg"
        
    },
    {
        id: 2,
        name: "Lenovo LOQ",
        price: 120000000,
        catgory: "gaming",
        image: "/images/Lenovo LOQ.jpg"
    },
    {
        id: 3,
        name: "HP 259 G9",
        price: 380000000,
        catgory: "office",
        image: "/images/HP 259 G9.jpg"
    },
    {
        id: 4,
        name: "MSI Katana",
        price: 750000000,
        catgory: "gaming",
        image: "/images/MSI Katana.jpg"
    },
    {
        id: 5,
        name: "ASUS VivoBook",
        price: 420000000,
        catgory: "office",
        image: "/images/ASUS VivoBook.png"
    },
    {
        id: 6,
        name: "Lenovo IdeaPad",
        price: 350000000,
        catgory: "office",
        image: "/images/Lenovo IdeaPad.jpg"
    },
]

function App() {

    const[search, setSearch]= useState("");
    const[catgory, setCatgory]=useState("all");
    const[cart, setCart]=useState([]);
    const filteredProducts = products.filter((product) =>{
        const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesCatgory = 
        catgory === "all" || 
        product.catgory === catgory;


        return matchesSearch && matchesCatgory
    })

    return(
        <div>
            <Navbar
                search={search}
                setSearch={setSearch}
                cartCount={cart.length}
            />

            <Filter
                catgory={catgory}
                setCatgory={setCatgory}
            />

            <main className="products">
                {filteredProducts.map((product) =>(
                    <Productcart
                    key={product.id}
                    product={product}
                    setCart={setCart}
                    />
                ))}

            </main>
        </div>
    )
    
}

export default App

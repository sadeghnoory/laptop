export default function Filter({catgory, setCatgory}){
    return(
        <div className="filter">
            <button className={catgory === "all" ? "active" : ""} onClick={() => 
                setCatgory("all")}>
                all
            </button>

            <button className={catgory === "gaming" ? "active" : ""} onClick={() => 
                setCatgory("gaming")}>
                gaming
            </button>

            <button className={catgory === "office" ? "active" : ""} onClick={() => 
                setCatgory("office")}>
                office
            </button>
        </div>
    )
}
import CardWidget from "./CardWidget";

function Navbar() {
    return (
        <>
            <div className="div">
                <h1 className="titulo">MoonDistribuidora</h1>
                    <ul className="descripcion">
                        <li>Tinturas</li>
                        <li>Mascaras</li>
                        <li>Esmaltes</li>
                    </ul>
                <CardWidget/>
            </div>
        
        </>
    )
}
export default Navbar;
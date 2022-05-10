import "./style/menu.css"

export default function menu({ menuOpen, setMenuOpen }) {
    return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#home">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#belgiumnews">Belgium News</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#trafficnews">Traffic News</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#weathernews">Weather News</a>
            </li>
            
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#sportnews">Sport News</a>
            </li>
             
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#worldnews">World News</a>
            </li>
        </ul>
    </div>
  )
}
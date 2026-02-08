import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ui/uiSlice";
import "../styles/header.css";


const Header = () => {
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="header-inner conteiner">
                <div className="logo">My site on React-Redux</div>

                <nav className="nav">
                    <a href="#">Main</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
                <button
                    className="theme-btn"
                    onClick={() => dispatch(toggleTheme())} >
                    Change Theme
                </button>

            </div>
        </header>
    )
}

export default Header
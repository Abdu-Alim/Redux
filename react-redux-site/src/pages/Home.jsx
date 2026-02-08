import { useSelector } from "react-redux";
import { useEffect } from "react";
import "../styles/home.css";

const Home = () => {
    const theme = useSelector(state => state.ui.theme);
    // const users = useSelector(state => state.data.users);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <main className="home conteiner">
            <h2>Welcome to the React-Redux Site</h2>
            <p>This is the home page. Use the navigation above to explore the site.</p>
        </main>
    )
};

export default Home;
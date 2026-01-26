import { useSelector } from "react-redux";

const Home = () => {
    const theme = useSelector(state => state.ui.theme);
    const users = useSelector(state => state.data.users);

    return(
        <main style={{
            padding: "40px",
            minHeight: "60px",
            background: theme === 'light'? "#fff": "#222",
            color: theme === 'light' ? "#000": "#fff"
        }}>
            <h2>Главная страница</h2>
            <p>Добро пожаловать</p>
            
            {}
            <h3>Список пользователей:</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} (возраст: {user.age})
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Home;
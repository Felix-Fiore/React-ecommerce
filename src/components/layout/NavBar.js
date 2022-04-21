import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export const NavBar = () => {
    const { user } = useContext(UserContext);

    const { name } = user;

    return (
        <div>
            <ul className="nav nav-pills bg-dark p-3  d-flex justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        Carrito
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="userName">{name}</li>
            </ul>
        </div>
    );
};

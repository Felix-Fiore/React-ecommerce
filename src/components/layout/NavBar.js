export const NavBar = () => {
    return (
        <div>
            <ul className="nav nav-pills bg-dark p-3  d-flex justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/cart">
                        Carrito
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login">
                        Login
                    </a>
                </li>
            </ul>
        </div>
    );
};

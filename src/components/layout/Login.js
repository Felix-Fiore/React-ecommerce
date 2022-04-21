import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { setUser } = useContext(UserContext);

    let navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        setUser({
            name: 'Admin',
            email: 'correo@correo.com',
            password: '123456',
        });

        navigate('/', { replace: true });
    };

    return (
        <div className="container login-container" style={{ width: 1000 }}>
            <div>
                <div className=" login-form-1">
                    <h3>Login</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="loginEmail"
                                /* value={loginEmail} */
                                /* onChange={handleLoginInputChange} */
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="loginPassword"
                                /* value={loginPassword} */
                                /* onChange={handleLoginInputChange} */
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

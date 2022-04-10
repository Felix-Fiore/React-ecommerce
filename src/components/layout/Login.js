export const Login = () => {
    return (
        <div className="container login-container" style={{ width: 1000 }}>
            <div>
                <div className=" login-form-1">
                    <h3>Login</h3>
                    <form /* onSubmit={handleLogin} */>
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
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

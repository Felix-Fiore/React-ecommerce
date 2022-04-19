export const Cart = () => {
    return (
        <div className="contenedor">
            <div className="items-section">
                <h4>Cart (0)</h4>
                <div className="item">
                    <p>item Name</p>
                    <div className="counter-buttons">
                        <button className="counter-button">-</button>
                        <p className="counter-value">0</p>
                        <button className="counter-button">+</button>
                    </div>
                    <p>$0.00</p>
                </div>
                <div className="payment-button">
                    <button className="btn-primary">Continuar Compra</button>
                </div>
            </div>
        </div>
    );
};

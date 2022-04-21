import { Products } from './Products';

export const Cart = () => {
    const { name, price } = Products;

    return (
        <div className="contenedor">
            <div className="items-section">
                <h4>{name} (0)</h4>
                <div className="item">
                    <p>item Name</p>
                    <div className="counter-buttons">
                        <button className="counter-button">-</button>
                        <p className="counter-value">0</p>
                        <button className="counter-button">+</button>
                    </div>
                    <p>{price}</p>
                </div>
                <div className="payment-button">
                    <button className="btn-primary">Continuar Compra</button>
                </div>
            </div>
        </div>
    );
};

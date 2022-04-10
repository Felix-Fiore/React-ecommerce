import carteraTarjeta from '../../assets/carteraTarjeta.jpg';

export const Products = () => {
    return (
        <div className="container">
            <div>
                <div className="card" style={{ width: 250 }}>
                    <img
                        src={carteraTarjeta}
                        className="card-img-top"
                        alt="Producto"
                    ></img>
                    <div className="card-body text-center">
                        <h5 className="card-title">Nombre Producto</h5>
                        <p className="card-text">Descripcion Producto</p>
                        <span>Precio producto</span>
                        <a href="/nada" className="btn btn-primary">
                            Más Información
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

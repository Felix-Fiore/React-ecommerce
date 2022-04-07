import cartera from '../../assets/cartera.jpg';
import cartera2 from '../../assets/cartera2.jpg';
import cartera3 from '../../assets/cartera3.jpg';

export const Hero = () => {
    return (
        <div
            className="container w-100 p-0 d-flex justify-content-center"
            style={{ height: 350 }}
        >
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide border border-4"
                style={{ height: 350 }}
                data-bs-ride="carousel"
            >
                <div className="carousel-inner" style={{ height: 345 }}>
                    <div
                        className="carousel-item active "
                        style={{ height: 350 }}
                    >
                        <img
                            src={cartera}
                            className="d-block w-80"
                            alt="First"
                        ></img>
                    </div>
                    <div className="carousel-item" style={{ height: 345 }}>
                        <img
                            src={cartera2}
                            className="d-block w-80"
                            alt="Second"
                        ></img>
                    </div>
                    <div className="carousel-item" style={{ height: 345 }}>
                        <img
                            src={cartera3}
                            className="d-block w-80"
                            alt="Third"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

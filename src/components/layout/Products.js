import carteraTarjeta from '../../assets/carteraTarjeta.jpg';
import { Product } from '../Product';

export const Products = () => {
    const cartera = carteraTarjeta;

    const products = [
        {
            image: cartera,
            name: 'Cartera 1',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.',
            price: '$50.00',
            addedToCart: false,
        },
        {
            image: cartera,
            name: 'Cartera 2',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.',
            price: '$80.00',
            addedToCart: false,
        },
        {
            image: cartera,
            name: 'Cartera 3',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.',
            price: '$100.00',
            addedToCart: false,
        },
    ];

    return (
        <>
            {products.map(({ name, image, description, price }) => (
                <Product
                    key={name}
                    name={name}
                    image={image}
                    description={description}
                    price={price}
                />
            ))}
        </>
    );
};

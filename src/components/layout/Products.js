import carteraTarjeta from '../../assets/carteraTarjeta.jpg';
import { Product } from '../Product';

export const Products = () => {
    //const { name, description, price } = Product;

    const products = [
        {
            image: carteraTarjeta,
            name: 'Cartera 1',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.',
            price: '$50.00',
        },
        {
            image: carteraTarjeta,
            name: 'Cartera 2',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.',
            price: '$80.00',
        },
        {
            image: carteraTarjeta,
            name: 'Cartera 3',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.',
            price: '$100.00',
        },
    ];

    return (
        <>
            {products.map(({ name, description, price }) => (
                <Product
                    key={name}
                    name={name}
                    description={description}
                    price={price}
                />
            ))}
        </>
    );
};

import { Hero } from '../components/layout/Hero';
import { NavBar } from '../components/layout/NavBar';
import { Products } from '../components/layout/Products';

export const HomeScreen = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Products />
        </div>
    );
};

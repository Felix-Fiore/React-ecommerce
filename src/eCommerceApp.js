import { Routes, Route } from 'react-router-dom';
import { CartScreen } from './screens/CartScreen';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';

export const ECommerceApp = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/login" element={<LoginScreen />} />
            </Routes>
        </div>
    );
};

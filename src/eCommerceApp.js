import { ModalContextProvider } from './context/ModalContext';
import { UserContextProvider } from './context/UserContext';
import { AppRoutes } from './routes/AppRoutes';

export const ECommerceApp = () => {
    return (
        <UserContextProvider>
            <ModalContextProvider>
                <AppRoutes />
            </ModalContextProvider>
        </UserContextProvider>
    );
};

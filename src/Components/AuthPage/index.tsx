import { useLocation } from 'react-router-dom';
import AuthLayout from '../../Common/AuthLayout';

function AuthComponent() {
    const location = useLocation();
    const isLogIn = location.pathname === '/signup' ? false : true;

    return (
        <>
            <AuthLayout isLogin={isLogIn} />
        </>
    );
}

export default AuthComponent;

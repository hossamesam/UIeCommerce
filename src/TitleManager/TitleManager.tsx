import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const getTitleByPath = (pathname: string) => {
    switch (pathname) {
        case '/':
            return 'Home';
        case '/Home':
            return 'Home';
        case '/shop':
            return 'shop';
        case '/about':
            return 'about';
        case '/contact':
            return 'contact';
        case '/products':
            return 'Products';
        case '/cart':
            return 'Cart';
        default:
            return 'Furniro';
    }
};

export default function TitleManager() {
    const location = useLocation();

    useEffect(() => {
        document.title = getTitleByPath(location.pathname);
    }, [location.pathname]);

    return null;
}
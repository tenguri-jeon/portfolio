import { ProductContainer } from './styled';
import productData from '../../../src/assets/api/product'
import ProductItem from './ProductItem';
import { useLocation } from 'react-router-dom';

const Product = () => {
    const location = useLocation();
    const getData = location.pathname.startsWith('/') ? location.pathname.substring(1) : location.pathname;
    
    return (
        <ProductContainer className={getData === 'product' && 'scroll'}>
            {
                productData.map(item => <ProductItem key={item.id} {...item}/>)
            }
        </ProductContainer>
    );
};

export default Product;
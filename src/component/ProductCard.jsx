import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlices'; // Fixed import path (assuming cartSlice, not cartSlices)
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cart);
    const isInCart = cartData.items.some((item) => item.id === product.id);

    if (!product || !product.image || !product.title || !product.price) {
        return <Card className="h-100 shadow-sm"><Card.Body>Loading...</Card.Body></Card>;
    }

    return (
        <Card className="h-100 shadow-sm">
            <Card.Img
                variant="top"
                src={product.image}
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column"> {/* Flex column to control layout */}
                <Card.Title className="flex-grow-0">{product.title}</Card.Title>
                <Card.Text className="flex-grow-0">${product.price}</Card.Text>
                <div className="mt-auto"> {/* Push button to bottom */}
                    <Button
                        variant="primary"
                        onClick={() => !isInCart && dispatch(addToCart(product))}
                        disabled={isInCart}
                        className="w-100" // Full-width button for consistency
                    >
                        {!isInCart ? 'Add to Cart' : 'Added'}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
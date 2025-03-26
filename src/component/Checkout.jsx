import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { Container, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCheckout = () => {
        dispatch(clearCart());
        alert('Order placed successfully!');
        navigate('/');
    };

    return (
        <Container className="my-5">
            <h2>Checkout</h2>
            <Alert variant="info">Total Amount: ${total.toFixed(2)}</Alert>
            <Button variant="primary" onClick={handleCheckout}>
                Confirm Purchase
            </Button>
        </Container>
    );
};

export default Checkout;
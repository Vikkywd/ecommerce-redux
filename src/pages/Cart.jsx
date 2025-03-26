import { useSelector } from 'react-redux';
import CartItem from '../component/CartItem'; // Fixed import path (components, not component)
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { items, total } = useSelector((state) => state.cart);

    return (
        <Container className="my-5">
            <h2>Your Cart</h2>
            {items.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <h3>Total: ${total.toFixed(2)}</h3>
                        <Link to="/checkout">
                            <Button variant="success">Proceed to Checkout</Button>
                        </Link>
                    </div>
                </>
            )}
        </Container>
    );
};

export default Cart;
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/slices/cartSlices'; // Fixed import path

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    // Guard clause for missing item data
    if (!item || !item.image || !item.title || !item.price || !item.quantity) {
        return <tr><td colSpan="5">Loading...</td></tr>;
    }

    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                    />
                    <span>{item.title}</span>
                </div>
            </td>
            <td>${item.price}</td>
            <td>
                <Form.Select
                    value={item.quantity}
                    onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) }))}
                    style={{ width: '80px' }}
                >
                    {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </Form.Select>
            </td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
            <td>
                <Button
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(removeFromCart(item.id))}
                >
                    Remove
                </Button>
            </td>
        </tr>
    );
};

export default CartItem; // Fixed export name (CartItem, not Cartitem)
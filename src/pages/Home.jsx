import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/slices/productSlices";
import {Container, Row, Col} from 'react-bootstrap'
import ProductCard from "../component/ProductCard";

const Home = ()=>{
    const dispatch = useDispatch()
    const {items, status} = useSelector(state=> state.products)

    useEffect(()=>{
        if(status === 'idle'){
            dispatch(fetchProduct())
        }
    }, [status, dispatch])
    if(status === 'loading') return <div>Loading...</div>
    if(status === 'failed') return <div>Error loading products</div>

    return (
        <Container>
            <h1 className="my-4 text-center">Our Products</h1>
            <Row xs={1} md={3} lg={4} className="g-4">
                {items.map(product =>(
                    <Col key={product.id}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )

}

export default Home;
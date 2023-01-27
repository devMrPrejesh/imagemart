import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { useParams } from "react-router-dom";

let Collection = (props) => {
    let { name } = useParams();
    let collection = props.collections[name];
    // let images = collection.images.map(img => (<img key={img} src={require(img)} alt="ingp" />));
    console.log(collection.images[0]);
    // const newLocal = require(collection.images[0]);
    return (<div>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Brand>{collection.collectionName}</Navbar.Brand>
                <Navbar.Brand>{collection.count}</Navbar.Brand>
            </Container>
        </Navbar>
    </div>)
}

export default Collection;
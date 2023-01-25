import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { useParams } from "react-router-dom";
import image from "../images/india/admiring-the-city-of-udaipur.jpg";


let Collection = (props) => {
    let { id } = useParams();
    let collection = props.collections.filter(col => col.id === parseInt(id))[0];
    console.log(collection);
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Brand>{collection.collectionName}</Navbar.Brand>
                    <Navbar.Brand>{collection.imageCount}</Navbar.Brand>
                </Container>
            </Navbar>
            <img src={image} />
        </div>)
}

export default Collection;
import React from 'react';
import Navbar from '../components/navbar'
import Highlight from '../components/highlight'
import Product from '../components/product'
import Productvm from '../components/productvm'
import Carousel from '../components/carousel'
import Footer from '../components/footer'

export default function Homepage() {
   
    return (
        <>
            <Navbar/>
            <Highlight/>
            <Product/>
            <Productvm/>
            <Carousel/>
            <Footer/>
        </>
    );
};

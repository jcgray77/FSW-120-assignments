import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Bloglist from './Bloglist';
import Footer from './Footer';
import './blog.css';

function App(props) {
    return (
        <div className='app-wrapper'>
            <Navbar></Navbar>
            <Header></Header>
            <Bloglist></Bloglist>
            <Footer></Footer>
        </div>
    );
}

export default App;
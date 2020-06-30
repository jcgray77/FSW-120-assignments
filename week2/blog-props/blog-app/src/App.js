import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Bloglist from './Bloglist/Bloglist/BlogList';
import Footer from './Footer/Footer';
import './App.css';

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
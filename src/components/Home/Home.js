import React from 'react'
import Filter from '../Filter/Filter';
import Navbar from '../Navbar/Navbar';
import PostList from '../Post/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/Header"

function Home(props) {
    return (
        <div>
            <div >
                <Header/>
                <div className="row comtainer">
                    <div className="col-md-3"><Navbar /></div>
                    <div className="col-md-6"><PostList/></div>
                    <div className="col-md-3"><Filter /></div>
                </div>
            </div>
        </div>
    )
}

export default Home
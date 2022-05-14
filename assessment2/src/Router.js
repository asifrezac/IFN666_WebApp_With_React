import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import PriceHistory from './components/PriceHistory';
import Quote from './components/Quote';
import './App.css';

class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <ul className="header">
                        <li className="page-title"><Link to="/" 
                            style={{fontSize: 20, color: "black", textDecoration: 'none'}}>Home</Link></li>
                        <li className="page-title" style={{fontSize: 22}}>|</li>
                        <li className="page-title"><Link to="/stocks" 
                            style={{ fontSize: 20, color: "black", textDecoration: 'none' }}>Stocks</Link></li>
                        <li className="page-title" style={{fontSize: 22}}>|</li>
                        <li className="page-title"><Link to="/" 
                            style={{fontSize: 20, color: "black", textDecoration: 'none'}}>Quotes</Link></li>
                        <li className="page-title" style={{ fontSize: 22 }}>|</li>
                        <li className="page-title"><Link to="/" 
                            style={{fontSize: 20, color: "black", textDecoration: 'none'}}>Price History</Link></li>
                     </ul>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Routes>
                        <Route exact path="/" component={Home}/>
                        <Route path="/stocks" component={Stocks}/>
                        <Route path="/history" component={PriceHistory} />
                        <Route path="/quotes" component={Quote}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}
export default Router;
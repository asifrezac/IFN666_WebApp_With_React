import React from 'react';

class Home extends React.Component{
    render(){
        return (
            <div className="home">
                <h1>Stock Prices</h1>
                <p>Welcome to the Stock Market Portal. You may click on stocks to view all the available companies or Quote to get the latest price information by stock symbol, or choose Price History  or search to sample from the most recent  one hundred days of information for a particular stock.  
                </p>
            </div>
        );
    }
}
export default Home; 
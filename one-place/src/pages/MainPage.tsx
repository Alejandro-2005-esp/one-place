import React from "react";
import ViewAllBtn from '../components/ViewAllBtn'
import SellAllBtn from '../components/SellAllBtn'
import LoadMoreBtn from '../components/LoadMoreBtn'

function Mainpage(){
    return(
        <div>
            <div>
                <h1>WINTER</h1>
                <h1>COLLECTION</h1>
            < ViewAllBtn />
            </div>
            
            <div>
                <h2>NEW ITEMS</h2>
                < SellAllBtn />
            </div>
            <div>
                <h2>CATEGORIES</h2>
                < LoadMoreBtn />
            </div>
            
            <div>
                <h2>CREATE YOUR OWN STYLE</h2>
            </div>
            <div>
                <h3>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h3>
            </div>
            
        </div>
        
    );

}
export default Mainpage;
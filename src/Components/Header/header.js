import React, {useState} from 'react';
import Navbar from '../Nav/navbar';
import About from '../About/About';
import Portfolio from '../Portfolio/project';
import Contact from '../Contact/contact';

function Header(){

    const [currentPage, pageChange] = useState('About');

    const renderPage = () => {

        switch(currentPage) {
            case "About":
                return <About></About>
            case"Portfolio":
                return <Portfolio></Portfolio>
            case"Contact":
                return <Contact></Contact>

            default:
                return <About></About>
        }
    }

    return (
        <div>
            
            <Navbar currentPage={currentPage} pageChange ={pageChange} />
<div>
    {renderPage()}
</div>
        </div>
    )
}
export default Header;
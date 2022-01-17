
import React from "react";

const pages = ['About', 'Portfolio', 'Contact']



const Navbar = (props) => {



    return (
        <nav className="navbar">

            <div className="links">
                {pages.map(page => (
                <ul>
                    <li className="nParts" key={pages}>
                        <a href={'#' + page.toLowerCase()} onClick={() => props.pageChange(page)}
                            className={props.currentPage === page ? 'nav active' : 'nParts'}
                            
                            >
                            {page}
                        

                        </a>

                    </li>
                    
                </ul>
                ))}
                

            </div>

        </nav>);
}

export default Navbar;
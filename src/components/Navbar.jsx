import React from 'react';
import './styles/Navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className='Navbar'>
                <div className= 'container-fluid'>
                    <a className= 'Navbar__brand'>
                        <span className= 'font-weight-light'>
                            Politecnico
                        </span>
                    </a>
                </div>
            </div>
        )
    }
}
export default Navbar;

import React from 'react';
import './Header.css'

const Header = ({name, lastName, email, phone}) =>{

    return(
        <div className="Header">
            {
                (name && lastName && email && phone) ?(
                    <div className="content">
                        <span>{`${name.toUpperCase()} ${lastName.toUpperCase()}`}</span>
                        <span>{email.toUpperCase()}</span>
                        <span>{phone}</span>
                    </div>
                ):<div>please give me your data</div>
                 
            }
            
        </div>
    )

}

export default Header;
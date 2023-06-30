import React, { useState } from 'react'

const User = ({setCurrTab}) => {

    const [activeButton, setActiveButton] = useState(1)

    const handleClick = (buttonId) => {
        setActiveButton(buttonId)
        if(buttonId===1) setCurrTab("Home")
        else if(buttonId===2) setCurrTab("Contact")
        else if(buttonId===3) setCurrTab("Information")
        else if(buttonId===4) setCurrTab("Guide")
    }
    return (
        <div className='user'>
            <div className="user-info">
                <h1>Logo.</h1>
            </div>
            <div className="buttons">
                <button className={activeButton === 1 ? 'active' : ''} onClick={()=>{handleClick(1)}}>
                    <span>Home</span>
                </button>
                <button className={activeButton === 2 ? 'active' : ''} onClick={()=>{handleClick(2)}}>
                    <span>Contact</span>
                </button>
                <button className={activeButton === 3 ? 'active' : ''} onClick={()=>{handleClick(3)}}>
                    <span>Information</span>
                </button>
                <button className={activeButton === 4 ? 'active' : ''} onClick={()=>{handleClick(4)}}>
                    <span>Guide</span>
                </button>

            </div>
        </div>
    )
}

export default User
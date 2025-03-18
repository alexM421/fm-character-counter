import React from "react";

export default function Navbar ( { darkMode, setDarkMode}) {

    //On first render, add darkModeOn class to body
    React.useEffect(() => {
        document.body.className = darkMode? "darkModeOn": "darkModeOff"
    },[darkMode])


    const onClick = () => {
        setDarkMode(prevMode => !prevMode)
        
    }

 



    
    return(
        <nav>
            <img className="nav-logo" src={darkMode?"Logo White.png":"Logo Dark.png"}/>
            <img className="nav-darkMode-icon" 
            src={darkMode? "Settings Icon.png":"moon-02.png"}
            onClick={onClick}
            />
        </nav>
    )
}
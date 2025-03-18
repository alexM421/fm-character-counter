import React from "react"

export default function StatCard ( { backgroundColor, backgroundImage, stats: {toDo, toRead} }) {



    const style={
        color: "var(--neutral-900)",
        backgroundColor: `${backgroundColor}`,
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom 0px right -30px",
    }

    
    


    return(
        <div className="statcard" style={style}>
            <h1 className="text-preset-1">{toDo()}</h1>
            <p className="text-preset-3">{toRead}</p>
        </div>
    )
}
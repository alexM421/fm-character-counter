import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';


export default function Charts ( { textArea }) {

    const [displayAll,  setDisplayAll] = React.useState(false)

    const characters = textArea.toUpperCase().split("").filter(char => char.match(/[A-Z]/)).sort()
  
    const chartMaking = () => {

        const charCount = characters?.length
        const letterCount = {}
        const charts = []


        //Get the count of each letters

        characters.forEach( char  => {
            if(letterCount[char]){
                letterCount[char]++
            }else{
                letterCount[char] = 1
            }
        })

        //Sort by descending order each letter counts
        const sortedLetterCount = Object.fromEntries(
            Object.entries(letterCount)
            .sort(
                (a,b) => b[1]-a[1])
            )

        //For each count, create a div with the chart
        for (let char in sortedLetterCount){

            const percentage = Math.ceil((letterCount[char]/charCount)*10000)/100
            const style = {
                width: `${percentage}%`
            }

            charts.push(
                <div className="chart">
                    <p className="text-preset-4">{char}</p>
                    <div className="chart-bar">
                        <div className="chart-bar-overlap" style={style}></div>
                    </div>
                    <p className="text-preset-4">{`${letterCount[char]} (${percentage}%)`}</p>
                </div>
            )
        }
        return charts
    }


    const handleClick = () => {
        setDisplayAll(prevDisplay => !prevDisplay)
    }

    return(
        <div className="charts">
            <h1 className="text-preset-2">Letter Density</h1>
            <div className="chart-elements">
                {!textArea?

                <div>
                    <p className="text-preset-4">No characters found. Start typing to see letter density.</p>
    
                </div>

                :!displayAll?

                    <div className="chart-elements">
                        {chartMaking().splice(0,5)}
                        <p className="text-preset-3 seeMore-button" aria-label="See more button" onClick={handleClick}>See more <FontAwesomeIcon icon={faAngleDown} /></p>
                    </div>
                    
                    :<div className="chart-elements">
                        {chartMaking()}
                        <p className="text-preset-3 seeMore-button" aria-label="Show less button" onClick={handleClick}>Show less <FontAwesomeIcon icon={faAngleUp} /></p>
                    </div>
            }
            </div>
        </div>
    )
}
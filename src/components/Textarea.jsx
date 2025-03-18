import React from "react";

export default function Textarea ( { handleChange, setChecked, checked, charNumber }) {

    const [limit, setLimit] = React.useState(300)

    const handleCheck = (e) => {
        setChecked({
            ...checked,
            [e.target.name]: e.target.checked,
        })
    }

    const isLimitOver = checked["limit"] && charNumber>limit
    
    return(
        <div className="textarea">
            <h1 className="text-preset-1">Analyze your text<br/>in real-time.</h1>
            <textarea 
            className={`text-preset-3 ${isLimitOver? "highlight":""}`}
            placeholder="Start typing here... (or paste your text)" 
            aria-label="Paste your text here"
            onChange={handleChange} 
            />
            {isLimitOver && 
            <div className="overLimitText">
                <img src={"info-circle.png"}/>
                <p className="text-preset-4">{`Limit reached! Your text exceeds ${limit} characters`}</p>
            </div>
          }
            <div className="textarea-under">
                <div className="text-preset-4 checkboxes">
                    <div>  
                        <input 
                        id="exclude-spaces" 
                        name="spaces"
                        checked={checked[name]}  
                        onChange={handleCheck}  
                        type="checkbox"
                        />
                        <label htmlFor="exclude-spaces">Exclude Spaces</label>
                    </div>
                    <div>
                        <input 
                        id="set-char-limit" 
                        name="limit"
                        onChange={handleCheck} 
                        checked={checked[name]} 
                        type="checkbox"
    
                        />
                        <label htmlFor="set-char-limit">Set Character Limit</label>
                    </div>
                    {checked["limit"] 
                    && <input 
                        className="char-limit text-preset-4" 
                        type="number" 
                        aria-label="character-limit" 
                        value={limit}
                        onChange={(e) => setLimit(e.target?.value)}
                        />}
                </div>
            
                <p className="text-preset-4">{`Approx. reading time: ${"<"} ${Math.ceil(charNumber/1000)} minute`}</p>
            </div>
        </div>
    )
}
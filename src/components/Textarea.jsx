import React from "react";

export default function Textarea () {
    return(
        <div className="textarea">
            <h1 className="text-preset-1">Analyze your text<br/>in real-time.</h1>
            <textarea className="text-preset-3" placeholder="Start typing here... (or paste your text)" aria-label="Paste your text here">
            </textarea>
            <div className="text-preset-4">
                <input id="exclude-spaces" type="checkbox"/>
                <label for="exclude-spaces">Exclude Spaces</label>
                <input id="set-char-limit" type="checkbox"/>
                <label for="set-char-limit">Set Character Limit</label>
            </div>
        </div>
    )
}
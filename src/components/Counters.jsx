import React from "react";
import StatCard from "./StatCard";

export default function Counters ( { textArea, checked, setCharNumber }) {

    /*Count Characters*/

    const countChar = () => {
        const char = textArea.split("")
        const charLength = checked.spaces? 
            char.filter(char => char!==" ").length            
            :char.length 
        setCharNumber(charLength)
        return charLength<10? `0${charLength}`:charLength
    }

    const countCharObj = {
        toDo: countChar,
        toRead: "Total Characters" 
    }

    /*Count Words*/

    const countWords = () => {
        const wordCount = textArea===""?
         0
         : textArea.split(/\s+/g).filter(word => word!=="").length

        return wordCount<10? `0${wordCount}`:wordCount
    }

    const countWordsObj = {
        toDo: countWords,
        toRead: "Word Count"
    }

    /*Sentence Count*/

    const countSentence = () => {
        const sentences = textArea.match(/\s*[^.!?]+[.!?]+/g)
        const sentenceCount =  !sentences? 
        0
        :sentences?.length 
        return sentenceCount<10? `0${sentenceCount}`:sentenceCount
    }

    const countSentenceObj = {
        toDo: countSentence,
        toRead:"Sentence Count"
    }



    return(
        <div className="counters">
            <StatCard backgroundColor="var(--blue-400)" backgroundImage={"Shape-01.svg"} stats={countCharObj}/>
            <StatCard backgroundColor="var(--yellow-500)" backgroundImage={"Shape-02.svg"} stats={countWordsObj}/>
            <StatCard backgroundColor="var(--orange-500)" backgroundImage={"Shape-03.svg"} stats={countSentenceObj}/>
        </div>
    )
}
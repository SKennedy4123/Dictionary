import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <div>{props.phonetic}</div>
        <div><strong>Definition: </strong>{props.meaning.definition}</div>
        <em><div>{props.meaning.example}</div></em>
        <Synonyms synonyms={props.meaning.synonyms} />
        </div>
    )
}
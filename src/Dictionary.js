import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data);
    }

    function handleImgResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();
    let apiKey = "87fd924aft47ob31f6228617ba830bdb";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let apiImgUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;    
    axios.get(apiImgUrl).then(handleImgResponse);
}


    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    
    return (
    <div className="Dictionary">
        <div>
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} autoFocus={true} placeholder="Type a word to search... "/>
            <button>Search</button>
        </form>
        </div>
        <div className="hint">Suggested words: sunset, yoga, breakfast, etc.</div>
    <Results results={results}/>
    <Photos photos={photos}/>
    </div>
    );
}
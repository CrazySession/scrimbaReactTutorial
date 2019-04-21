import React from 'react'

let questionline = '';

function questTest(props){
    if(props.question == ''){
        questionline = '';
    }
    else{
        questionline = 'Question:';    
    }    
}

function Joke(props){
    return(
        <div>
            <h3>There it is</h3>
            {questTest(props)}
            <p>{questionline} {props.question}</p>
            <p>Punchline: {props.punchL}</p>
        </div>
    )
}

export default Joke

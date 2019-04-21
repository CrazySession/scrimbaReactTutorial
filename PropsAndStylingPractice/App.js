import React from 'react'

import Joke from './component/Joke'

function App(){
    return(
        <div>
        
            <h1>Jokes on you</h1>
            
                <Joke
                question="Question No. One"
                punchL="Hahaha"   
                />
                <Joke
                question=''
                punchL="Hoehoehoe"   
                />
                <Joke
                question="Question No. Two"
                punchL="hihihi"   
                />
                <Joke
                question="Question No. Three"
                punchL="HAHA"   
                />
                <Joke
                question=''
                punchL="Doh!"   
                />
        </div>
    )
}

export default App

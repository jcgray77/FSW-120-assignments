import React from 'react';

function App(props) {
   console.log(props)
    return (
<div>
<h1>{props.place}</h1>
<h1>{props.price}</h1>
<h1>{props.timeToGo}</h1>

</div>
    )
}

    export default App;
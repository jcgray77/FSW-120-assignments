import React from 'react';

import ColoredBoxes from "./ColoredBoxes"

function App() {
    return (
        <div className="colored">
            <ColoredBoxes 
                colored={{Title: "Spain", backgroundColor: "purple", Subtitle: "Ibiza", Information: "Music, Live, Happiness and Dancing"}}
            />
            
            <ColoredBoxes 
                colored={{Title: "Florida", backgroundColor: "aqua", Subtitle: "Miami", Information: "UMC/WMF"}}
            />
            
            <ColoredBoxes
                colored={{Title: "New York", backgroundColor: "Dark-Grey", Subtitle: "NYC", Information: "Electric Daisy"}}
            />
            
            <ColoredBoxes 
                colored={{Title: "California", backgroundColor: "Taupe", Subtitle: "Indio", Information: "Coachella"}}
            />

            <ColoredBoxes 
                colored={{Title: "California", backgroundColor: "Orange-Red", Subtitle: "Black Rock City", Information: "Burning Man"}}
            />  

            <ColoredBoxes 
                colored={{Title: "London", backgroundColor: "light-grey", Subtitle: "Somerset England", Information: "Glastonbury Festival"}}
            />

            <ColoredBoxes 
                colored={{Title: "Illinois", backgroundColor: "Blue", Subtitle: "Chicago", Information: "Lalapolooza"}}
            />

            <ColoredBoxes 
                colored={{Title: "Nevada", backgroundColor: "Brown", Subtitle: "Las Vegas", Information: "EDC Las Vegas"}}
            />
            
            <ColoredBoxes 
                colored={{Title: "Texas", backgroundColor: "Silver", Subtitle: "Autstin", Information: "South by Southwest"}}
            />

            <ColoredBoxes 
                colored={{Title: "Tennessee", backgroundColor: "Green", Subtitle: "Manchester", Information: "Bonaroo"}}
            />
        </div>
    )
}

export default App
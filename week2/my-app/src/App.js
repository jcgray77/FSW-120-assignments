import React from 'react';
import VacaSpots from './Spot'
import './App.css';



function App() {
    let vacationSpots = [  
        {
          place: "Meridian, Idaho",
          price: "$40",
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: "$900",
          timeToGo: "Winter"
        },{
          place: "China",
          price: "$1200",
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: "$1100",
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: "$400",
          timeToGo: "Spring"
        }
    ];
    const vacationComps = vacationSpots.map((spot, index) => <VacaSpots key={index} place={spot.place} price={spot.price} timeToGo={spot.timeToGo} />)
    
    // let parentStyles = {
    //     backgroundColor: '',
    //     padding: '5px 20px'
    // };

    return (
        <div>
        {vacationComps}
        </div>
    )
}



export default App;

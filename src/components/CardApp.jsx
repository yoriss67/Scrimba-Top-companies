
import React from "react"

import {Card} from "../index"

import cardData from "../cardData"


function App() {
  const cards = cardData.map((card) => {
    
    return (
      <Card 
      key={card.id}
      {...card}
      />
  
      )
  })

  return (
    <div className="card-container">
      {cards}
    </div>
  )
}

export default App

import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { useState, useEffect } from "react"
import { HeroCard } from "./HeroCard"


export const HeroList = ({publisher}) => {

  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    setHeroes( getHeroesByPublisher(publisher) );
  }, []) 
  

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        heroes.map( hero => 
          <HeroCard 
            key={hero.id} 
            {...hero}
          />
        )
      }
    </div>
  )
}

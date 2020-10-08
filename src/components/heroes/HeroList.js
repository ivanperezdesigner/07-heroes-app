import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPubisher'
import { HeroCard } from './HeroCard'
import "animate.css"

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ])
    
    return (
        <div className='card-columns '>
            {
                heroes.map(hero => (
                    <div 
                        key={ hero.id }
                        className='animate__animated animate__flipInX'
                    >
                        <HeroCard
                            // key={ hero.id }
                            { ... hero } 
                        />
                    </div>
            ))
            }
        </div>
    )
}

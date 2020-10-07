import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPubisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher )
    
    return (
        <div className='card-columns'>
            {
                heroes.map(hero => (
                <HeroCard
                    key={ hero.id }
                    { ... hero } />
            ))
            }
        </div>
    )
}

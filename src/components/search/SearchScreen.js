import React from 'react'
import { HeroCard } from '../heroes/HeroCard';
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';


export const SearchScreen = () => {

    const heroesFiltered = heroes

    const [values, handleInputChange ] = useForm({
        searchText: ''
    })

    const { searchText } = values

    const handleSearch = (e) =>{
        e.preventDefault()
        console.log(searchText)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={ handleSearch }>
                        <input 
                            type='text'
                            name='searchText'
                            placeholder='Find your hero'
                            className='form-control'
                            autoComplete='off'
                            value={ searchText }
                            onChange={ handleInputChange }
                        />
                        <button
                            type='Submit'
                            className='btn mt-1 btn-block btn-outline-primary'
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr/>
                    {
                        heroesFiltered.map(hero =>(
                            <HeroCard 
                                key={ hero.id }
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

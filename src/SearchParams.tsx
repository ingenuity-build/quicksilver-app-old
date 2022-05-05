import { useState } from "react";

const ANIMAL = ['dog', 'human', 'cat', 'bird', 'cow']

const SearchParams = () => {
    const [location, setLocation] = useState("Seatle, WA")
    const [animal, setAnimal] = useState('')

    return (
        <div className="search-params ">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location"
                           onChange={event => setLocation(event.target.value)}
                           value={location} placeholder="Location"/>
                </label>
                <hr/>
                <label htmlFor="animal">
                    <select onChange={e => setAnimal(e.target.value)}
                            onBlur={e => setAnimal(e.target.value)}
                            name="animal" id="animal">
                        <option value=""/>
                        {ANIMAL.map(animal => (
                            <option key={animal} value={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                {animal}
                <button> Submit</button>
            </form>
        </div>
    )
}
export default SearchParams;
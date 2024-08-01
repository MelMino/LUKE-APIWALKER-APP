import './App.css';
import React, { useState } from 'react';
import axios from "axios"
import People from './Components/People';
import Films from './Components/Films';
import Starships from './Components/Starships';
import Vehicles from './Components/Vehicles';
import Species from './Components/Species';
import Planets from './Components/Planets';

const App = () => {

    const [responseData, setResponseData] = useState()
    const [category, setCategory] = useState('')
    const [id, setId] = useState('')
    const [notFound, setNotFound] = useState('');

    const getCategories = () => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then((response) => {
            setResponseData(response.data)
            setNotFound(false)
        })
        .catch((error) => {
            setNotFound(true)
            console.log(error);
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        getCategories()
    }

    const onChangeSelect = (e) => {
        setCategory(e.target.value)
        setId('')
        setNotFound('')
    }

    const onChangeInput = (e) => {
        setId(e.target.value)
    }
    
    const showComponent = () => {
        if (category === 'people') {
            return <People responseData={responseData} />
        }
        else if (category === 'films') {
            return <Films responseData={responseData} />
        }
        else if (category === 'starships') {
            return <Starships responseData={responseData} />
        }
        else if (category === 'vehicles') {
            return <Vehicles responseData={responseData} />
        }
        else if (category === 'species') {
            return <Species responseData={responseData} />
        }
        else if (category === 'planets') {
            return <Planets responseData={responseData} />
        }
    }
    //Verifica si existe el id
    const render = () => {
        if (notFound === false) {//retorna el componente que se busco
            return showComponent()
        }
        else if (notFound === true) {//Si tira error se tira mensaje
            return <div className="error-message">
              <p>Estos no son los droides que estás buscando</p>
              <img src="https://ew.com/thmb/D8L25vbrQ405gamnnh_L17RPGIk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/revenge-of-the-sith-2000-8a98ad56e8834130969bddf9350671c7.jpg" 
                alt="obi-wan kenobi"
                width="300" height="200">
              </img></div>
        }
    }
    return (
        <div className="container">
            <h1>Luke APIwalker</h1>
            <form onSubmit={onSubmit}>
                <select onChange={onChangeSelect}>
                    <option defaultValue>Select Category</option>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
                <input type="number" value={id} placeholder='Enter ID' onChange={onChangeInput} />
                <button type='submit'>Search</button> 
            </form>
            <div className="result"> {responseData && render()}</div>
        </div>
    );
}

export default App;

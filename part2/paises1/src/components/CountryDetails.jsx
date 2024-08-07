import React from 'react'
import { useEffect, useState } from 'react'
import climaService from '../services/countries'
import WeatherApp from './WeatherApp';


const CountryDetails = ({ country, unDetail }) => {

  const [clima, setClima] = useState(''); //Clima de la capital

  useEffect(() => {
    climaService
      .getClimaCapital(country.capital)
      .then(initialClima => {
        setClima(initialClima)
      })
  }, [country])

    return (
      <div>
        <h2>Detalles de {country.name.common}</h2>
        <p><b>Capital:</b> {country.capital}</p>
        <p><b>Área:</b> {country.area} km²</p>
        <p><b>Idiomas:</b></p>
        <ul>
            {Object.entries(country.languages).map(([key, value]) => (
            <li key={key}>
                {value}
            </li>
            ))}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
        <WeatherApp country={country}/>
        <button className="btn btn-secondary ml-2" onClick={() => unDetail(null)}>Cerrar</button>
 
      </div>
    );
  };
  
export default CountryDetails

import { useState, useEffect } from 'react';
import DateSelector from '../components/DateSelector';
import AsteroidList from '../components/AsteroidList';
import Spinner from '../components/Spinner';
import GlobalStyle from '../styles/globalStyles';
import NasaApi from './api/nasa';

export default function Home() {
  const [asteroids, setAsteroids] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect (() => {
    setIsLoading(true);
    NasaApi
      .browse()
      .then((res) => {
        setIsLoading(false);
        setAsteroids(res.data.near_earth_objects)
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  const getNeoData = (fromDate, toDate) => {
    setIsLoading(true);
    NasaApi
      .getByDateRange(fromDate, toDate)
      .then((res) => {
        setIsLoading(false);
        let mergedData = [].concat.apply([], Object.values(res.data.near_earth_objects));
        setAsteroids(mergedData)
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }
  return (
    <div className="container pb-10">
      <GlobalStyle/>
      <div className="flex flex-col justify-center items-center mt-6">
        <div>
          <img width="180" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"/>
        </div>
        <h1 className="text-3xl">Nasa Near Earth Objects</h1>
      </div>
      <DateSelector isLoading={isLoading} getNeoData={getNeoData}/>
      {isLoading && <Spinner />}
      {asteroids && !isLoading && <AsteroidList asteroids={asteroids}/>}
    </div>
  )
}

import React, { useEffect, useState } from 'react';
import StyledWrapper from './StyledWrapper';
import { useRouter } from 'next/router';
import NasaApi from '../../pages/api/nasa';

const Asteroid = () => {
  const asteroidId = useRouter().asPath.slice(1);
  const [asteroid, setAsteroid] = useState();
  const [orbitalData, setOrbitalData] = useState();

  useEffect(() => {
    NasaApi
      .getById(asteroidId)
      .then((res) => {
        setAsteroid(res.data)
        setOrbitalData(res.data.orbital_data)
      });
  }, [])

  if(!orbitalData) {
    return <div />;
  }

  return (
    <StyledWrapper>
      <div>
        {asteroid ? (
          <div className="container">
            <div className="header mt-10">
              <h3 className="text-3xl font-semibold">{asteroid.name}</h3>
              <div className="mt-2">
                Size: {parseFloat(asteroid.estimated_diameter.kilometers.estimated_diameter_min).toFixed(2)} - {parseFloat(asteroid.estimated_diameter.kilometers.estimated_diameter_max).toFixed(2)} km
              </div>
            </div>

            <div className="flex flex-col mt-8">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="">
                      <thead className="bg-white border-b">
                        <tr>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Property
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                            Value
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='border-b'>
                          <td className="text-left px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Orbit Id
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                            {orbitalData.orbit_id}
                          </td>
                        </tr>

                        <tr className='border-b'>
                          <td className="text-left px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Potentially hazardous
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                            {asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}
                          </td>
                        </tr>

                        <tr className='border-b'>
                          <td className="text-left px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Aphelion Distance
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                            {parseFloat(orbitalData.aphelion_distance).toFixed(2)}
                          </td>
                        </tr>

                        <tr className='border-b'>
                          <td className="text-left px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            Epoch osculation
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                            {orbitalData.epoch_osculation}
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4 text-sm text-blue-700 underline">
              <a href={asteroid.nasa_jpl_url} target="_blank">View in Nasa Website</a>
            </div>
          </div>
        ): null}
      </div>
    </StyledWrapper>
  )
}

export default Asteroid;
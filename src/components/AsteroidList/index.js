import React, {useState} from 'react';
import StyledWrapper from './StyledWrapper';
import { useRouter } from 'next/router'

const AsteroidList = ({asteroids}) => {
  const router = useRouter()

  const viewAsteroid = (asteroidId) => {
    router.push(`/${asteroidId}`);
  };

  return (
    <StyledWrapper>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                      Sl No
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                      Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                      Size (Km)
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                      Hazardous
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {asteroids && asteroids.length ? asteroids.map((asteroid, i) => {
                    return (
                      <tr className={`${i%2 ? 'bg-gray-100' : ''} border-b`} onClick={() => viewAsteroid(asteroid.id)}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {i + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {asteroid.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {parseFloat(asteroid.estimated_diameter.kilometers.estimated_diameter_min).toFixed(2)} - {parseFloat(asteroid.estimated_diameter.kilometers.estimated_diameter_max).toFixed(2)}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
                        </td>
                      </tr>
                    )
                  }) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default AsteroidList;
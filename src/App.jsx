import { useState } from 'react'

import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard';


function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>

      <h1 className='text-6xl text-center my-20 text-purple-600'>Hot Hot Coffee</h1>
      <h3>Coffees:{loadedCoffees.length}</h3>
      <div className='grid grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App

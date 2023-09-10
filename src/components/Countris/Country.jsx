import { useState } from "react";

const Country = ({country,handleVisittedCountris}) => {
    const {name ,flags, cca3,area, capital, languages} = country
    const [visited, setvisited] =useState(false)
    const handleVisited = () =>{
        setvisited(!visited)
        console.log(handleVisittedCountris)

    }
    return (
    
           <div className="border p-5 w-full bg-amber-100 rounded-md space-y-2">
           <div className= {`country ${ visited ? 'bg-red-100 ' : 'font-bold' }`} > 
           <h3 className={visited ? 'text-purple-500' : 'text-red-500'}>{name?.common} </h3> 
           <img className="w-full my-4 h-48" src={flags.png}alt="" />
           <h3 className="my-4">Cca: {cca3} </h3> 
           <h3 className="">Area: {area} </h3> 
           <h3 className="my-4">Capital: {capital} </h3>
           <h3 className="">Languages: {languages?.eng?.nep} </h3>
           <button onClick={handleVisittedCountris} className="btn btn-secondary my-4">Mark Visited</button> <br />
           <button onClick={handleVisited} className="btn btn-secondary my-4">{visited ? 'Visited' : 'Going'}</button>
           {
           
           visited ? 'I have visited this country' : 'i want to visited' 
           } 
           </div>  
           </div>  
    );
};

export default Country;
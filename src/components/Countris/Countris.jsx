import { useState } from "react";
import { useEffect } from "react";
import Country from "./Country";

const Countris = () => {
    const [countris, setcountris] = useState([])
    const[visiteCountris, setvisiteCountris]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then (data =>setcountris(data) )
    }, [])

const handleVisittedCountris = country =>{
    console.log('add this to visited country');
    console.log(country);
}

    return (
        <div>
            <h3 className="text-3xl font-bold text-center mt-5 mx-w-full">Countris: {countris.length}</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {
                countris.map(countr =><Country
                     key={countr.cca3}
                     handleVisittedCountris = {handleVisittedCountris}
                      country={countr}>

                      </Country>)
            }
            </div>

        </div>
    );
};

export default Countris;
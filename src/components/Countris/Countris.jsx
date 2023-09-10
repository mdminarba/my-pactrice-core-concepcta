import { useState } from "react";
import { useEffect } from "react";
import Country from "./Country";

const Countris = () => {
    const [countris, setcountris] = useState([])
    const[visiteCountris, setvisiteCountris]=useState([])
    const[visiteCountrisflag, setvisiteCountrisflag]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then (data =>setcountris(data) )
    }, [])

const handleVisittedCountris = country =>{
    console.log('add this to visited country');
    const newvisiteCountris = [...visiteCountris,country];
    setvisiteCountris(newvisiteCountris);
}
const handleVisittedCountrisflag = flag =>{
    const newvisiteCountrisflag = [...visiteCountrisflag,flag];
    setvisiteCountrisflag(newvisiteCountrisflag);
}

    return (
        <div>
            <h3 className="text-3xl font-bold text-center mt-5 mx-w-full">Countris: {countris.length}</h3>
            <div className="">
                <h5>countries: {visiteCountris.length}</h5>
                {
                visiteCountris.map(country =>  <li key={country.cca3}>{country.name.common}</li>)
                }
            </div>
            <div className=" w-[100px] h-14 flex gap-2">
                {
                    visiteCountrisflag.map(flag => <img src={flag}></img>)
                }
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {
                countris.map(countr =><Country
                     key={countr.cca3}
                     handleVisittedCountris = {handleVisittedCountris}
                     handleVisittedCountrisflag={handleVisittedCountrisflag}
                      country={countr}>

                      </Country>)
            }
            </div>

        </div>
    );
};

export default Countris;
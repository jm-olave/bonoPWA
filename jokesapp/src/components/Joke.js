

import {useState, useEffect} from 'react';
import {Card} from './Card';
export const Joke = () =>{
    const [joke, setJoke] = useState([]);
    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("caldo") === null) {
                setJoke([]);
            } else {
                console.log(localStorage.getItem("caldo"));
                let parser = JSON.parse(localStorage.getItem("caldo"));
                setJoke(parser.personajes);
            }
        }

            const URL = "http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=7824a774959e768a0c1683031eb43a69&hash=0d0a44b0cb2b1ca9952853b4bc96c503";
            fetch(URL).then(res=>res.json()).then(res=>{
                setJoke(res.data.results);
                const personaje = {
                    personajes : res.data.results
                }
                localStorage.setItem("caldo", JSON.stringify(personaje));
            })
        
    }, []);

return (
    <>
    <div className = "container mt-5">
         <h1> Joke </h1>
         <Card characters = {joke} />
    </div>
    </>
 );
};
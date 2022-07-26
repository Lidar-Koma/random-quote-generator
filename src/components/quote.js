import React, { useEffect, useState } from 'react'
import axios from "axios";
import useGenerateRandomColor from './useGenerateRandomColor';

function Quote() {
    const[quote, setQuotes] = useState('')
    const { color, generateColor } 
    = useGenerateRandomColor();
   
    useEffect(() => {
        //generateColor();

        fetchAdvice();
       
    }, [])
    const fetchAdvice = async() => {
        generateColor();
        await axios.get('https://api.adviceslip.com/advice')
        .then((response) =>  {
            const { advice } = response.data.slip;
  console.log(response.data.slip)
            setQuotes(advice);
        })
  
        .catch ((error) => {
            console.log(error);
        })
    }
    return (
        <div>
            <div className="card" style={{
      
        backgroundColor: "#" + color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding:"40px 40px"
      }}>
                <h1 className="heading">
                  {quote}
                </h1>
                <button className="button" onClick={fetchAdvice}>
                    <span>Give Me An Advice</span>
                </button>
            </div>
        </div>
    );
}

export default Quote;

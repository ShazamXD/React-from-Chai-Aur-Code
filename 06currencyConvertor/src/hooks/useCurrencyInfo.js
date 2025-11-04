import {useEffect, useState} from "react"

// making custom hooks 
function useCurrencyInfo(currency){
    const [data, setData] = useState({}) /* we put an empty object because if we can't get fetch data then atleast there is an empty object to run loops so code don't crash
    data will hold the data we get from api 
    and setData function is to update that data */
    useEffect( ()=>{
        fetch(`https://open.er-api.com/v6/latest/USD`) // api call
        .then((res)=>res.json()) // since with api call we get response in string in most cases so we convert them into json 
        .then((res)=> setData(res[currency]))
        /*From the parsed object, it tries to grab the property that matches the currency passed to the hook
        Updates data state with that specific value.*/
        console.log(data); // logs the current value of data from the last render 
    }, [currency] ) // here dependency is currency, means when the currency changes (inr -> usd) i want to call it again 
    console.log(data);
    return data; // This is the output of the custom hook. Whatever value you return from a custom hook is what the component that calls it will receive
}

export default useCurrencyInfo; // Makes this hook available to other files. You can import it with "import useCurrencyInfo from './useCurrencyInfo';"


/* useEffect ? “useEffect is a React hook that lets us perform side effects in a component — like fetching data, updating the DOM, or setting up event listeners.
It runs either after the component renders, or again when specific dependencies change.” “For example, if I put [count] in the dependency array, the function inside 
useEffect will run only when the value of count changes.” */

/* useState ? “useState is a React Hook that allows functional components to store and update state values. When the state 
changes, React automatically re-renders the component to reflect the updated data.” */
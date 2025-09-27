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
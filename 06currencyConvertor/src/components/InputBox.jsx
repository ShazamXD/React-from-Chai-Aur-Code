import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    
    className = "",
}) {
    const amountInputId = useId() /* React hook that creates a unique ID string each time the component is rendered
    This is especially useful when you have multiple copies of the same component (so IDs don’t clash)
    */
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            {/* Always using "bg-white p-3 rounded-lg text-sm flex" plus whatever extra CSS you pass in className */}
            <div className="w-1/2">
                <label htmlFor={amountInputId}  
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number" //This input will only allow numbers
                    placeholder="Amount" //Shows light gray text “Amount” when the input is empty.
                    disabled = {amountDisable} //If amountDisable is true, the input is disabled (you can’t type in it).
                    value = {amount} //Whatever value is stored in the variable amount will show inside the input box.
                    onChange = {(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    /*
                    Runs when the user types something.
                    e.target.value is what the user typed.
                    Number(...) converts that text into a number because we get it as string 
                    onAmountChange && onAmountChange(...) means:
                    If the function onAmountChange exists, call it and pass the new number.
                    (This avoids errors  if onAmountChange was not given as a prop).
                    */
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value = {selectCurrency}
                    onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target,value)}
                    disabled = {currencyDisable}
                >
                    
                        {currencyOption.map((currency) => (
                            <option key = {currency} value={currency}>{currency}</option> // iterating all the types of currencies available 
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
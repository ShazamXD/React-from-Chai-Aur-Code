import { useState } from 'react' 
import { InputBox } from './components'  
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)


  const currencyInfo = useCurrencyInfo(from)
  
  const options = Object.keys(useCurrencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }



   return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat gap-6"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg')`,
            }}
        >
            <div className="w-full flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <img src="https://framerusercontent.com/images/X9EHD6pwUb17NFFMCCk8VOWDnD8.jpg" 
                    alt=""
                    className='h-80 w-80'
                    />
                </div>
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault(); // to prevent default function of form submit 
                            convert()
                        }}
                    >
                        {/* FROM BOX */}
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=> setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount)=> setAmount(amount)}
                            />
                        </div>
                        {/* SWAP BUTTON */}
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        {/* TO BOX */}
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=> setTo(currency)}
                                selectCurrency={from}
                                amountDisable
                            />
                        </div>
                        {/* SUBMIT BUTTON */}
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App

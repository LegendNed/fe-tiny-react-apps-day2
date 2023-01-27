import { useState } from "react"

import Screen from "../components/Screen"
import Buttons from "../components/Buttons"

function Calculator() {
    let [equation, setEquation] = useState('2+2')

    function amendEquation(input) {
        if (equation == "Error") equation = ''

        return setEquation(equation + input)
    }

    function calculate() {
        let result;

        try {
            result = eval(equation.toString()).toString()
        } catch {
            result = "Error"
        }

        setEquation(result)
    }

    function clear(amount) {
        if (!amount) return setEquation('')

        return setEquation(equation.substr(0, equation.length - amount))
    }

    return (
        <div className="calculator">
            <Screen equation={equation} />
            <Buttons amend={amendEquation} calculate={calculate} clear={clear} />
        </div>
    )
}

export default Calculator
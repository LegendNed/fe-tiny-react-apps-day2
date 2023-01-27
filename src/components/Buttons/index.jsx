import Button from './Button'

function Buttons({ amend, calculate, clear }) {

    const ButtonList = [
        { '7': '7' }, { '8': '8' },
        { '9': '9' }, { '÷': '/' },
        { '4': '4' }, { '5': '5' },
        { '6': '6' }, { '×': '*' },
        { '1': '1' }, { '2': '2' },
        { '3': '3' }, { '-': '-' },
        { '0': '0' }, { '•': '.' },
        { '+': '+' }
    ]

    return (
        <div className="buttons">
            <Button input="→" click={() => clear(1)} />
            <div></div>
            <div></div>
            <Button input="C" click={clear} />
            {ButtonList.map(b => {
                let key = Object.keys(b)
                return <Button key={key} input={key} click={() => amend(b[key])} />
            })}
            <Button input="=" click={calculate} />
        </div>
    )
}

export default Buttons
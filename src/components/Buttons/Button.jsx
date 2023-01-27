function Button({ input, click }) {
    return (
        <button onClick={click}>{input}</button>
    )
}

export default Button
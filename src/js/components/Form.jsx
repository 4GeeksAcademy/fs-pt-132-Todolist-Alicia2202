import react, { useState } from "react";

const Form = ({ list, upDateList }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        upDateList(inputValue);
        setInputValue("");
        
    };

return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <input type="submit" hidden />
    </form>
)
}

export default Form
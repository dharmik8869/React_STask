import React, { useState } from 'react';

function Mul() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const addItem = () => {
        if (inputValue.trim() === "" || isNaN(inputValue)) {
            alert("Please enter a valid number");
            return;
        }
        setItems([...items, Number(inputValue)]);
        setInputValue("");
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const containerStyle = {
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "sans-serif",
        textAlign: "center",
    };

    const inputStyle = {
        padding: "10px",
        marginRight: "10px",
        fontSize: "16px",
    };

    const buttonStyle = {
        padding: "10px 20px",
        fontSize: "16px",
        margin: "10px",
        cursor: "pointer",
        backgroundColor: darkMode ? "#444" : "#eee",
        color: darkMode ? "#fff" : "#000",
        border: "none",
        borderRadius: "5px"
    };

    return (
        <div style={containerStyle}>
            <h1>Multiply By 5</h1>

            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter a number"
                style={inputStyle}
            />
            <button style={buttonStyle} onClick={addItem}>Add Item</button>

            <div className="output">
                {items.map((item, index) => (
                    <h2 key={index}>{item} × 5 = {item * 5}</h2>
                ))}
            </div>

            <button style={buttonStyle} onClick={toggleDarkMode}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}

export default Mul;

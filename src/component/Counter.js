import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            darkMode: false
        };
    }

    toggleDarkMode = () => {
        this.setState((prevState) => ({
            darkMode: !prevState.darkMode
        }));
    };

    render() {
        const { count, darkMode } = this.state;

        const containerStyle = {
            backgroundColor: darkMode ? "#333" : "#fff",
            color: darkMode ? "#fff" : "#000",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif"
        };

        const buttonStyle = {
            margin: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            borderRadius: "5px",
            backgroundColor: darkMode ? "#555" : "#eee",
            color: darkMode ? "#fff" : "#000"
        };

        const toggleButtonStyle = {
            ...buttonStyle,
            backgroundColor: darkMode ? "#222" : "#ccc"
        };

        return (
            <div style={containerStyle}>
                <h1>Counter App</h1>
                <h2>{count}</h2>
                <div>
                    <button style={buttonStyle} onClick={() => this.setState({ count: count + 1 })}>Increment</button>
                    <button style={buttonStyle} onClick={() => this.setState({ count: count - 1 })}>Decrement</button>
                </div>
                <button style={toggleButtonStyle} onClick={this.toggleDarkMode}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        );
    }
}

export default Counter;

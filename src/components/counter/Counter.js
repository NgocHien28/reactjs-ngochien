import React from "react";

export default function Counter(props) {
    const handleClick = () => {
        console.log("clicked");
    };
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            {props.children}
            {props.name} - {props.age}
        </div>
    );
}

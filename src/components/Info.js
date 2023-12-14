import React from "react";
import "../css/Info.css";

export default function Info(props) {
    const { name, maSV, lop } = props;
    return (
        <div>
            <p>Ten: {name}</p>
            <p>Ma sinh vien:{maSV}</p>
            <p>Lop: {lop}</p>
        </div>
    );
}

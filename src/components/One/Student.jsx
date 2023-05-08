import React from "react";

const Student = ({ student }) => {
    let { name, live } = student;
    return (
        <li>
            <p>name : {name}</p>
            <p>live : {live}</p>
        </li>
    );
};

export default Student;

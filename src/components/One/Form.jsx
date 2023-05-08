import React, { useState } from "react";

const Form = ({ addStudent }) => {
    const [name, setName] = useState("");
    const [live, setLive] = useState("");

    const data = {
        name,
        live,
    };

    const StudentSubmit = (e) => {
        e.preventDefault();
        addStudent(data);
        setName("");
        setLive("");
    };

    return (
        <>
            <form onSubmit={StudentSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="live"
                    value={live}
                    onChange={(e) => setLive(e.target.value)}
                />
                <button type="submit">Add New Member</button>
            </form>
        </>
    );
};

export default Form;

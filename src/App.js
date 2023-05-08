import { useState } from "react";
import Form from "./components/One/Form";
import Student from "./components/One/Student";

function App() {
    const [students, setStudents] = useState([]);

    const addStudent = (data) => {
        let { name, live } = data;
        setStudents((prevState) => [...prevState, { name, live }]);
    };

    let contentSection = <li>No Members Added!</li>;

    if (students.length > 0) {
        contentSection = students.map((student, index) => (
            <Student key={index} student={student} />
        ));
    }

    return (
        <div className="App">
            <ol>{contentSection}</ol>
            <Form addStudent={addStudent} />
        </div>
    );
}

export default App;

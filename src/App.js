import { useState } from "react";
import Form from "./components/One/Form";
import Student from "./components/One/Student";

function App() {
    const [students, setStudents] = useState([]);

    const addStudent = (data) => {
        let { name, live } = data;
        setStudents((prevState) => [...prevState, { name, live }]);
    };

    return (
        <div className="App">
            <ol>
                {students.map((student, index) => (
                    <Student key={index} student={student} />
                ))}
            </ol>
            <Form addStudent={addStudent} />
        </div>
    );
}

export default App;

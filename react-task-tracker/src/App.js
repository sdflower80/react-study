import {useState} from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

function App() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'task1',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'task2',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'task3',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
    ])

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) =>
            task.id !== id
        ))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id ?
                {...task, reminder: !task.reminder} : task))
    }

    return (
        <div className="container">
            <Header/>
            <AddTask />
            {tasks.length > 0 ?
                (<Tasks tasks={ tasks }
                        onDelete={deleteTask}
                        onToggle={toggleReminder}
                />)
                : ('No Tasks To Show')}
        </div>
    );
}

export default App;

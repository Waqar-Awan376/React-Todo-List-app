import React from 'react';
import ReactDom from 'react-dom';

class toDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myCurTask: '',
            taskId: 0,
            myTasks: []
        };
    }
    noteTask = (event) => {
        let myTask = String(event.target.value);
        this.setState({ myCurTask: myTask });
    }
    addTaskToList = () => {
        let inputField = document.getElementById('task-input-field');
        if (this.state.myCurTask === '' && inputField.value === '') {
            window.alert("No task written to be added in your task list");
            return;
        }
        if (this.state.myCurTask === '') {
            window.alert("No task written to be added in your task list");
            return;
        }
        inputField.value = "";
        let myObj = {};
        myObj["key"] = this.state.taskId;
        myObj["value"] = this.state.myCurTask;
        myObj["completed"] = false;
        this.state.myTasks.push(myObj);
        this.setState({ taskId: this.state.taskId + 1 });
        this.setState({ myCurTask: "" });
    }
    resetMyTaskList = () => {
        if (this.state.myTasks.length == 0) {
            window.alert("No task was added in the list");
            return;
        }
        let confirmation = window.prompt("Are you sure you want to reset the list?(Y/N)")
        if (confirmation == 'y' || confirmation == 'Y') {
            this.setState({ myTasks: [] });
        }

    }
    markAsComplete = (id) => {
        this.setState({
            myTasks: this.state.myTasks.map(tasks => {
                if (tasks['key'] == id) {
                    if (tasks['completed'] == true) {
                        tasks['completed'] = false;
                    }
                    else {
                        tasks['completed'] = true;
                    }
                }
                return tasks;
            })
        })
    }
    getStyle = (task) => {
        if (task['completed']) {
            return (
                {
                    textDecoration: 'line-through'
                }
            )
        }
        else {
            return (
                {
                    textDecoration: 'none'
                }
            )
        }
    }
    removeTask = (id) => {
        this.setState({
            myTasks: this.state.myTasks.map(tasks => {
                if (tasks['key'] == id) {

                    return tasks;
                }
            })
        })
    }
    render() {
        let myTaskList = this.state.myTasks;
        return (
            <div>
                <div style={itemStyle}>
                    <h1>TO DO LIST</h1>
                    <button className="btn btn-danger p-2 m-2" onClick={this.resetMyTaskList}>Reset Task List</button>
                </div>

                <div className="input-group mb-5">
                    <input type="text" className="form-control" placeholder="Write Your Task Here..." aria-label="Write Your Task Here..." aria-describedby="button-addon2" onChange={this.noteTask} id="task-input-field" />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary" onClick={this.addTaskToList}>Add task</button>
                    </div>
                </div>

                <div>
                    {this.state.myTasks.map(myTasks =>
                        <div>
                            <h2 className="text-center" key={-1 * (myTasks["key"])}>TASK NUMBER {myTasks['key'] + 1}</h2>
                            <div key={myTasks["key"]} className="input-group-text mb-3"
                                style={this.getStyle(myTasks)}>
                                <input type="checkbox" aria-label="Checkbox for following text input" onChange={this.markAsComplete.bind(this, myTasks['key'])} />&nbsp;&nbsp;
                                <div>
                                    {myTasks["value"]}
                                </div>
                            </div>
                            <hr />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
const itemStyle = {
    backgroundColor: '#007baa',
    color: 'white',
    textDecoration: 'underline',
    marginBottom: '20px',
    padding: '10px',
    textAlign: 'center'
}


export default toDoList;
import React, { Fragment, useState } from "react";
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Employees from "./Employees";
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'


const Home = () => {

    const [data, setData] = useState([...Employees]);

    let history = useNavigate();

    //#Edit Operation
    const handleEdit = (id, name, date, age) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('date', date);
        localStorage.setItem('Age', age);
        localStorage.setItem('Id', id);
    }

    // #DELETE Operation
    const handleDelete = (id) => {
        let index = Employees.map((e) => {
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);
        history('/');
    }

    // Sort Operation
    const sorting = (col) => {
        const sorted = [...data].sort((a, b) =>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        setData(sorted);
    }



    return (
        <Fragment>
            <div className="container text-center">
                <h1 className="m-5">To-Do List</h1>
                <div className="filter">
                    <div className="dropdown filter-dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter data
                        </button>
                        <div className="dropdown-menu dropdownMenu" style={{ width: '20%' }} aria-labelledby="dropdownMenuButton">
                            <span className="dropdown-item " onClick={() => sorting("name")}>By Name</span>
                            <span className="dropdown-item " onClick={() => sorting("age")}>By Age</span>
                        </div>
                    </div>
                </div>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Creation Date
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.length > 0
                                ?
                                data.map((item,index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.date}
                                            </td>
                                            <td>
                                                {item.age}
                                            </td>
                                            <td>
                                                <Link to={`/edit`}>
                                                    <Button variant="success" onClick={() => handleEdit(item.id, item.name, item.date, item.age)}>Edit</Button>
                                                </Link>

                                                <Button className="mx-2" variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data available"

                        }

                    </tbody>

                </Table>
                <br />
                <Link className="d-grid gap-2" to={'/create'}>
                    <Button size="lg">Add Users</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;
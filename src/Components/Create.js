import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';

// Creating Users
const Create = () =>{
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const[date, setDate] = useState();
    

    let history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a = name;
        let b = age;
        let c = date;

        //Push the users to array (Employees.js)
        Employees.push({id: uniqueId, name: a, date: c, age: b});
        history('/');
    }

    return (
    <div className="container text-center  p-5">
        <h1 className="m-5 ">Create To-do</h1>
            <form className="row g-3 align-items-center" onSubmit={(e)=>handleSubmit(e)}>
                <div className="mb-3">
                    <input className="w-100" id="demo" type="text" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)} required></input>
                </div>
                <div className="mb-3" >
                    <input className="w-100"  type="date" placeholder="Enter date" onChange={(e)=> setDate(e.target.value)} required></input>
                </div>
                <div className="mb-3">
                    <input className="w-100" type="number" placeholder="Enter Age" onChange={(e)=> setAge(e.target.value)} required></input>
                </div>
                <div className="mb-3">
                <button className="btn btn-primary btn-lg btn-block mt-5" >Create</button>
                </div>
            </form>
        </div>
)
}
export default Create;
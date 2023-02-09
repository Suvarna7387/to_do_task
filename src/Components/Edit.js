import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';

function Edit(){
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();
    
    var index = Employees.map((e) => {
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) =>{
        e.preventDefault();

        let a = Employees[index];
        a.name = name;
        a.date= date;
        a.age = age;
        
        history('/');
    }
    uuid();
    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setDate(localStorage.getItem('date'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))
    },[]);  

    return(
        <div className="container text-center my-5 p-5">
            <h1 className="m-5">Edit Users</h1>
            <form className="row g-3 align-items-center">
                <div className="mb-3">
                    <input className="w-25" id="demo" type="text" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)}  required></input>
                </div>
                <div className="mb-3" >
                    <input className="w-25" type="text" placeholder="Enter date" value={date} onChange={(e)=> setDate(e.target.value)} required></input>
                </div>
                <div className="mb-3">
                    <input className="w-25" type="number" placeholder="Enter Age" value={age} onChange={(e)=> setAge(e.target.value)} required></input>
                </div>
                <div className="mb-3">
                <button className="button bg-primary w-25" onClick={handleSubmit}>Update User</button>
                </div>
            </form>
        </div>
    )
}
export default Edit;
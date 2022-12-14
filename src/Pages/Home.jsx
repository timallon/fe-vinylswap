import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth.context';
import { Link } from "react-router-dom";
import '../App.css'

const { REACT_APP_MY_ENV } = process.env;

function Home() {
    const value = useContext(AuthContext)
    const [records, setRecords] = useState([]);
    const fetchRecords = async() => {
// Fetch all vinyl records on the database:
    const response = await fetch(`${REACT_APP_MY_ENV}/records`)
    const records = await response.json();
    console.log(records)
    setRecords(records)
};
useEffect( () => {
    fetchRecords()
}, [] );
    if (1 === 1) {
    return (
        
        <div className="page">
        <h1>VinylSwap Inventory</h1>
      {records.slice(0).reverse().map(record => 
      <div className="box" key={record._id}>


        <h1 >{record.title } by {record.artist}</h1>
        <Link to={`/records/${record._id}`}>
    <h3>More details</h3>
  </Link>
        <div className="image">
        <img src={record.image} alt="Record Cover"/>
        </div>
      </div>
      )}</div>

    )} else {
        return (
            <div>
                <h1>
                    Go away!
                </h1>
            </div>
)}}

export default Home;

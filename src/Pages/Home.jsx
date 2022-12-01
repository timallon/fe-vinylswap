import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth.context';
import { Link } from "react-router-dom";
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
        
        <div>
        <h1>VinylSwap Inventory</h1>
      {records.map(record => 
      <div key={record._id}>




        <h1 >{record.title } ({record.yearReleased.substring(0,4)}) by {record.artist}</h1>
        <Link to={`/records/${record._id}`}>
    <h3>More details</h3>
  </Link>
        <img src={record.image} alt="Record Cover"/>
        <p></p>
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
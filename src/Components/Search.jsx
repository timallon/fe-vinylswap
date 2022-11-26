import { useEffect, useState } from 'react'

function Search() {
    const [records, setRecords] = useState([]);
    const fetchRecords = async() => {
// Fetches all vinyl records on the database:
    const response = await fetch("http://localhost:5005/records")
    const records = await response.json()
    setRecords(records)
};
useEffect( () => {
    fetchRecords()
}, [] );
    return (
        
        <div>
        <h1>VinylSwap Inventory</h1>
      {records.map(record => 
      <div key={record._id}>
        <h1 >{record.title } ({record.yearReleased.substring(0,4)}) by {record.artist}</h1>
        <p>Label: {record.label}</p>
        <p>Genre: {record.genre}</p>
        <p>Picture: {record.image}</p>
        <p></p>
      </div>
      )}</div>

    );
}

export default Search;

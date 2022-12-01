import axios from 'axios';
import { useEffect, useState } from 'react'

import { Link, useParams } from "react-router-dom"; // <== IMPORT 
const { REACT_APP_MY_ENV } = process.env;


function Record(props) {
  const [record, setRecord] = useState(null);
  // Get the URL parameter `:projectId` 
  const { recordId } = useParams();            // <== ADD
  console.log("the o0ne", record)
  console.log(recordId)


  // Helper function that makes a GET request to the API
  // and retrieves the project by id
  const getRecord = () => {          //  <== ADD A NEW FUNCTION
    axios
      .get(`${REACT_APP_MY_ENV}/records/${recordId}`)
      .then((response) => {
        const oneRecord = response.data;
        setRecord(oneRecord);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {                   // <== ADD AN EFFECT
    getRecord();
  }, []);



  return (
    <div className="Record">
      {record && (
        <>
          <p>Artist: {record.artist}</p>
          <p>Title: {record.title}</p>
          <p>Originally Released: {record.yearReleased}</p>
          <p>Record Label: {record.label}</p>
          <p>Genre: {record.genre}</p>
          <img src={record.image} alt="Record Cover" />
        </>
      )}
          <form>
            <textarea rows="3" type="text" name="description" placeholder="Add a comment." />
            <button type="submit">Submit</button>
          </form>

          {record.comment.map((commentArray) => {
            return (
              <div>
                <h3>{commentArray.description}</h3>
              </div>
            )
          })}

      {record &&
        (
          <li className="Record card" key={record._id}>
            <h3>{record.title}</h3>
            <h4>Artist:</h4>
            <p>{record.artist}</p>
          </li>
        )}

      <Link to="/records">
        <button>Back to records</button>
      </Link>

      {/*    ADD    */}
      <Link to={`/records/${recordId}/update`}>
        <button>Edit Record</button>
      </Link>

    </div>
  );
}


export default Record;
import axios from 'axios';
import { useEffect, useState } from 'react'

import { Link, useParams, useNavigate } from "react-router-dom"; // <== IMPORT 
const { REACT_APP_MY_ENV } = process.env;


function Record(props) {
  const [record, setRecord] = useState(null);
  // Get the URL parameter `:projectId` 
  const { recordId } = useParams();            // <== ADD
  const [test, setTest] = useState(false)



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
  }, [test]);

  //post new comment description:
  const [description, setDescription] = useState("");
  const navigate = useNavigate()

  async function handleCommentSubmit(event) {
    event.preventDefault();
    const theNewComment = {
      description: description
    }
    let newComment = await axios.post(`${REACT_APP_MY_ENV}/records/${recordId}`, theNewComment)
    navigate(`/records/${recordId}`)
    setDescription("")
    setTest(!test)
    console.log('new comment:', newComment.data)
  }

  return (
    <div className="Record">
      {record && (
        <div className='details'>
          <p>Artist: {record.artist}</p>
          <p>Title: {record.title}</p>
          <p>Originally Released: {record.yearReleased}</p>
          <p>Record Label: {record.label}</p>
          <p>Genre: {record.genre}</p>
          <img className='detailsImage' src={record.image} alt="Record Cover" />
          {record.comment.map((comment) => {
            return (

              <div className="comment" key={comment._id}>
                <h5 className='commentDescription'>Posted: {comment.createdAt.slice(0,10)}</h5>
                <p className='commentDescription'>{comment.description}</p>
              </div>
            )
          })}
        </div>
      )}
      <form onSubmit={handleCommentSubmit}>
        {/*  <textarea rows="3" type="text" name="description" placeholder="Add a comment." /> */}
        <input name="description" value={description} placeholder="Add a comment" onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      {/* {record &&
        (
          <li className="Record card" key={record._id}>
            <h3>{record.title}</h3>
            <h4>Artist:</h4>
            <p>{record.artist}</p>
          </li>
        )} */}

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
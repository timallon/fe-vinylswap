import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import '../App.css'
 
const { REACT_APP_MY_ENV } = process.env;
 
function EditRecord(props) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [yearReleased, setYearReleased] = useState("");
  const [label, setLabel] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const { recordId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {                                  // <== ADD
    axios
      .get(`${REACT_APP_MY_ENV}/records/${recordId}`)
      .then((response) => {
        /* 
          We update the state with the project data coming from the response.
          This way we set inputs to show the actual title and description of the project
        */
        const oneRecord = response.data;
        setTitle(oneRecord.title);
        setArtist(oneRecord.artist);
        setYearReleased(oneRecord.yearReleased);
        setLabel(oneRecord.label);
        setGenre(oneRecord.genre);
        setImage(oneRecord.image)
      })
      .catch((error) => console.log(error));
    
  }, [recordId]);

  const handleFormSubmit = (e) => {                     // <== ADD
    e.preventDefault();
    // Create an object representing the body of the PUT request
    //const requestBody = { title, artist, yearReleased, label, genre, image };
    const formData = new FormData();
    const theImage = e.target.imageUrl.files[0];
    formData.append("imageUrl", theImage);
    formData.append("title", title );
    formData.append("artist", artist );
    formData.append("yearReleased", yearReleased );
    formData.append("label", label );
    formData.append("genre", genre );
 
    // Make a PUT request to update the project
    axios
      .put(`${REACT_APP_MY_ENV}/records/${recordId}/update`, formData)
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate(`/records/${recordId}`)
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
    .delete(`${REACT_APP_MY_ENV}/records/${recordId}/delete`)
    navigate(`/records`)
  }
  
  return (
    <div className="editPage">
      <h3>Edit the Record</h3>
 
      <form className="updateForm" onSubmit={handleFormSubmit}>
        <div className="updateForm">
          
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>
        
        <label>Artist:</label>
        <textarea
          name="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <br></br>

        <label>Year Released:</label>
        <textarea
          name="yearReleased"
          value={yearReleased}
          onChange={(e) => setYearReleased(e.target.value)}
        />
        <br></br>

        <label>Record Label:</label>
        <textarea
          name="label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <br></br>

        <label>Genre:</label>
        <textarea
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br></br>

        <label>Image:</label>
        <input type="file"  name="imageUrl" accept="image/jpg" />
        <br></br>
        
        <input type="submit" value="Submit" />
        
      
        </div>
        <br></br>
      </form>
      <button onClick={handleDelete}>Delete this record</button>
    </div>
  );
}
 
export default EditRecord;
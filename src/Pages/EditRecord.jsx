import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
 
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
    const image = e.target.imageUrl.files[0];
    formData.append("imageUrl", image);
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
    navigate(`/records/browse`)
  }
  
  return (
    <div className="EditPage">
      <h3>Edit the Record</h3>
 
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Artist:</label>
        <textarea
          name="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />

        <label>Year Released:</label>
        <textarea
          name="yearReleased"
          value={yearReleased}
          onChange={(e) => setYearReleased(e.target.value)}
        />

        <label>Record Label:</label>
        <textarea
          name="label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />

        <label>Genre:</label>
        <textarea
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <label>Image:</label>
        <input type="file" name="imageUrl" accept="image/jpg" />
        
        <input type="submit" value="Submit" />
      </form>
      <button onClick={handleDelete}>Delete this record</button>
    </div>
  );
}
 
export default EditRecord;
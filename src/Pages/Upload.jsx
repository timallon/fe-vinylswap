import axios from "axios";
import { useState } from "react";
import {useNavigate, useParams } from "react-router-dom"

function Upload() {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [yearReleased, setYearReleased] = useState("");
    const [label, setLabel] = useState("");
    const [genre, setGenre] = useState("");
    const { REACT_APP_MY_ENV } = process.env; 
    const { recordId } = useParams();
    const navigate = useNavigate()
    

    async function handleSubmit(event) {
        event.preventDefault()
        const storedToken = localStorage.getItem('authToken');
        const formData = new FormData();
        const image = event.target.imageUrl.files[0];
        formData.append("imageUrl", image);
        formData.append("title", title );
        formData.append("artist", artist );
        formData.append("yearReleased", yearReleased );
        formData.append("label", label );
        formData.append("genre", genre );
        let newTitle = await axios.post(`${REACT_APP_MY_ENV}/records/upload`, formData, { headers: { Authorization: `Bearer ${storedToken}`} })
        navigate(`/records/browse`)        

        console.log('new title:', newTitle.data)
        
        


    }
    return (
        <div>
            <h1>Browse</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="file" name="imageUrl" accept="image/jpg" />
                <h5>Title</h5>
                <input onChange={ (e) => {setTitle(e.target.value)} } type="text" name="title" value={title}/>
                <h5>Artist</h5>
                <input onChange={ (e) => {setArtist(e.target.value)} } type="text" name="artist" value={artist}/>
                <h5>Release Year</h5>
                <input onChange={ (e) => {setYearReleased(e.target.value)} } type="text" name="yearReleased" value={yearReleased}/>
                <h5>Record Label</h5>
                <input onChange={ (e) => {setLabel(e.target.value)} } type="text" name="label" value={label}/>
                <h5>Genre</h5>
                <input onChange={ (e) => {setGenre(e.target.value)} } type="text" name="genre" value={genre}/>
                <button type="submit">Submit</button> 
            </form>
        </div>
)};
export default Upload;





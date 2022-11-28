import axios from "axios";
import { useState } from "react";

function Upload() {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [yearReleased, setYearReleased] = useState("");
    const [genre, setGenre] = useState("");
    

    async function handleSubmit(event) {
        const formData = new FormData();
        const image = event.target.imageUrl.files[0];
        formData.append("imageUrl", image);
        formData.append("title", title );
        formData.append("artist", artist );
        formData.append("yearReleased", yearReleased );
        formData.append("genre", genre );
        let newTitle = await axios.post("http://localhost:5005/records/upload", formData)
        

        console.log('new title:', newTitle.data)
        

 /*           const response = await fetch ("http://localhost:5005/records/upload", {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: {formData},
                
            })
            const newImage = await response.json()
            */


    }
    return (
        <div>
            <h1>Hi josh</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="file" name="imageUrl" accept="image/jpg" />
                <h5>Title</h5>
                <input onChange={ (e) => {setTitle(e.target.value)} } type="text" name="title" value={title}/>
                <h5>Artist</h5>
                <input onChange={ (e) => {setArtist(e.target.value)} } type="text" name="artist" value={artist}/>
                <h5>Release Year</h5>
                <input onChange={ (e) => {setYearReleased(e.target.value)} } type="text" name="yearReleased" value={yearReleased}/>
                <h5>Genre</h5>
                <input onChange={ (e) => {setGenre(e.target.value)} } type="text" name="genre" value={genre}/>
                <button type="submit">Submit</button> 
            </form>
        </div>
)};
export default Upload;



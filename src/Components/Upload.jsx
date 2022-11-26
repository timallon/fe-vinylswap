import axios from "axios";

function Upload() {
    async function handleSubmit(event) {
        const image = event.target.imageUrl.files[0];
        const formData = new FormData();
        formData.append("imageUrl", image)
        let newImage = await axios.post("http://localhost:5005/records/upload", formData)

 /*           const response = await fetch ("http://localhost:5005/auth/upload", {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: {formData},
                
            })
            const newImage = await response.json()
            */
            console.log(newImage.data)


    }
    return (
        <div>
            <h1>Vinyl upload page</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="file" name="imageUrl" accept="image/jpg" />
                <input type="" name="" accept="image/jpg" />
                <button type="submit">Submit</button> 
            </form>
        </div>
)};
export default Upload;



function Upload() {
    return (
        <div>
            <form method="POST" action="/upload" enctype="multipart/form-data">
                <input type="file" name="imageUrl" accept="image/png, image/jpg" />
                <button type="submit">Submit</button> 
            </form>
        </div>
)};
export default Upload;
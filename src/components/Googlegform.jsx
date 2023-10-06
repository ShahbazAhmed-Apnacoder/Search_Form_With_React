
import "../styles/index.css";



// Making a menus function

function Googleform() {
    return (

        <div className='googleform'>

            <div className="row1">
                <ul>
                    <li><a href="">Gmail</a></li>
                    <li><a href="">Images</a></li>
                </ul>
                <img className="idImage" src='https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg' alt="coding" />
            </div>

            <div className="row2">
                <img className="google_image" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt="google image" />

            </div>
            <div className="row3">
                <input type="text" name="input_Query" className="inputQuestion"  placeholder="|"/>

                <img className="image_search" src="data:image/png;base64,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" alt="search" />

                <img className="image_voice" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0f4eed26719057.5635a060dc9e1.gif" alt="voice" />
                <img className="image_camera" src="https://static.vecteezy.com/system/resources/thumbnails/006/998/431/small/photo-camera-icons-photo-camera-icon-design-illustration-photo-camera-simple-sign-photo-camera-image-vector.jpg" alt="camera" />
            </div>


            <div className="buttons">

                <button class="btn">Google Search</button>
                <button class="btn">I,m Feeling Lucky</button>
               
            </div>

        </div>

    );

};

export default Googleform;
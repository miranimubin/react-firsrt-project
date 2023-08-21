import "./sectiontwo.css";
import pic1 from "../../asseds/images/stripe.png"
import pic2 from "../../asseds/images/spotify.png"
import pic3 from "../../asseds/images/microsoft.png"
import pic4 from "../../asseds/images/dropbox.png"
import pic5 from "../../asseds/images/behance.png"
const secTwo = () => {
    return(
        <div>
            <div className="container secTwo p-5">
               <div className="row px-5"> 
               <div className="col-md-1"></div>
                <div className="col-md-2">
                <img src={pic1} alt="" className="img-fluid" />
                </div>
                <div className="col-md-2">
                <img src={pic2} alt="" className="img-fluid" />
                </div>
                <div className="col-md-2">
                <img src={pic3} alt="" className="img-fluid" />
                </div>
                <div className="col-md-2">
                <img src={pic4} alt="" className="img-fluid" />
                </div>
                <div className="col-md-2">
                <img src={pic5} alt="" className="img-fluid" />
                </div>
                <div className="col-md-1"></div>
                </div>
            </div>

        </div>

    )
}

export default secTwo;
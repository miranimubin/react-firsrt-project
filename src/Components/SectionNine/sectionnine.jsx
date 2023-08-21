import "./sectionnine.css";
import pic from "../../asseds/images/Rectangle 9.png"
import pic1 from "../../asseds/images/Rectangle 10.png"
import pic2 from "../../asseds/images/Rectangle 11.png"
import pic3 from "../../asseds/images/Rectangle 12.png"
const secNine = () => {
    return(
        <div>
            <div className="container">
            <div className="row px-4">
                
                <div className="col-md-3  ">
                   <img src={pic} alt="" className="pic-size" />
                   <p>Business</p>
                   <h6>Work rules</h6>
                </div>

                <div className="col-md-3  mt-4">
                   <img src={pic1} alt="" className="pic-size" />
                   <p>Business</p>
                   <h6>Work rules</h6>
                </div>

                <div className="col-md-3  mt-5">
                   <img src={pic2} alt="" className="pic-size" />
                   <p>Business</p>
                   <h6>Work rules</h6>
                </div>

                <div className="col-md-3  mt-4">
                   <img src={pic3} alt="" className="pic1-size" />
                   <p>Business</p>
                   <h6>Work rules</h6>
                </div>

            
            </div>
            </div>
        </div>
    )
}

export default secNine
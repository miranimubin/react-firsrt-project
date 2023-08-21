import "./sectiontwelve.css"
import pic1 from "../../asseds/images/girl.png"
import pic2 from "../../asseds/images/women.png"
import pic3 from "../../asseds/images/laptop.png"
const secTwelve = () => {
    return(
        <div>
            <div className="container">
                <div className="row px-5 mt-5">
                    <span>Our Blog</span>
                    <h2>Check <span className="text-color">the News </span></h2>
                </div>

                <div className="row px-5 mt-5">
                    <div className="col-md-4">
                    <img src={pic1} alt="" className="img-fluid img-set" />
                    <h6  className="mt-3">The Best Fonts for Modern <br /> Design</h6>
                    <p>By Admin - January 25, 2021</p>
                    <p>A leisurely start as not expected at our  next campsite....</p>
                    </div>

                    <div className="col-md-4">
                    <img src={pic2} alt="" className="img-fluid img-set" />
                    <h6  className="mt-3">Identity Design for a New Crusader</h6>
                    <p>By Admin - January 25, 2021</p>
                    <p>There is always one constant about international travel...</p>
                    </div>


                    <div className="col-md-4">
                    <img src={pic3} alt="" className="img-fluid img-set" />
                    <h6 className="mt-3">The Best Fonts for Modern Design</h6>
                    <p>By Admin - January 25, 2021</p>
                    <p>Just for once we were trying to forget Covid . We were out for the morning...</p>
                    </div>


                </div>
           
           
           
            </div>
        </div>
    )
}

export default secTwelve;
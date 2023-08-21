import "./sectioneleven.css";
import pic1 from "../../asseds/images/Rectangle 3985.png"
import pic2 from "../../asseds/images/Rectangle 3982.png"
import pic3 from "../../asseds/images/Rectangle 3983.png"
import pic4 from "../../asseds/images/Rectangle 3984.png"
import pic5 from "../../asseds/images/double arrow.png"
const secEleven = () => {
    return(
        <div>
            <div className="container">
                <div className="row mt-4 px-5">
                  <span>Testimonial</span>
                  <h2>Our <span className="text-color">Patients</span> </h2>
                </div>

                <div className="row px-5">
                <div className="col-md-6">
                    <img src={pic1} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 mt-3">
                    <h5>
                    Labores placerat salutandi nam ea, <br /> id qui eligendi ex adipiscing sei <br /> disputationi.
                     Iuvaret constituam id <br /> his, epicuri evertitur quo in, sint 
                    </h5>
                    <h6 className="mt-5">Joe Root</h6>
                    <p>Happy Patient</p>
                    <img src={pic2} alt="" className="p-1" />
                    <img src={pic3} alt=""  className="p-1" />
                    <img src={pic4} alt=""  className="p-1" />
                    <br />
                    <img src={pic5} alt="" />
                </div>
                </div>

            </div>
        </div>
    )
}

export default secEleven
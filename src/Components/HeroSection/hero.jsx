import "./hero.css";
import logo from "../../asseds/images/hero-logo.svg"
import pic1 from "../../asseds/images/men-img.png"
import pic2 from "../../asseds/images/toggle.PNG"

const Hero = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 Josefin-Sans-family">
                        <img src={logo} alt="" className="img-fluid" />
                        <div className="heading">
                            <h1 className="heading-size">We Bring</h1>
                            <h1 className="customer-css heading-size">Customers</h1>
                            <p className="para">
                                Et ullum iisque conclusionemque eam, mel ad erat cum accumsan noluisse, nostrum accumsan movet salutandi.
                                Fugit expetenda interesset no, probo eloquentiam mei eu.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="position-relative">
                            <img src={pic1} alt="" className="img-fluid" />
                        
                        <div className="position-toggle top-0 ">
                            <img src={pic2} alt="" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
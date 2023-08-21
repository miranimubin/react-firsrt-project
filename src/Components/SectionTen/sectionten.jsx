import "./sectionten.css"
import pic1 from "../../asseds/images/Rectangle 13.png"
import pic2 from "../../asseds/images/calendar.png"
import pic3 from "../../asseds/images/user.png"
import pic4 from "../../asseds/images/chat.png"
import pic5 from "../../asseds/images/Rectangle 14.png"
import pic6 from "../../asseds/images/Rectangle 15.png"
const secTen = () => {
    return(
        <div>
            <div className="container">
            <div className="row p-5 mt-5">
                <div className="col-md-6">
                    <h1>
                    Meet our team of <br /> <span className="text-color">Creatives</span>
                    </h1>
                   
                </div>
                <div className="col-md-6 mt-3">
                <p>
                    Et ullum iisque conclusionemque eam, mel ad erat cum <br /> accumsan ei noluisse, nostrum accumsan salutandi eam cu.
                    </p>
                </div>
            </div>

            <div className="row  px-5">
                <div className="col-md-4">
                    <img src={pic1} alt="" className="img-set" />
                   
                    <div className="d-flex mt-3">
                        
                        <div>
                            <h6>Martin Guptill</h6>
                            <p>Senior at Business</p>
                        </div>

                        <div className="px-4 mt-4 ">
                            <img src={pic2} alt="" />
                            <img src={pic3} alt="" />
                            <img src={pic4} alt="" />
                        </div>

                    </div>
                </div>

                <div className="col-md-4">
                    <img src={pic5} alt="" className="img-set" />
                   
                    <div className="d-flex mt-3">
                        
                        <div>
                        <h6>Martin Guptill</h6>
                            <p>Senior at Business</p>
                        </div>

                        <div className="px-4 mt-4 ">
                            <img src={pic2} alt="" />
                            <img src={pic3} alt="" />
                            <img src={pic4} alt="" />
                        </div>

                    </div>
                </div>

                <div className="col-md-4">
                    <img src={pic6} alt="" className="img-set" />
                   
                    <div className="d-flex mt-3">
                        
                        <div>
                        <h6>Martin Guptill</h6>
                            <p>Senior at Business</p>
                        </div>

                        <div className="px-4 mt-4 ">
                            <img src={pic2} alt="" />
                            <img src={pic3} alt="" />
                            <img src={pic4} alt="" />
                        </div>

                    </div>
                </div>


            </div>


            </div>
        </div>
    )
}

export default secTen;
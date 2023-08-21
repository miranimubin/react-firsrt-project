import "./sectionthree.css";
import pic1 from "../../asseds/images/image 10.png"
import pic2 from "../../asseds/images/arrow.png"
import pic3 from "../../asseds/images/arrow.png"
import pic4 from "../../asseds/images/arrow.png"
const secThree = () => {
    return (
        <div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <img src={pic1} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="Josefin-Sans-family">
                            Build Your Social <br /> <span className="marketing-color">Marketing</span> With Us
                        </h1>
                        <p className="Inter-family">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            All the Lorem Ipsum generators on the Internet tend to repeat
                        </p>

                        <div className="d-flex Josefin-Sans-family">
                            <div>
                                <img src={pic2} alt="" className="img-fluid" />
                            </div>
                            <div>
                                <p>Social Media Marketing</p>
                            </div>
                        </div>

                        <div className="d-flex Josefin-Sans-family">
                            <div>
                                <img src={pic3} alt="" className="img-fluid" />
                            </div>
                            <div>
                                <p className="">Growth Business Development</p>
                            </div>
                        </div>

                        <div className="d-flex Josefin-Sans-family">
                            <div>
                                <img src={pic4} alt="" className="img-fluid" />
                            </div>
                            <div>
                                <p className="">Market Research & Content Marketing</p>
                            </div>
                        </div>
                        <button class="bg-color Josefin-Sans-family">Learn More</button>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default secThree
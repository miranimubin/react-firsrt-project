import bgimg from "../../asseds/images/Rectangle 8.png"
import videologo from "../../asseds/images/Group 696.png"
const secSeven = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="position-relative">
                            <img src={bgimg} alt="" className="img-fluid" />
                            <div className="position-absolute top-50 start-50 translate-middle">
                                <img src={videologo} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default secSeven;
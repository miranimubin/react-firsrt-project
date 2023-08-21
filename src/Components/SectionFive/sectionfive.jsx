import "./sectionfive.css";
import pic from "../../asseds/images/men-black.png"
import pic1 from "../../asseds/images/women- black.png"
const secFive = () => {
    return (
        <div>
            <div className="container">
                <div className="row p-5 ">
                <div className="col-md-6">
                    <h1>What we can do for your <span className="text-color">business</span></h1>
                    <p>Learn more about the range of our services.
                        Et ullum iisque conclusionemque eam, mel ad erat cum accumsan noluisse, nostrum accumsan movet salutandi. 
                        Fugit expetenda interesset no, probo eloquentiam mei eu. 
                        Sea id malorum dolor.
                     </p>
                     <button class=" bg-color">Contact Us</button>
                </div>
                <div className="col-md-3 mt-3">
                <img src={pic} alt="" className="img-fluid" />
                </div>
                <div className="col-md-3 mt-3">
                <img src={pic1} alt="" className="img-fluid img-size" />
                </div>
                
                
            


                </div>
            </div>
        </div>
    )
}

export default secFive
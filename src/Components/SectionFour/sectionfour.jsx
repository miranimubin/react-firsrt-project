import "./sectionfour.css";
import pic from "../../asseds/images/Line 3.png"
import pic1 from "../../asseds/images/arow line.png"

const secFour = () => {
    return (
        <div>
            <div className="container">
            <div className="row p-5">
            
            <div className="col-md-4 border-L">
                <div className="d-flex">
                    {/* <div  className="pt-2 ">
                    <img src={pic} alt="" className="img-fluid img-line" />
                    </div> */}
                   
                    <div className="px-4">
                        <span>SEO Analysis</span>
                        <h3>Developing Business Managment Skills</h3>
                        <p>
                        Alia mucius ex nam, ea facer liber usu, e aliquam platontem est. Ut melo cum comune similique in.
                        </p>
                        <div className="d-flex">
                        <div>
                        <p>Find Out More</p>
                        </div>
                        <div className="px-2">
                        <img src={pic1} alt="" className="img-fluid" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 border-L">
                <div className="d-flex">
                    {/* <div  className="pt-2">
                    <img src={pic} alt="" className="img-fluid img-line" />
                    </div> */}
                   
                    <div className="px-4">
                        <span>Content Writing</span>
                        <h3>Developing Business Managment Skills</h3>
                        <p>
                        Alia mucius ex nam, ea facer liber usu, e aliquam platontem est. Ut melo cum comune similique in.
                        </p>
                        <div className="d-flex">
                            <div>
                        <p>Find Out More</p>
                        </div>
                        <div  className="px-2">
                        <img src={pic1} alt="" className="img-fluid" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 border-L">
                <div className="d-flex">
                    {/* <div className="pt-2">
                    <img src={pic} alt="" className="img-fluid  img-line" />
                    </div> */}
                   
                    <div className="px-4">
                        <span>MUSIC, VIDEOS</span>
                        <h3>Developing Business Managment Skills</h3>
                        <p>
                        Alia mucius ex nam, ea facer liber usu, e aliquam platontem est. Ut melo cum comune similique in.
                        </p>
                        <div className="d-flex">
                            <div>
                        <p>Find Out More</p>
                        </div>
                        <div  className="px-2">
                        <img src={pic1} alt="" className="img-fluid " />
                        </div>
                        </div>
                    </div>
                </div>
            </div>


            </div>
            </div>



        </div>
    )
}

export default secFour;
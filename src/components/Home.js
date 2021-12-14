import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
        <div id="popup-container"  >
           <div className="home">
            
           
           <div className="home-cont">
           <h2  > SwedBank Small Loan Application Form</h2>
            <p> We are glad you are interested in the Swedbank loan.
              Kindly fill the application form to enable us give you the best loan offer.
            </p>
            
           <Link to="/form" > <span> Apply Now </span> </Link>
          

            </div>
           
          </div> 
          </div>
        </>
    )
}

export default Home

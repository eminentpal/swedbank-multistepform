import React, {useState, useEffect} from 'react'
import {StepOne, StepTwo, StepThree, StepFour} from "./formpages/FormSteps"
import Progress from './formpages/Progress'
import {useNavigate, Link} from 'react-router-dom'
const Form = () => {
 
 const [page, setPage] = useState(1)
 const [details, setDetails] = useState({
       
            fullName: '',
            email: '',
            answer: '',
            country: '',      
 })

 const [formErrors, setFormErrors] = useState({})
 const [items, setItems] = useState({})

 const navigate = useNavigate()

 const addAll = (e) => {
    e.preventDefault()


    setItems((prev => {
        return {...prev, details}
    }))

    

    navigate("/success")
 }

const handleChange = (e) => {
  const {name, value} = e.target

  setDetails( {...details, [name]:value})
}



 const nextPage = () => {
    if(page === 5) {
        return;
    }
     setPage((prev) => prev + 1)

 }

 const prevPage = () => {
    if(page === 5) {
        return;
    }
     setPage((prev) => prev - 1)
 }





    return (
        <>
              <div id="popup-container"  >
             
              <div className="container">
           
      <div className="smallcon"  >
    {/* <progress max="5" value={page} /> */}
    <Progress page={page} />
    
  { page === 5 ? <h2>Summary </h2>
  :
   (<form className="forForm">
      
                {page === 1 && ( <StepOne fullName= {details.fullName}  handleChange={handleChange} />)}
                {page === 2 && ( <StepTwo email= {details.email} handleChange={handleChange} />)}
                {page === 3 && ( <StepThree answer={details.answer} country= {details.country}  handleChange={handleChange} />)}
                {page === 4 && ( <StepFour answer={details.answer}  country= {details.country} handleChange={handleChange} />)}
                
     
     
    </form>)
   }
        {page !== 5 ? 
        <div className="pageBtn"> 
                <button style= {{ visibility: page === 1 && "hidden"}} className="backBtn" onClick={prevPage} >Back</button>
       { page === 4 ? <button className="forwardBtn"  onClick={nextPage} >Finish</button>  : <button className="forwardBtn"  onClick={nextPage} >Forward</button>}
       </div>
        
        : (

        <div> 
        <div className="tableData"> 
       
        <table>
  <thead>
    <tr>
      <th>What is your first and last name?</th>
      <th>Which email address can we contact you with?</th>
      <th>Have you taken load with Swedbank before? </th>
      <th>How much loan you took?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="What is your first and last name?">{details.fullName}</td>
      <td data-column="Which email address can we contact you with?">{details.email}</td>
      <td data-column="Have you taken load with Swedbank before? ">Chiefkakllkaklaklalkkla Sandwich Eater</td>
      <td data-column="How much loan you took?">@jameslkklklaklallkalk</td>
    </tr>
   
   
  </tbody>
</table>

        </div>
         
        <div className="pageBtn"> 
        <button className="backBtn"  onClick={() => setPage(1)}>Start again</button>
         <button  className="forwardBtn" onClick={addAll}>submit</button>
        </div>

        </div>
        
        )}
        </div> 
</div>  
                 
             </div>
        </>
    )
}

export default Form


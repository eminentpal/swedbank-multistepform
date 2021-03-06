import React, {useState, useEffect} from 'react'
import {StepOne, StepTwo, StepThree, StepFour} from "./formpages/FormSteps"
import Progress from './formpages/Progress'
import {useNavigate} from 'react-router-dom'

const Form = () => {
 
 const [page, setPage] = useState(1)
 const [details, setDetails] = useState({
       
            fullName: '',
            email: '',
            answer: '',
            loan: "", 
            income: ""     
 })

 const [formErrors, setFormErrors] = useState({})
 const [items, setItems] = useState({})
 const [isSubmit, setIsSubmit] = useState(false)
 const [qty, setQty] = useState(0)
 

 const navigate = useNavigate()

 const handleIncrease = (e) => {
  e.preventDefault()
   if (qty < 300){
   setQty(qty + 50)
  }
   else {
    return alert("You have reached limit of loan offer")
   }
 }
 const handleDecrease = (e) => {
  e.preventDefault()
   if(qty > 0){
  setQty(qty - 50)
} else {
  
  setQty(0)
  alert("Sorry 0 limit reached")
}
}

 const addAll = (e) => {
    e.preventDefault()

   setFormErrors(validate(details))
   setIsSubmit(true)
  
   if(Object.keys(formErrors).length === 0 && isSubmit) {
    setItems((prev => {
      return {...prev, details}
  }))
  
  navigate("/success")
   } 


  
 }

 const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if(!values.fullName) {
      errors.fullName = "fullName is required!"
    }

    if(!values.answer) {
      errors.answer = "Yes or No is required!"
      
    }
    
    if(details.answer === "No" && !values.income) {
     
      errors.income = "Salary/income is required!" 
    } else if (details.answer === "No" && values.income <= 50 ){ 
          errors.income = "Salary/income must be above $50 "
    }
    if(details.answer === "Yes" && !values.loan) {
     
      errors.loan = "loan is required!" 
    } 
      
  
   
    return errors;
}


const handleChange = (e) => {
  const {name, value} = e.target

  setDetails({...details, [name]:value})
}



 const nextPage = () => {

  if(page === 3) { 
    setFormErrors(validate(details))
    setIsSubmit(true)
  
  
  }
  
  if( page === 4 && qty === 0  ) {

    setFormErrors(validate(details))
    setIsSubmit(true)
    console.log(formErrors)
  
    alert("Loan amount cannot be 0")
    
  
} else {
  if( page === 4 && Object.keys(formErrors).length !== 0  && isSubmit) {
     
     return;
    } else {
      return setPage((prev) => prev + 1)
    }
}
 
    
    if(page === 5) {
        return;
    }
  
    if (page < 4) 
    { return setPage((prev) => prev + 1)}


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
              <div>
                <div>
                  <img  src="/swedbank-logo.svg" alt="swedbank" />
                </div>
                   
              </div>
       
      <div className="smallcon"  >
   
    <Progress page={page} answer={details.answer} />
    
  { page === 5 ? <div> 
                   <h2>Summary </h2>
                   <p style={{color:'#C47D2B', opacity:"0.4"}}><em>Scroll table to right/left to see the rest of data</em></p>
                 </div> 
  :
   (<form>
      
                {page === 1 && ( <StepOne fullName= {details.fullName}   handleChange={handleChange} />)}
                {page === 2 && ( <StepTwo  email= {details.email} answer={details.answer} handleChange={handleChange} />)}
                {page === 3 && ( <StepThree  errors={formErrors} answer={details.answer} income= {details.income} loan= {details.loan}  handleChange={handleChange} />)}
                {page === 4 && ( <StepFour  qty= {qty} errors={formErrors} answer={details.answer} handleDecrease={handleDecrease}  handleIncrease={handleIncrease} />)}
                
     
    </form>)
   }
        {page !== 5 ? 
        <div className="pageBtn"> 
                <button style= {{ visibility: page === 1 && "hidden"}} className="backBtn" onClick={prevPage} >Back</button>
       { page === 4 ? <button className="forwardBtn" type={`${page}` === 4 && 'submit'}  onClick={nextPage} >Finish</button>  : <button className="forwardBtn"  onClick={nextPage} >Forward</button>}
       </div>
        
        : (

        <div> 
        <div className="tableData"> 
       
        <table>
        
  <thead>
    <tr>
      <th>What is your first and last name</th>
      <th>Received loan from Swedbank before</th>
      <th>{details?.loan ? "How much loan you took" : "Monthly salary/income after taxes" }</th>
      <th>what amount of loan offer you seek</th>
     
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="What is your first and last name">{details.fullName}</td>
      <td data-column="Taken loan with Swedbank before">{details.answer}</td>
      <td data-column={details?.loan ? "How much loan you took" : "Monthly salary/income after taxes" }>${details.loan}{details.income}</td>
      <td data-column="what amount of loan offer you seek">${qty}</td>
      
    </tr>
   
   
  </tbody>
</table>


        </div>
        
         
        <div className="pageBtn"> 
        <button className="backBtn"  onClick={() => setPage(1)}>Restart</button>
         <button  className="forwardBtn" onClick={addAll}>Submit</button>
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


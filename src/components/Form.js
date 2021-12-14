import React, {useState, useEffect} from 'react'
import {StepOne, StepTwo, StepThree, StepFour} from "./formpages/FormSteps"
import Progress from './formpages/Progress'
import {useNavigate, useLocation , Link} from 'react-router-dom'

const Form = () => {
 
 const [page, setPage] = useState(1)
 const [details, setDetails] = useState({
       
            fullName: '',
            email: '',
            answer: '',
            loan: 0, 
            income: 0     
 })

 const [formErrors, setFormErrors] = useState({})
 const [items, setItems] = useState({})
 const [isSubmit, setIsSubmit] = useState(false)
 const [qty, setQty] = useState(0)
 

 const navigate = useNavigate()
 const location = useLocation()

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

    console.log(formErrors)
    console.log(items)


    

  
 }

 console.log(qty)
//  useEffect(() => {
   
//      console.log(formErrors)
//    if(Object.keys(formErrors).length === 0 && isSubmit) {
//    console.log(details)

//    }
//    else {
//        setValid(true)
//        console.log(valid)
//    }
//  }, [formErrors,page])

 const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if(!values.fullName) {
      errors.fullName = "fullName is required!"
    }

    // if(!values.email) {
    //     errors.email = "Email is required!"
    // } else if (!regex.test(values.email)) {
    //     errors.email = "This is not a valid email format"
    // }
    if(!values.answer) {
      errors.answer = "Yes or No is required!"
      
    }
    
    if(details.answer === "No" && !values.income) {
     
      errors.income = "Income is required!" 
    }
    if(details.answer === "Yes" && !values.loan) {
     
      errors.loan = "loan is required!" 
    }
      
  //  if (qty === 0) {
  //    errors.qty = "qty required"
  //  }
   
    return errors;
}


const handleChange = (e) => {
  const {name, value} = e.target

  setDetails({...details, [name]:value})
}

console.log(details)


 const nextPage = () => {

  if(page === 3) { 
    setFormErrors(validate(details))
    setIsSubmit(true)
  
   
  
  }
  
  if( page === 4 && qty === 0  ) {

    setFormErrors(validate(details))
    setIsSubmit(true)
    console.log(formErrors)
    // setPage((prev) => prev - 1)
    alert("Loan amount cannot be 0")
    return;
  
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
                {/* <span>SwedBank</span> */}
                   
              </div>
       
      <div className="smallcon"  >
    {/* <progress max="5" value={page} /> */}
    <Progress page={page} answer={details.answer} />
    
  { page === 5 ? <h2>Summary </h2> 
  :
   (<form>
      
                {page === 1 && ( <StepOne fullName= {details.fullName}   handleChange={handleChange} />)}
                {page === 2 && ( <StepTwo  email= {details.email} answer={details.answer} handleChange={handleChange} />)}
                {page === 3 && ( <StepThree  errors={formErrors} answer={details.answer} income= {details.income} loan= {details.loan}  handleChange={handleChange} />)}
                {page === 4 && ( <StepFour  qty= {qty} errors={formErrors} answer={details.answer} handleDecrease={handleDecrease}  handleIncrease={handleIncrease} />)}
                
     
                {/* <button className="forwardBtn" type={`${page}` === 4 && 'submit'}  onClick={addAll} >Finish</button>  */}
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
        <p style={{color:'#C47D2B', opacity:"0.3"}}>scroll table to right to see the rest of data</p>
        <table>
        
  <thead>
    <tr>
      <th>What is your first and last name</th>
      <th>Taken loan with Swedbank before</th>
      <th>{details?.loan ? "How much loan you took" : "Monthly salary after taxes" }</th>
      <th>How much loan you want to take</th>
     
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="What is your first and last name">{details.fullName}</td>
      <td data-column="Taken loan with Swedbank before">{details.answer}</td>
      <td data-column={details?.loan ? "How much loan you took" : "Monthly salary after taxes" }>${details.loan}{details.income}</td>
      <td data-column="How much loan you want to take">{qty}</td>
      
    </tr>
   
   
  </tbody>
</table>


        </div>
        
         
        <div className="pageBtn"> 
        <button className="backBtn"  onClick={() => setPage(1)}>Restart</button>
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


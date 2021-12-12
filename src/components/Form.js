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
            loan: '', 
            income: ''     
 })

 const [formErrors, setFormErrors] = useState({})
 const [items, setItems] = useState({})
 const [isSubmit, setIsSubmit] = useState(false)
 const [valid, setValid] = useState(false)

 const navigate = useNavigate()
 const location = useLocation()

 const addAll = (e) => {
    e.preventDefault()

   setFormErrors(validate(details))
   setIsSubmit(true)
  
    setItems((prev => {
        return {...prev, details}
    }))

    console.log(formErrors)
    console.log(items)

    navigate("/success")

    

  
 }

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

    if(!values.email) {
        errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format"
    }

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

   if( page === 4 && Object.keys(formErrors).length !== 0  && isSubmit ) {

    console.log("formErrors") 

    setPage((prev) => prev - 1)
  }

 

  
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
   (<form >
      
                {page === 1 && ( <StepOne fullName= {details.fullName}  handleChange={handleChange} />)}
                {page === 2 && ( <StepTwo email= {details.email} handleChange={handleChange} />)}
                {page === 3 && ( <StepThree answer={details.answer}   handleChange={handleChange} />)}
                {page === 4 && ( <StepFour errors={formErrors} answer={details.answer} income= {details.income} loan= {details.loan} handleChange={handleChange} />)}
                
     
     
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
      <th>What is your first and last name</th>
      <th>Which email address can we contact you with</th>
      <th>Have you taken loan with Swedbank before </th>
      <th>{details?.loan ? "How much loan you took" : "Monthly salary after taxes" }</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="What is your first and last name">{details.fullName}</td>
      <td data-column="Which email address can we contact you with">{details.email}</td>
      <td data-column="Have you taken loan with Swedbank before">{details.answer}</td>
      <td data-column={details?.loan ? "How much loan you took" : "Monthly salary after taxes" }>{details.loan} {details.income}</td>
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


import { useRef, useState } from "react"
import "./styles.css"
export const StepOne = ({fullName, handleChange, email, country}) => {
    return (
       <div className="forForm">
       <label htmlFor="name" >What is your first and last name? <span style={{color:"red"}} >*</span></label>
       <input
         
         type="text"
         name="fullName"
         value={fullName}
         onChange={handleChange}
         placeholder="What is your first and last name?"
       />
 
        </div>
    )
}


export const StepTwo = ({email, handleChange}) => {
  return (
     <div className="forForm">
     <label htmlFor="email" >Which email can we contact you with? <span style={{color:"red"}} >*</span> </label>
     <input
       
       type="email"
       name="email"
       placeholder="Which email can we contact you with?"
       value={email}
         onChange={handleChange}
     />

      </div>
  )
}

export const StepThree = ({ handleChange, answer}) => {

 
 

  return (
     <>


        {/* <label>Yes</label>
        <input
          type="radio"
          name="answer"
          value="Yes"
          onChange={handleChange}
          
            />
            <label>No</label>
        <input
          type="radio"
          name="answer"
          value="No"
          onChange={handleChange}
          
          
            /> */}
            <div class="radioBox">
	
            <p>Have you taken loan with Swedbank before? <span style={{color:"red"}} >*</span></p>
	
  <ul className="radioInput">
  <span>
    <input type="radio" id="f-option" value="Yes" onChange={handleChange} name="answer" />
    <label for="f-option">Yes</label>
    
    <div class="check"></div>
  </span>
  
  <span>
    <input type="radio" id="s-option" value="No" onChange={handleChange} name="answer" />
    <label for="s-option">No</label>
    
    <div class="check"><div class="inside"></div></div>
  </span>
</ul>
</div>

 

      </>

  )
}

export const StepFour = ({answer, errors, loan, income, handleChange}) => {
  




  return (
     <div className="forForm">
     <span  className="errorPage" >{errors.email} {errors.fullName}</span>
    { answer === "Yes" ?
     <div>
      <label>How much loan you took? <span style={{color:"red"}} >*</span></label>
       <input
       className="forNumber"
       type="number"
       placeholder="$"
       value={loan}
       name="loan"
       onChange={handleChange}
       required
       
     />
     </div>
     : <div>
      <label>Monthly salary after taxes? <span style={{color:"red"}} >*</span></label>
    
   
      <input
       className="forNumber"
       type="number"
       placeholder="$"
       value={income}
       name="income"
       onChange={handleChange}
       required
       
     />
   </div>


     
}
      </div>
  )
}




// export const StepOne = () => {
//   return (
//  <>
    
// <div className="container">

//    <div className="smallcon"  >
//       <h1>StepOne</h1>
//       <form className="forForm">
//           <input
            
//             type="text"
//             placeholder="What's your name?"
//           />

//         <div className="pageBtn"> 
//             <button submit="submit">Previous</button>
//             <button submit="submit">Next</button>
//           </div>
//     </form>
//     </div>
// </div>  
//       </>
//   )
// }



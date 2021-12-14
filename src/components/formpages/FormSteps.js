import React, { useRef, useState } from "react"

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


export const StepTwo = ({email, answer, handleChange}) => {
  return (

    <div class="radioBox">
	
    <p>Received loan from Swedbank before?<span style={{color:"red", marginLeft: "3px"}} >*</span></p>

<ul  className="radioInput">
<span className="yes" >
<input type="radio" id="f-option" value="Yes" onChange={handleChange} name="answer" />
<label for="f-option">Yes</label>

<div class="check"></div>
</span>

<span>
<input type="radio" id="s-option"  value="No" onChange={handleChange} name="answer" />
<label className="no" for="s-option">No</label>

<div class="check"><div class="inside"></div></div>
</span>
</ul>

</div>
  )
}

export const StepThree = ({ handleChange, answer,handleQty, qty, errors, loan, income}) => {

 
 

  return (
     <>
        

   <div className="forForm">
    { answer === "Yes" ?
     <div>
      <label>How much loan you took? <span style={{color:"red"}} >*</span></label>
       <input
       className="forNumber"
       type="number"
       id="quantity"
       min="100"
       max="1000"
       placeholder="$"
       value={loan}
       name="loan"
       onChange={handleChange}
      
      
       
     />

     </div>
     : <div>
      <label>Monthly salary/income after taxes? <span style={{color:"red"}} >*</span></label>
    
   
      <input
       className="forNumber"
       type="number"
       placeholder="$"
       value={income}
       name="income"
       onChange={handleChange}
      
       id="quantity"
       min="100"
       max="1000"
       
     />
   </div>


     
}
      </div>

 

      </>

  )
}

export const StepFour = ({errors, qty, handleIncrease, handleDecrease}) => {
  




  return (
    
      
     <div className="forForm">
     <span  className="errorPage" >{errors?.fullName} {errors?.email} {errors?.answer} {errors?.loan} {errors?.income} {errors?.qty}  </span>
   
     <p>what amount of loan offer you seek?<span style={{color:"red", marginLeft: "3px"}} >*</span></p>
      <div className="qty">
       
        <div class="quantity">
         <p onClick={handleDecrease}> <span >-</span></p>
        <input  name={qty} type="text" class="quantity__input" value={qty} />
        <p onClick={handleIncrease}><span >+</span></p>
       </div>
     
      </div>

      </div>
  )
}







import React from 'react'

const Progress = ({page, answer}) => {
    return (
        <>
             {/* <!-- progressbar --> */}
                 { page <= 4 && (
                      <div>  <ul id="progressbar">
                                <li class="active" id="account"><strong>Name</strong></li>
                                <li id="personal" className={page >= 2 && 'active'} ><strong>Data</strong></li>
                                <li id="loan" className={page >=3 && 'active'}  > { answer === "Yes" ? <strong>Loan</strong>: <strong>Income</strong>}</li>
                                <li id="income" className={page >=4 && 'active'}  ><strong>Email</strong></li>
                             </ul>
               
                        <hr />
                        <br />
                      
                     </div>)}
                    
        </>
    )
}

export default Progress

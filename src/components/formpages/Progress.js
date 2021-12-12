import React from 'react'

const Progress = ({page}) => {
    return (
        <>
             {/* <!-- progressbar --> */}
                 { page <= 4 && (
                      <div>  <ul id="progressbar">
                                <li class="active" id="account"><strong>Name</strong></li>
                                <li id="personal" className={page >= 2 && 'active'} ><strong>Email</strong></li>
                                <li id="payment" className={page >=3 && 'active'}  ><strong>Loan</strong></li>
                                <li id="confirm" className={page >=4 && 'active'}  ><strong>Income</strong></li>
                             </ul>
                        <br />
                        <hr />
                        <br />
                        <br />
                     </div>)}
                    
        </>
    )
}

export default Progress

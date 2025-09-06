import { useState } from "react";


//https://www.w3schools.com/react/showreact.asp?filename=demo_react_forms_multiple



export default function Transaction() {
    // Used for keeping track of the mount of timelines
    const [timelineCount, setTimelineCount] = useState(0)
    // Used for adding timeline components
    const [timelineComponents, setTimelineComponents] = useState([]);


    function handleClick() {
        setTimelineCount(timelineCount + 1);
        
        alert('Transaction saved to database');
    }
 

  return (
    <div >
        <h1>Welcome, Brandon.</h1>
        <p>You currently have 1 timelimes.</p>
        <hr></hr>
        <br></br>
        <p>Current Transaction To Be Added:</p>
        <form className="flex row items-center justify-around border-white border-2 border-solid">
        
        <p>DATE:</p>
        <input className="text-black bg-amber-600 scheme-dark" type="date" />
        <p>DESCRIPTION</p>
        <input className="text-black bg-white" type="text" />
        <p>MONEY IN</p>
        <input className="text-black bg-white" type="text" />
        <p>Money OUT</p>
        <input className="text-black bg-white" type="text" />
        <p>BALANCE</p>
        <input className="text-black bg-white" type="text" />
        <p>CATEGORY</p>
        <input className="text-black bg-white" type="text" /> 
        
                <button type="submit" onClick={handleClick} className="border-2 border-white border-solid" value="submit">ADD</button>

        
    </form>
    

    </div>
  )

   

}
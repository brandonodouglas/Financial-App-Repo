import { useState } from "react";






export default function Transaction() {
    // Used for keeping track of the mount of timelines
    const [timelineCount, setTimelineCount] = useState(0)
    // Used for adding timeline components
    const [timelineComponents, setTimelineComponents] = useState([]);


    function handleClick() {
        setTimelineCount(timelineCount + 1);
        
        alert('timeline button clicked');
    }
 

  return (
    <div>
        <h1>Welcome, Brandon.</h1>
        <p>You currently have { timelineCount } timelimes.</p>
        <hr></hr>
        <br></br>
        <form>
        <h2>TIMELINE: { timelineCount }</h2>
        <p>Date</p>
        <input className="text-black bg-amber-600 scheme-dark" type="date" />
        <p>Description</p>
        <input className="text-black bg-white" type="text" />
        <p>Money in</p>
        <input className="text-black bg-white" type="text" />
        <p>Money out</p>
        <input className="text-black bg-white" type="text" />
        <p>Balance</p>
        <input className="text-black bg-white" type="text" />
        <p>Category</p>
        <input className="text-black bg-white" type="text" />
        
      
    </form>
    

        <button type="button" onClick={handleClick} className="border-2 border-white border-solid">ADD TIMELINE</button>
    </div>
  )

   

}
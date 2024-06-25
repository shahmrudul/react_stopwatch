import { useEffect, useState ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let [start,setStart]=useState(false)
  let [start,setStart]=useState(false)
  const [count, setCount] = useState(0)
  const[seconds,setseconds]=useState(0)
  const[minutes,setminutes]=useState(0)
  const[hours,sethours]=useState(0)
  const interval=useRef(null)
 /*
  const StarStopwatch = () => {
    if (!start) {
      setStart(true);
      interval.current = setInterval(() => {
        setseconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setminutes((prevMinutes) => {
              if (prevMinutes === 59) {
                sethours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }
  };
  */
  
  const StarStopwatch=()=>{
    
      if(!start){
        setStart(true)
        interval.current=setInterval(()=>{
          
          
          setseconds((prevSeconds) => (prevSeconds + 1));
          
          
        },1000)
      }
    }
    
    useEffect(() => {
      if (seconds === 59 && start ) {
        setseconds(0)
        setminutes((minutes)=>minutes+1)
      }
      else if(minutes===60 &&start){
        setminutes(0)
        sethours((hours)=>hours+1)
      }
    }, [seconds, start]);
    
  
  
  const StopStopwatch=()=>{
   setStart(false)
   clearInterval(interval.current)
  
  
  }
  const Reset=()=>{
    setStart(false)
    clearInterval(interval.current)
    setseconds(0)
    setminutes(0)
    sethours(0)
  }
  return (
    <>
      <div className="StopWatch">
  <div className="time-display">
    <div className="time-unit">
      <p>Hours</p>
      <span>{hours}</span>
    </div>
    <div className="time-unit">
      <p>Minutes</p>
      <span>{minutes}</span>
    </div>
    <div className="time-unit">
      <p>Seconds</p>
      <span>{seconds}</span>
    </div>
  </div>
  <div className='stopwatchbutton'>
  <button onClick={StarStopwatch}>Start</button>
  <button onClick={StopStopwatch}>Stop</button>
  <button onClick={Reset}> Reset</button>
  </div>
</div>

       </>
   )
   }
  export default App

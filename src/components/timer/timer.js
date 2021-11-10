import React, {useState, useEffect} from "react"

function Countdownlist() {
    const [time, setTime] = useState ("");
    useEffect (() => {
        let countDownDate = new Date("Dec 03, 2021 19:30:00").getTime();
        // update every second
        let x = setInterval(function(){
            // Get todays date
            let now = new Date().getTime()

            //find the dstance between now and count down date

            let distance = countDownDate - now;
            let days = Math.floor(distance/ (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime(days + "d" + " " + "-" + " " + hours + "h" + " " +  "-" + " " + minutes + "m" + " " +  "-" + " " + seconds + "s")

            if( distance < 0){
                clearInterval(x);
                setTime("¡Gracias por su compañia!")
            }

        }, 1000)
    }, []);
    return <div className="timer">{time}</div>
}

export default Countdownlist
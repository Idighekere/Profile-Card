const day = document.getElementById('day')
const time = document.getElementById('time')

const displayDay = () => {
    const today = new Date()

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const dayOfWeek = days[today.getDay()]
    day.textContent = dayOfWeek
}

const displayUTCTime=()=>{
    const UTCTime=new Date().toLocaleTimeString('en-US',{
        timeZone:'UTC',
        hour12:false
    })

    time.textContent=UTCTime
}

displayDay()
displayUTCTime()

setInterval(()=>{
    displayUTCTime()

},1000)

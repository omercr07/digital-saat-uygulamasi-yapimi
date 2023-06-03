import React, { useEffect } from 'react';
import { useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState('00:00:00 xm');
    const [date, setDate] = useState('day, month, 00, 0000');


    useEffect(() => {
        setInterval(() =>{

            const dt =new Date();

            const dayNames = ['Pazartesi','Sali','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar'];
            const monthNames = ['Ocak','Şubat','Mart','Nisan','Mayis','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasim','Aralik'];


            let hour = dt.getHours();
            let minute = dt.getMinutes();
            let second = dt.getSeconds();

            let xm = (hour >= 12) ? 'PM' : 'AM';

            hour = (hour > 12) ? hour - 12 : hour;
            hour = (hour < 10) ? '0' + hour : hour;
            minute = (minute < 10) ? '0' + minute : minute;
            second = (second < 10) ? '0' + second : second;

            let newTime = ` ${hour}:${minute}:${second} ${xm}`;
            setTime(newTime);



            let dayIndex = dt.getMonth();
            let dayName  = dayNames[dayIndex];

            let monthIndex = dt.getDay();
            let monthName  = monthNames[monthIndex];

            let today = dt.getDate();
            let year = dt.getFullYear();

            today = (today < 10) ? '0' + today : today;

            let newDate = ` ${dayName}, ${today}  ${monthName}, ${year}`;
            setDate(newDate);

        }, 1000);
    })

    return (
        <div className="clock">
            <h1>{time}</h1>
            <p>{date}</p>
        </div>
    );
}

export default Clock;

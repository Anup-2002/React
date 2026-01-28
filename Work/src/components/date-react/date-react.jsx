import React, { useState, useEffect } from 'react';
import moment from 'moment';
export function GetCurrentDate() {
const [currentDate, SetCurrentDate] = useState(new Date());

useEffect(() => {
        SetCurrentDate(new Date());
}, []);
return (
        <>
<div>{currentDate.toLocaleDateString()}</div>
<div>{moment(currentDate).format('DD dddd dd mm MMM YY yyyy')}</div>   
        </>
)
//moment js library can also be used for date formatting easily
}
//npm install moment
//Dat js library can also be used for date formatting easily
//npm install date-fns
import * as React from 'react';
import {useState, useEffect} from "react";
import DateFnsUtils from '@date-io/date-fns';
import { TextField } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

const DashboardSidebar = () => {

    const [selectedDate, handleDateChange] = useState(new Date());
    
    return (
        <>
            <div className="dashboard-sidebar">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        className="datePicker"
                        label="Starting Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </MuiPickersUtilsProvider>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        className="datePicker"
                        label="Ending Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </MuiPickersUtilsProvider>
            </div>
        </>
    )
}

export default DashboardSidebar;
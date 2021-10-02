import * as React from 'react';
import AreaChart from "./area-chart";
import LineChart from "./line-chart";

const Dashboard = () => {

    
    return(
        <>
            <div className="upper-charts">
                <AreaChart />
                <LineChart />
            </div>
        </>
    )
}

export default Dashboard;
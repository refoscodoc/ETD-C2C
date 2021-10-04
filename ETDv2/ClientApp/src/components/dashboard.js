import * as React from 'react';
import AreaChart from "./area-chart";
import LineChart from "./line-chart";
import DashboardSidebar from "./dashboard-sidebar";

const Dashboard = () => {

    
    return(
        <>
            <div className="dashboard-page">
                <div className="upper-charts">
                    <AreaChart />
                    <LineChart />
                </div>
                
                <DashboardSidebar/>
            </div>
            
        </>
    )
}

export default Dashboard;
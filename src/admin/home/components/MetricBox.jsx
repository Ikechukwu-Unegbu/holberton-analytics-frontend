import React from 'react'
import MetricCard from './MetricCard'
import './Metricbox.css'

export default function MetricBox(props){
    return (
        <React.Fragment>
            <div className=" container metric-container mt-3">
               {/* <div className="box"> */}
                    <MetricCard title="Total Request" text={props.metrics.totalAnalyics}/>
                    <MetricCard title="Total Users" text={props.metrics.totalUsers}/>
                    <MetricCard title="Total Sites" text={props.metrics.totalSites}/>
               {/* </div> */}
            </div>
        </React.Fragment>
    )
}
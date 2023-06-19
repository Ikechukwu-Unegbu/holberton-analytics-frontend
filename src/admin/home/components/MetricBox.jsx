import React from 'react'
import MetricCard from './MetricCard'
import './Metricbox.css'

export default function MetricBox(props){
    return (
        <React.Fragment>
            <div className=" container metric-container mt-3">
               {/* <div className="box"> */}
                    <MetricCard title="Total Request" text="50000"/>
                    <MetricCard title="Total Users" text="100"/>
                    <MetricCard title="Total Sites" text="230"/>
               {/* </div> */}
            </div>
        </React.Fragment>
    )
}
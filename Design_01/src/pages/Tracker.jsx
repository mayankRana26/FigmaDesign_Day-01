import React from 'react'
import CyclePhasePanel from '../components/tracker/CyclePhasePanel'
import StatsLogPanel from '../components/tracker/StatsLogPanel'
import HealthTrackerPanel from '../components/tracker/HealthTrackerPanel'


const Tracker = () => {
  return (
    <div >
     <CyclePhasePanel />
     <StatsLogPanel />
     <HealthTrackerPanel />
    </div>
  )
}

export default Tracker

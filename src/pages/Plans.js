import React from 'react'
import InfoHeader from '../components/plans/InfoHeader'
import PlansTable from '../components/plans/PlansTable'

const Plans = () => {
  return (
    <section className="w-full bg-primary-bg-color">
      <InfoHeader />
      <PlansTable />
    </section>
  )
}

export default Plans
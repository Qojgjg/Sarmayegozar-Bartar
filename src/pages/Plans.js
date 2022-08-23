import React from 'react'
import useTitle from "../hooks/useTitle";
import InfoHeader from '../components/plans/InfoHeader'
import PlansTable from '../components/plans/PlansTable'

const Plans = () => {
  useTitle("پلن ها")
  
  return (
    <section className="w-full bg-primary-bg-color">
      <InfoHeader />
      <PlansTable />
    </section>
  )
}

export default Plans
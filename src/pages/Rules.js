import React from "react";
import useTitle from "../hooks/useTitle";
import RulesSearchHeader from "../components/Rules/RulesSearchHeader";
import GeneralRules from "../components/Rules/GeneralRules";
import FullRulesReview from "../components/Rules/FullRulesReview";
import FastLogin from "../components/FastLogin"

const Rules = () => {
  useTitle("قوانین")
  
  return (
    <section className="w-full bg-primary-bg-color">
      <RulesSearchHeader />
      <GeneralRules />
      <FullRulesReview />
      <FastLogin />
    </section>
  );
};

export default Rules

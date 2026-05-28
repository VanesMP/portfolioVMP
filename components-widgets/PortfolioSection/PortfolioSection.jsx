"use client";

import { SwitchPortfolio } from "@shared/SwitchPortfolio";
import { OPTIONS_PORTFOLIO, PORTFOLIO_VALUE } from "src/constants/constants";
import { useState } from "react";

export const PortfolioSection = () => {
  const [selectedOption, setSelectedOption] = useState(PORTFOLIO_VALUE.DEV);

  return (
    <SwitchPortfolio
      options={OPTIONS_PORTFOLIO}
      value={selectedOption}
      onChange={setSelectedOption}
    />
  );
};

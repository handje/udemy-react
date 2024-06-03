import React from "react";
import { calculateInvestmentResults, formatter } from "../../util/investment";

const ResultContainer = ({ inputValue }) => {
  const investResult = calculateInvestmentResults(inputValue);

  const initialInvestment =
    investResult[0].valueEndOfYear -
    investResult[0].interest -
    investResult[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>YEAR</th>
          <th>INVESTMENT VALUE</th>
          <th>INTEREST (YEAR)</th>
          <th>TOTAL INTEREST</th>
          <th>INVESTED CAPITAL</th>
        </tr>
      </thead>
      <tbody className="center">
        {investResult.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;
          const totalAmountInvested = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultContainer;

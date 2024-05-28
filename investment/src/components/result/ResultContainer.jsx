import React from "react";

const ResultContainer = () => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col">YEAR</th>
          <th scope="col">INVESTMENT VALUE</th>
          <th scope="col">INTEREST (YEAR)</th>
          <th scope="col">TOTAL INTEREST</th>
          <th scope="col">INVESTED CAPITAL</th>
        </tr>
      </thead>
      <tbody className="center">
        <tr>
          <td>22</td>
          <td>$2222</td>
          <td>$2222</td>
          <td>$2222</td>
          <td>$2222</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResultContainer;

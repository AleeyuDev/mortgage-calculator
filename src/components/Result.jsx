import { Stack, Typography } from "@mui/material";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const Result = ({ data }) => {
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12; // 60 months = 5 years

  const interestPerMonth = interestRate / 100 / 12; // 100 @ 12 % for 1 year

  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  const pieCharData = {
    labels: ["principle", "Interest"],
    datasets: [
      {
        label: "ratio of Princeole and Interest",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        backgroundWidth: 3,
        borderWidth: 1,
      },
    ],
  };
  return (
    <Stack>
      <Typography gap={10} textAlign="center" variant="h5">
        Monthly Paymenty : ${monthlyPayment.toFixed(2)}
        <Stack direction="row" justifyContent="center">
          <div>
            <Pie data={pieCharData} />
          </div>
        </Stack>
      </Typography>
    </Stack>
  );
};

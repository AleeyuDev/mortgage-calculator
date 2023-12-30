/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import SliderComponent from "./components/common/sliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;

  return (
    <Stack my={10}>
      <SliderComponent
        label="Home Value"
        min={1000}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) =>
          setData(
            {
              ...data,
              downPayment: value * 0.2,

              loanAmount: value * 0.8,
              homeValue: value,
            },
            e.preventDefault()
          )
        }
        uint="$"
        amount={data.homeValue}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        step={20}
        uint="$"
        value={data.downPayment}
        amount={data.downPayment}
        onChange={(e, value) =>
          setData(
            {
              ...data,
              loanAmount: data.homeValue - value,

              downPayment: value,
            },
            e.preventDefault()
          )
        }
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={5}
        uint="$"
        amount={data.loanAmount}
        onChange={(e, value) =>
          setData({ ...data, loanAmount: value }, e.preventDefault())
        }
      />
      {/* <SliderComponent
        label="loan Term"
        min={0}
        max={50}
        defaultValue={data.loanTerm}
        step={100}
        uint="$"
        amount={data.loanTerm}
        onChange={(e, value) =>
          setData({ ...data, loanTerm: value }, e.preventDefault())
        }
      /> */}
      <SliderComponent
        label="Interest rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.5}
        uint="%"
        amount={data.interestRate}
        onChange={(e, value) =>
          setData({ ...data, interestRate: value }, e.preventDefault())
        }
      />
    </Stack>
  );
};

export default SliderSelect;

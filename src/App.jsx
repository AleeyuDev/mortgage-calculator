import TenureSelect from "./TenureSelect";
import NavBar from "./components/NavBar";
import { Result } from "./components/Result";
import SliderSelect from "./SliderSelect";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });
  return (
    <div>
      <NavBar />

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} xl={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} xl={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;

import { Container, Stack, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";

const sliderComponent = ({
  defaultValue,
  min,
  max,
  step,
  onChange,
  value,
  label,
  uint,
  amount,
}) => {
  return (
    <Container maxWidth="md">
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {uint}
          {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        marks
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
        value={value}
      />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="caption" color="text.secondary">
          ${value}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          ${value}
        </Typography>
      </Stack>
    </Container>
  );
};

export default sliderComponent;

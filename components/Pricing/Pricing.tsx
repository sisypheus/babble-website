import { Grid, Title } from "@mantine/core";
import PriceCard from "../Features/PriceCard";

const Pricing = () => {
  return (
    <div id="pricing" className="bg-custom min-h-screen h-full">
      <div className="w-full max-w-6xl m-auto py-8">
        <div className="flex flex-col items-center justify-center">
          <Title order={1} className="text-white">
            Pricing
          </Title>
        </div>
        <Grid gutter={"md"}>
          <PriceCard />
          <PriceCard />
          <PriceCard />
          <PriceCard />
          <PriceCard />
        </Grid>
      </div>
    </div>
  );
};

export default Pricing;

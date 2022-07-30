import { Grid, Title } from "@mantine/core";
import PriceCard from "../Features/PriceCard";
import { Plan} from "../../pages/index";

const { Col } = Grid;

function Pricing({ plans }: { plans: Plan[] }) {
  return (
    <div id="pricing" className="lg:bg-custom lg:bg-slate-50 bg-slate-900">
      <div className="max-w-7xl mx-auto py-8 flex flex-col h-full items-center justify-center space-y-8 min-h-screen">
        <div className="flex flex-col items-center justify-center mb-8">
          <Title order={1} className="text-white">
            The pricing
          </Title>
          <Title order={2} className="text-white">
            A pricing that suits <span className="text-blue-500">your</span>{" "}
            needs
          </Title>
        </div>
        <div className="flex flex-col align-center w-full">
          <Grid
            gutter={"lg"}
            justify="center"
            columns={20}
            className="justify-center align-center"
          >
            {plans.map((plan: Plan, index: number) => (
              <Col
                xs={10}
                sm={8}
                md={6}
                lg={5}
                className="flex align-center justify-center"
                key={index}
              >
                <PriceCard {...plan} />
              </Col>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

import { Container, Grid, Title } from "@mantine/core";
import PriceCard from "../Features/PriceCard";

const { Col } = Grid;

const Pricing = () => {
  return (
    <div id="pricing" className="md:bg-custom md:bg-slate-50 bg-slate-900">
      <div className="max-w-7xl mx-auto py-8 flex flex-col h-full items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center mb-8">
          <Title order={1} className="text-white">
            Babble pricing
          </Title>
          <Title order={2} className="text-white">
            A pricing that suits <span className="text-blue-500">your</span>{" "}
            needs
          </Title>
        </div>
        <div className="flex flex-col align-center">
          <Grid
            gutter={"lg"}
            justify="center"
            columns={20}
            className="h-full justify-center align-center"
          >
            {/* <Col */}
            {/*   xs={10} */}
            {/*   sm={20 / 3} */}
            {/*   md={5} */}
            {/*   lg={4} */}
            {/*   className="flex align-center justify-center" */}
            {/* > */}
            {/*   <PriceCard name="Free" features={} /> */}
            {/* </Col> */}
            {/* <Col */}
            {/*   xs={10} */}
            {/*   sm={20 / 3} */}
            {/*   md={5} */}
            {/*   lg={4} */}
            {/*   className="flex align-center justify-center" */}
            {/* > */}
            {/*   <PriceCard /> */}
            {/* </Col> */}
            {/* <Col */}
            {/*   xs={10} */}
            {/*   sm={20 / 3} */}
            {/*   md={5} */}
            {/*   lg={4} */}
            {/*   className="flex align-center justify-center" */}
            {/* > */}
            {/*   <PriceCard /> */}
            {/* </Col> */}
            {/* <Col */}
            {/*   xs={10} */}
            {/*   sm={20 / 3} */}
            {/*   md={5} */}
            {/*   lg={4} */}
            {/*   className="flex align-center justify-center" */}
            {/* > */}
            {/*   <PriceCard /> */}
            {/* </Col> */}
            {/* <Col */}
            {/*   xs={10} */}
            {/*   sm={20 / 3} */}
            {/*   md={5} */}
            {/*   lg={4} */}
            {/*   className="flex align-center justify-center" */}
            {/* > */}
            {/*   <PriceCard /> */}
            {/* </Col> */}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      plans: [
        { link: "#why-babble", label: "Why Babble" },
        { link: "#pricing", label: "Pricing" },
        { link: "#features", label: "Features" },
        { link: "https://github.com/babble/", label: "Github" },
      ],
    },
  };
};

export default Pricing;


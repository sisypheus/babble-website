import { Grid, Title } from "@mantine/core";
import PriceCard from "../Features/PriceCard";
import { Plan } from "../../pages/index";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

const { Col } = Grid;

function Pricing({ plans }: { plans: Plan[] }) {
  const options = {
    treshold: 0.4,
    triggerOnce: true,
  };
  const { ref, entry } = useInView(options);
  const animate1 = useSpring({
    from: { opacity: 0, translateY: 100 },
    delay: 500,
    to: {
      opacity: entry?.isIntersecting ? 1 : 0,
      translateY: entry?.isIntersecting ? 0 : 100,
    },
  });
  const animate2 = useSpring({
    from: { opacity: 0, translateY: 100 },
    delay: 600,
    to: {
      opacity: entry?.isIntersecting ? 1 : 0,
      translateY: entry?.isIntersecting ? 0 : 100,
    },
  });
  const animate3 = useSpring({
    from: { opacity: 0, translateY: 100 },
    delay: 700,
    to: {
      opacity: entry?.isIntersecting ? 1 : 0,
      translateY: entry?.isIntersecting ? 0 : 100,
    },
  });
  const animate4 = useSpring({
    from: { opacity: 0, translateY: 100 },
    delay: 800,
    to: {
      opacity: entry?.isIntersecting ? 1 : 0,
      translateY: entry?.isIntersecting ? 0 : 100,
    },
  });
  const animations = [animate1, animate2, animate3, animate4];

  return (
    <div id="pricing" className="lg:bg-custom lg:bg-slate-50 bg-slate-900">
      <div className="max-w-7xl mx-auto py-8 flex flex-col h-full items-center justify-center space-y-8 min-h-screen">
        <div
          ref={ref}
          className="flex flex-col items-center justify-center mb-8"
        >
          <Title order={1} className="text-white text-center px-2">
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
                sm={10}
                md={6}
                lg={5}
                className="flex align-center justify-center"
                key={index}
              >
                <animated.div style={animations.at(index)}>
                  <PriceCard {...plan} />
                </animated.div>
              </Col>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

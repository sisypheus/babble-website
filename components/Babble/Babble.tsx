import { Grid, Group, Title, Blockquote, Text } from "@mantine/core";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

const Babble = () => {
  const options = {
    treshold: 0.3,
    triggerOnce: true,
  };

  const { ref: refLeft, entry: entryLeft } = useInView(options);
  const { ref: refRight, entry: entryRight } = useInView(options);
  const { ref: refLast, entry: entryLast } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const leftCol = useSpring({
    config: { duration: 400 },
    from: { opacity: 0, translateX: -0 },
    to: {
      opacity: entryLeft?.isIntersecting ? 1 : 0,
      translateX: entryLeft?.isIntersecting ? 0 : 0,
    },
  });

  const rightCol = useSpring({
    config: { duration: 400 },
    from: { opacity: 0, translateX: 0 },
    delay: 500,
    to: {
      opacity: entryRight?.isIntersecting ? 1 : 0,
      translateX: entryRight?.isIntersecting ? 0 : 0,
    },
  });

  const lastPart = useSpring({
    config: { duration: 400 },
    from: { opacity: 0 },
    delay: 500,
    to: {
      opacity: entryLast?.isIntersecting ? 1 : 0,
    },
  });

  return (
    <>
      <div id="why-babble" className="bg-slate-50">
        <Grid gutter={32} className="w-full max-w-6xl m-auto py-8">
          <Grid.Col span={12} className="flex items-end justify-center">
            <Title className="text-center">
              A few reasons to use <span className="text-blue-500">Babble</span>
            </Title>
          </Grid.Col>
          <Grid.Col
            md={6}
            className="flex flex-col items-center justify-center px-8"
            ref={refLeft}
          >
            <animated.div style={leftCol}>
              <Group spacing={0}>
                <Blockquote className="p-2" cite="FORBES" icon={null}>
                  <span className="text-blue-500 font-semibold">
                    80% increase in revenue
                  </span>{" "}
                  for businesses that focus on increasing customer experience
                </Blockquote>
                <Blockquote className="p-2" cite="SUPER OFFICE" icon={null}>
                  <span className="text-blue-500 font-semibold">
                    9/10 customers
                  </span>{" "}
                  are willing to pay ~15% for a better customer support
                </Blockquote>
                <Blockquote className="p-2" cite="SALESFORCE" icon={null}>
                  <span className="text-blue-500 font-semibold">
                    7/10 customers prefer
                  </span>{" "}
                  web chatting over other mean of communication methods for
                  talking to businesses
                </Blockquote>
                <Blockquote className="p-2" cite="LUMOA" icon={null}>
                  <span className="text-blue-500 font-semibold">
                    9/10 customers have moved
                  </span>{" "}
                  to competition following a poor customer experience
                </Blockquote>
              </Group>
            </animated.div>
          </Grid.Col>

          <Grid.Col
            md={6}
            ref={refRight}
            className="flex items-center justify-center px-8"
          >
            <animated.div style={rightCol}>
              <Image
                src="/assets/customer.svg"
                className="shadow rounded-xl bg-gray-200 px-4"
                width={600}
                height={400}
                alt=""
              />
            </animated.div>
          </Grid.Col>
        </Grid>

        <div
          ref={refLast}
          className="bg-slate-50 flex flex-col items-center justify-center lg:mt-16"
        >
          <animated.div style={lastPart}>
            <div className="max-w-6xl p-3">
              <Title className="text-center">
                <span className="text-blue-500">Babble</span> offers an easy and
                lightweight solution to instantly improve the way your customers
                interact with your business.
              </Title>
              <Text className="text-center text-2xl mt-1">
                You only have to paste a code snippet in a single file, and we
                can do the rest.
              </Text>
            </div>
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default Babble;

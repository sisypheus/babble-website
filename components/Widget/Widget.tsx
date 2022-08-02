import {
  Card,
  Title,
  Container,
  Text,
  Grid,
  Group,
  Button,
} from "@mantine/core";
import { useSpring, animated } from "react-spring";
import { ArrowRight } from "tabler-icons-react";
import { ReactElement, useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const { Col } = Grid;

function Message({
  message,
  user,
}: {
  message: string;
  user: "COMPANY" | "USER";
}) {
  return user === "COMPANY" ? (
    <div className="flex justify-start mr-auto w-3/4 my-1">
      <Text className="flex items-center px-3 py-1 bg-gray-300 text-black rounded font-medium">
        {message}
      </Text>
    </div>
  ) : (
    <div className="flex justify-end ml-auto w-3/4 my-1">
      <Text className="flex items-center px-3 py-1 bg-blue-500 text-white rounded font-medium">
        {message}
      </Text>
    </div>
  );
}

function Widget() {
  const typedRef = useRef<any>(null);
  const [firstMessage] = useSpring(() => ({
    from: { opacity: 0, translateY: 50 },
    to: { opacity: 1, translateY: 0 },
    delay: 5000,
  }));

  const [secondMessage] = useSpring(() => ({
    from: { opacity: 0, translateY: 50 },
    to: { opacity: 1, translateY: 0 },
    delay: 7000,
  }));

  const [thirdMessage] = useSpring(() => ({
    from: { opacity: 0, translateY: 50 },
    to: { opacity: 1, translateY: 0 },
    delay: 11750,
  }));

  const [fourthMessage] = useSpring(() => ({
    from: { opacity: 0, translateY: 50 },
    to: { opacity: 1, translateY: 0 },
    delay: 14000,
  }));

  const [messages, setMessages] = useState<ReactElement[]>([
    <animated.div key="first" style={firstMessage}>
      <Message message="Hello, I need help with my order" user="USER" />
    </animated.div>,
  ]);

  const [styles] = useSpring(() => ({
    to: { opacity: 1, translateX: 0 },
    from: { opacity: 0, translateX: 50 },
    delay: 500,
  }));

  const [opacity] = useSpring(() => ({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 250,
  }));

  const [opacityMobile] = useSpring(() => ({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  }));

  useEffect(() => {
    let typed = new Typed(typedRef.current, {
      strings: ["Hello, I need help with my order", ""],
      startDelay: 2000,
      typeSpeed: 50,
      cursorChar: "",
      fadeOut: true,
    });

    setTimeout(() => {
      setMessages([
        <animated.div key={"third"} style={thirdMessage}>
          <Message message="How many colors are available ?" user="USER" />
        </animated.div>,
        <animated.div key={"second"} style={secondMessage}>
          <Message message="Hi, how may I help you ?" user="COMPANY" />
        </animated.div>,
        <animated.div key={"first"} style={firstMessage}>
          <Message message="Hello, I need help with my order" user="USER" />
        </animated.div>,
      ]);
    }, 11750);

    setTimeout(() => {
      setMessages([
        <animated.div key="second" style={secondMessage}>
          <Message message="Hi, how may I help you ?" user="COMPANY" />
        </animated.div>,
        ...messages,
      ]);
      // @ts-ignore
      typed.strings = ["How many colors are available ?", ""];
      typed.reset();
    }, 7000);

    setTimeout(() => {
      setMessages([
        <animated.div key={"fourth"} style={fourthMessage}>
          <Message
            message="There are 3 available colors, blue, green and red"
            user="COMPANY"
          />
        </animated.div>,
        <animated.div key={"third"} style={thirdMessage}>
          <Message message="How many colors are available ?" user="USER" />
        </animated.div>,
        <animated.div key={"second"} style={secondMessage}>
          <Message message="Hi, how may I help you ?" user="COMPANY" />
        </animated.div>,
        <animated.div key={"first"} style={firstMessage}>
          <Message message="Hello, I need help with my order" user="USER" />
        </animated.div>,
      ]);
    }, 14000);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="w-full hidden md:flex h-full bg-gray-900 min-h-screen flex-1 items-center justify-center">
        <Grid className="max-w-4xl gap-20 p-6 py-16">
          <Col span={6} className="flex flex-1 items-center max-w-[430px]">
            <Group className="items-center gap-3">
              <animated.div style={opacity}>
                <Title className="text-white h-full items-center flex text-5xl">
                  Hassle free customer chat
                </Title>
                <Text size="xl" color={"white"} weight={500}>
                  The easiest way for your customers to get in touch with you,
                  only a single click away.
                </Text>
                <a href="https://app.babble.fr/register">
                  <Button
                    size="md"
                    className="px-4 py-2 mt-2 bg-blue-500"
                    rightIcon={<ArrowRight size={"16"} />}
                  >
                    Get started for free
                  </Button>
                </a>
              </animated.div>
            </Group>
          </Col>

          <Col span={6} className="w-full">
            <animated.div style={styles}>
              <Card radius={"md"} className="p-0 overflow-visible">
                <Container className="bg-blue-500 w-full rounded-t">
                  <Title className="p-2 py-4 text-white text-xl lg:text-[22px]">
                    Welcome to the company web chat
                  </Title>
                </Container>
                <Container className="bg-blue-400 w-full opacity-80">
                  <Title order={5} className="px-2 py-1 text-white">
                    Chat with us below
                  </Title>
                </Container>

                <Container className="h-[28rem] px-6 flex flex-col-reverse">
                  {messages.map(
                    (message: React.ReactElement, index: number) => (
                      <div key={index}>{message}</div>
                    )
                  )}
                </Container>

                <Container className="w-full border-0 border-t border-solid border-gray-200 min-h-[52.9px]">
                  <Text
                    size="lg"
                    className="px-2 py-3 text-gray-700"
                    ref={typedRef}
                  />
                </Container>
              </Card>
            </animated.div>
          </Col>
        </Grid>
      </div>

      {/* mobile version */}
      <div className="w-full md:hidden h-full w-full p-2 flex flex-1 items-center justify-center bg-gray-900 min-h-screen">
        <Group className="gap-3 w-full text-center p-4">
          <animated.div style={opacityMobile}>
            <Title className="text-white text-5xl">
              Hassle free customer chat
            </Title>
            <Text size="xl" color={"white"} weight={500}>
              The easiest way for your customers to get in touch with you, only
              a single click away.
            </Text>
            <a href="https://app.babble.fr/register">
              <Button
                size="md"
                className="px-4 py-2 mt-2 bg-blue-500"
                rightIcon={<ArrowRight size={"16"} />}
              >
                Get started for free
              </Button>
            </a>
          </animated.div>
        </Group>
      </div>
    </>
  );
}

export default Widget;

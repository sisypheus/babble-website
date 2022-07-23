import {
  Card,
  Title,
  Container,
  Input,
  InputWrapper,
  TextInput,
  Text,
  Grid,
  Group,
  Button,
} from "@mantine/core";
import { useSpring, animated } from "react-spring";
import { ArrowRight } from "tabler-icons-react";

const { Col } = Grid;

function Widget() {
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

  return (
    <>
      <div className="w-full hidden sm:flex h-full flex-1 items-center justify-center">
        <Grid className="max-w-4xl">
          <Col span={6} className="flex flex-1 items-center">
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
                    className="px-4 py-2 mt-2"
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
              <Card radius={"md"} className="p-0">
                <Container className="bg-blue-500 w-full">
                  <Title order={3} className="p-2 py-4 text-white">
                    Welcome to the company web chat
                  </Title>
                </Container>
                <Container className="bg-blue-400 w-full opacity-80">
                  <Title order={5} className="px-2 py-1 text-white">
                    Chat with us below
                  </Title>
                </Container>

                <Container className="h-[28rem]"></Container>

                <Container className="w-full border-0 border-t border-solid border-gray-200">
                  <Text size="lg" className="px-2 py-3 text-gray-500">
                    Ask us anything
                  </Text>
                </Container>
              </Card>
            </animated.div>
          </Col>
        </Grid>
      </div>

      {/* mobile version */}
      <div className="w-full sm:hidden h-full flex flex-1 items-center justify-center">
        <Title>Hassle free customer chat</Title>
      </div>
    </>
  );
}

export default Widget;

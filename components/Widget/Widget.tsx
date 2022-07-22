import {
  Card,
  Title,
  Container,
  Input,
  InputWrapper,
  TextInput,
  Text,
} from "@mantine/core";
import { useSpring, animated } from "react-spring";

function Widget() {
  const [styles] = useSpring(() => ({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1500,
  }));

  return (
    <div className="w-full h-full flex flex-1 items-center justify-center">
      <animated.div style={styles}>
        <Card radius={"md"} className="p-0">
          <Container className="bg-blue-500 w-full">
            <Title order={3} className="p-2 py-4 text-white">
              Welcome to the company web chat!
            </Title>
          </Container>
          <Container className="bg-blue-400 w-full">
            <Title order={5} className="px-2 py-1 text-white">
              Chat with us below
            </Title>
          </Container>

          <Container className="h-[28rem]">test</Container>

          <Container className="w-full border-0 border-t border-solid border-gray-200">
            <Text size="lg" className="p-2">
              Ask us anything
            </Text>
          </Container>
        </Card>
      </animated.div>
    </div>
  );
}

export default Widget;

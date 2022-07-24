import { Grid, Group, Title, Blockquote } from "@mantine/core";
import Image from "next/image";

const Babble = () => {
  return (
    <div
      id="why-babble"
      className="flex flex-col flex-1 h-full items-center justify-center"
    >
      <Grid gutter={32} className="w-full max-w-6xl">
        <Grid.Col span={12} className="flex items-end justify-center">
          <Title>
            A few reasons to use <span className="text-blue-500">Babble</span>
          </Title>
        </Grid.Col>
        <Grid.Col
          span={6}
          className="flex flex-col items-center justify-center"
        >
          <Group spacing={0}>
            <Blockquote className="p-2" cite="FORBES" icon={null}>
              <span className="text-sky-500 font-semibold">
                80% increase in revenue
              </span>{" "}
              for businesses that focus on increasing customer experience
            </Blockquote>
            <Blockquote className="p-2" cite="SUPER OFFICE" icon={null}>
              <span className="text-sky-500 font-semibold">9/10 customers</span>{" "}
              are willing to pay ~15% for a better customer support
            </Blockquote>
            <Blockquote className="p-2" cite="SALESFORCE" icon={null}>
              <span className="text-sky-500 font-semibold">
                7/10 customers prefer
              </span>{" "}
              web chatting over other mean of communication methods for talking
              to businesses
            </Blockquote>
            <Blockquote className="p-2" cite="LUMOA" icon={null}>
              <span className="text-sky-500 font-semibold">
                9/10 customers have moved
              </span>{" "}
              to competition following a poor customer experience
            </Blockquote>
          </Group>
        </Grid.Col>

        <Grid.Col span={6} className="flex items-center justify-center">
          <Image
            src="/customer.svg"
            className="shadow rounded-xl bg-gray-200 px-4"
            width={600}
            height={400}
          />
        </Grid.Col>
      </Grid>

      {/* mobile version */}
      <div></div>
    </div>
  );
};

export default Babble;

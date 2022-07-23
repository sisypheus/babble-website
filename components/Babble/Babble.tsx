import { Col, Grid, Group, Title } from "@mantine/core";
import Image from "next/image";

const Babble = () => {
  return (
    <div
      id="why-babble"
      className="flex flex-col flex-1 h-full items-center justify-center"
    >
      <Grid className="h-full w-full">
        <Col span={5} className="flex flex-col items-center justify-center">
          Nice facts about customer chat
        </Col>

        <Col span={6} className="flex items-center justify-center">
          <Image src="/customer.svg" className="shadow rounded-xl bg-gray-200 px-4" width={500} height={300}/>
        </Col>
      </Grid>
    </div>
  );
};

export default Babble;

import { Container, Text } from "@mantine/core";
import React from "react";

const Process = () => {
  return (
    <div
      id="process"
      className="bg-slate-50 min-h-screen flex flex-col items-center justify-center"
    >
      <Container className="flex flex-col h-full items-center justify-center py-8">
        <Text weight={700} size="xl" className="mb-4">
          How it works
        </Text>

      </Container>
    </div>
  )
};

export default Process;

import React, { useState } from "react";
import {
  createStyles,
  Header as HeaderMantine,
  Container,
  Group,
  Button,
  Burger,
  Title,
} from "@mantine/core";
import Sidebar from "../Sidebar";

const useStyles = createStyles((theme) => ({
  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colors.dark[3],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface Links {
  links: {
    label: string;
    link: string;
  }[];
}

const Header = ({ links }: Links) => {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useState(false);
  const items = links.map((link) => {
    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <>
      <Sidebar show={opened} setShow={toggleOpened} links={links} />
      <HeaderMantine
        className="bg-gray-900 py-2"
        height={60}
        sx={{ borderBottom: 0 }}
        mb={120}
      >
        <Container className="flex align-items-center h-full" fluid>
          <Group className="flex sm:flex-1">
            <Burger
              opened={opened}
              onClick={() => toggleOpened(!opened)}
              className={classes.burger}
              size="sm"
              color={"white"}
            />
            <Group>
              <Title className="text-white" order={3}>
                Babble
              </Title>
            </Group>
          </Group>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Group className="flex flex-1 justify-end">
            <Button
              radius="xl"
              size="md"
              sx={{ height: 30 }}
              variant="filled"
              className="border-white bg-white hover:bg-gray-300 hover:border-gray-300 text-black"
              color={"white"}
            >
              Login
            </Button>
            <Button
              size="md"
              className="bg-blue-500"
              radius="xl"
              sx={{ height: 30 }}
            >
              Sign up
            </Button>
          </Group>
        </Container>
      </HeaderMantine>
    </>
  );
};

export default Header;

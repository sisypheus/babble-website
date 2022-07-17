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
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
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
      <HeaderMantine height={60} sx={{ borderBottom: 0 }} mb={120}>
        <Container
          className="flex justify-between align-items-center h-full"
          fluid
        >
          <Group>
            <Burger
              opened={opened}
              onClick={() => toggleOpened(!opened)}
              className={classes.burger}
              size="sm"
            />
            <Group>
              <Title order={3}>Babble</Title>
            </Group>
          </Group>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Group>
            <Button
              className="bg-white text-black border border-black hover:bg-gray-500"
              radius="xl"
              sx={{ height: 30 }}
            >
              Login
            </Button>
            <Button className="bg-blue-500" radius="xl" sx={{ height: 30 }}>
              Sign up
            </Button>
          </Group>
        </Container>
      </HeaderMantine>
    </>
  );
};

export default Header;

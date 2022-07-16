import React, { useState } from "react";
import {
  createStyles,
  Header as HeaderMantine,
  Container,
  Group,
  Button,
  Burger,
} from "@mantine/core";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

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

interface HeaderActionProps {
  links: {
    label: string;
    link: string;
  }[];
}

const links: HeaderActionProps = {
  links: [
    { link: "https://www.mantine.dev", label: "Features" },
    { link: "https://www.mantine.dev", label: "Pricing" },
    { link: "https://www.mantine.dev", label: "Github" },
  ],
};

const Header = () => {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useState(false);
  const items = links.links.map((link) => {
    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <HeaderMantine height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened(!opened)}
            className={classes.burger}
            size="sm"
          />
          <Group>
            <p>Babble</p>
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
  );
};

export default Header;

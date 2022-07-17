import React, { useState } from "react";
import {
  createStyles,
  Navbar as NavbarMantine,
  Group,
  Title,
} from "@mantine/core";

import { X } from "tabler-icons-react";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colorScheme === "dark"
            ? theme.white
            : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === "dark" ? 5 : 7
            ],
        },
      },
    },
  };
});

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
  links: { link: string; label: string }[];
};

const Navbar = ({ show, setShow, links }: Props) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");

  const formattedLinks = links.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        setShow(false);
      }}
    >
      <span>{item.label}</span>
    </a>
  ));

  if (!show) return null;

  return (
    <NavbarMantine p="md" className="absolute left-0 top-0 w-3/4 h-screen">
      <NavbarMantine.Section grow>
        <Group className={classes.header} position="apart">
          <Title order={3}>Babble</Title>
          <X className="hover:cursor-pointer" onClick={() => setShow(false)} />
        </Group>
        {formattedLinks}
      </NavbarMantine.Section>
    </NavbarMantine>
  );
};

export default Navbar;

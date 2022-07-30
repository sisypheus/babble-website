import { createStyles, Container, Group, Anchor, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.colors.gray[2]}`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterProps {
  links: { link: string; label: string }[];
}

function Footer({ links }: FooterProps) {
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Anchor<"a">
      // color="dimmed"
      key={link.label}
      href={link.link}
      size="sm"
      className="text-black"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <>
      <div className="h-16 bg-slate-50"/>
      <div className={classes.footer + " bg-slate-50"}>
        <Container className={classes.inner}>
          <div className="flex items-center space-x-2 cursor-default">
            <img
              className="p-2 h-8 w-8 rounded-md bg-blue-500"
              src="/assets/logo.svg"
            />
            <Title order={4} className="font-medium">Babble</Title>
          </div>
          <Group className={classes.links}>{items}</Group>
        </Container>
      </div>
    </>
  );
}

export default Footer;

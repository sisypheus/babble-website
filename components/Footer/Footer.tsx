import { createStyles, Container, Group, Anchor, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    // borderTop: `1px solid ${theme.colors.gray[2]}`,
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
      className="text-gray-100 md:text-black"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <>
      <div className="h-16 bg-gray-900 md:bg-slate-50" />
      <div
        className={
          classes.footer +
          " bg-gray-900 md:bg-slate-50 border-solid border-0 border-t border-gray-600 md:border-gray-200"
        }
      >
        <Container className={classes.inner}>
          <div className="flex items-center space-x-2 cursor-default">
            <img
              className="p-2 h-8 w-8 rounded-md bg-blue-500"
              src="/assets/logo.svg"
            />
            <Title order={4} className="font-medium md:text-black text-white">
              Babble
            </Title>
          </div>
          <Group className={classes.links}>{items}</Group>
        </Container>
      </div>
    </>
  );
}

export default Footer;

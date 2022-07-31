import { createStyles, Container, Group, Anchor, Title } from "@mantine/core";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
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
      key={link.label}
      href={link.link}
      size="sm"
      className="text-gray-100 lg:text-black"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <>
      <div className="h-16 bg-gray-900 lg:bg-slate-50" />
      <div className="bg-gray-900 lg:bg-slate-50 border-solid border-0 border-t border-gray-600 lg:border-gray-200">
        <Container className={classes.inner}>
          <div className="flex items-center space-x-2 cursor-default">
            <div className="p-1 bg-blue-500 rounded">
              <div className="rounded h-6 w-6 bg-blue-500 relative">
                <Image
                  src="/assets/logo.svg"
                  alt="Babble logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <Title order={4} className="font-medium lg:text-black text-white">
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

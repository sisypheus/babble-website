import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 50,
  },

  item: {
    display: "flex",
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },

  supTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: theme.fontSizes.xl,
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
    letterSpacing: 0.5,
  },

  title: {
    lineHeight: 1,
    textAlign: "center",
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: "center",
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: "inline-block",
    color: theme.colorScheme === "dark" ? theme.white : "inherit",
  },
}));

const data: FeatureItem[] = [
  {
    icon: "chat.svg",
    title: "Chat",
    description: "Chat with your customers directly from your website.",
  },
  {
    icon: "customization.svg",
    title: "Customizable",
    description:
      "You can change the look and feel of the chat widget on your website.",
  },
  {
    icon: "collaboration.svg",
    title: "Collaborative",
    description:
      "Invite up to 5 team members to help you with customer chats and support requests.",
  },
  {
    icon: "ligthweight.svg",
    title: "Lightweight",
    description:
      "Designed to be easily embedded in your website, with speed in mind.",
  },
];

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const Features = () => {
  const { classes } = useStyles();

  const items = data.map((item) => (
    <div className={classes.item + " flex items-center"} key={item.title}>
      <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={120}
        radius="md"
      >
        <Image src={"/assets/" + item.icon} />
      </ThemeIcon>

      <div>
        <Text weight={700} size="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text color="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <div id="features" className="bg-slate-50 min-h-screen h-full">
      <Container
        className={
          classes.wrapper + " flex flex-col items-center justify-center h-full py-8"
        }
      >
        <Text className={classes.supTitle}>FEATURES</Text>

        <Title className={classes.title} order={1}>
          Babble <span className={classes.highlight}>the</span> tool for
          customer support
        </Title>

        <Container size={660} p={0}>
          <Text color="dimmed" className={classes.description + " text-lg"}>
            An easy to use, Lightweight, and customizable customer support tool
          </Text>
        </Container>

        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
          style={{ marginTop: 30 }}
        >
          {items}
        </SimpleGrid>
        <Text className="mt-4 font-semibold">
          ... and <span className="text-sky-500">more</span> to come!
        </Text>
      </Container>
    </div>
  );
};

export default Features;

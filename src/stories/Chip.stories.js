import Chip from "../components/Chip";

export default {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    variant: {
      defaultValue: "outlined",
      control: {
        type: "select",
        options: ["outlined", "filled"],
      },
    },
    color: {
      defaultValue: "default",
      control: {
        type: "select",
        options: ["primary", "secondary", "danger", "default"],
      },
    },
    label: {
      defaultValue: "Easy",
    },
    size: {
      defaultValue: "sm",
    },
  },
};

const Template = (args) => <Chip {...args} />;

export const Outlined = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};
export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};
export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
};

export const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
};

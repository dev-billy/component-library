import Button from "../components/Button";
import { Add } from "@material-ui/icons";

const iconSize = "small";

export default {
  title: "Components/Buttons",
  component: Button,
  argTypes: {
    label: {
      defaultValue: "Default",
      description: "Button Text",
    },
    variant: {
      defaultValue: "default",
      description: "Button different variants",
      control: {
        type: "select",
        options: ["default", "outlined", "text"],
      },
    },
    disabled: {
      defaultValue: false,
    },
    disableShadow: {
      defaultValue: true,
    },
    size: {
      defaultValue: "md",
    },
    color: {
      defaultValue: "primary",
      description: "Button Colors",
      control: {
        type: "select",
        options: ["default", "primary", "secondary", "danger"],
      },
    },
    onClick: { onClick: { action: "clicked" } },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};
export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: <Add fontSize={iconSize} style={{ marginRight: "5px" }} />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  endIcon: <Add fontSize={iconSize} style={{ marginLeft: "5px" }} />,
};

import Step from "../components/Step";

export default {
  title: "Components/Step",
  component: Step,
  argTypes: {
    title: {
      defaultValue: "Step1",
    },
    variant: {
      defaultValue: "next",
      control: {
        type: "select",
        options: ["complete", "add", "next", "current"],
      },
    },
  },
};

const Templates = (args) => <Step {...args} />;

export const NextStep = Templates.bind({});

export const CurrentStep = Templates.bind({});
CurrentStep.args = {
  variant: "current",
};

export const CompleteStep = Templates.bind({});
CompleteStep.args = {
  variant: "complete",
};

export const AddStep = Templates.bind({});
AddStep.args = {
  variant: "add",
};

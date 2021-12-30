import TextEditor from "../components/TextEditor";

export default {
  title: "Components/Editor",
  component: TextEditor,
  argTypes: {
    preview: {
      defaultValue: true,
    },
  },
};

const Template = (args) => <TextEditor {...args} />;

export const RichTextEditor = Template.bind({});

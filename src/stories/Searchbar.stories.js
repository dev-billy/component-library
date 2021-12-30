import SearchBar from "../components/SearchBar";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
  argTypes: {
    placeholder: {
      defaultValue: "Search something",
    },
  },
};

const Template = (args) => <SearchBar {...args} />;

export const BasicSearch = Template.bind({});

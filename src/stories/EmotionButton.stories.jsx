import React from "react";
import EmotionButton from "./EmotionButton";
import { withDesign } from "storybook-addon-designs";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Neoflat/EmotionButton",
  component: EmotionButton,
  decorators: [withDesign],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    action: {
      control: {
        type: "select",
      },
      options: ["primary", "error"],
    },
  },

  //스토리북 전체 범위 css
  // decorators: [
  //   (TestButton) => (
  //     <div style={{ margin: '3em' }}>
  //       <TestButton />
  //     </div>
  //   ),
  // ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <EmotionButton {...args} />;

export const SmallPrimaryBtn = Template.bind({});
SmallPrimaryBtn.args = {
  label: "Text",
  size: "small",
  action: "primary",
  able: true,
};

Template.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/o6sm1kf3ov4TR04RfSEw3s/Untitled?node-id=20%3A21",
  },
};

// export const DisableSmallRedBtn = Template.bind({});
// DisableSmallRedBtn.args = {
//   fontSize: 12,
//   fontWeight: 700,
//   label: "",
//   color: "#ff513e",
//   background: "white",
//   border: "1px solid #ff513e",
// };

// export const DisableSmallGreenBtn = Template.bind({});
// DisableSmallGreenBtn.args = {
//   fontSize: 12,
//   fontWeight: 700,
//   label: "",
//   color: "#25b9b9",
//   background: "white",
//   border: "1px solid #25b9b9",
// };

// export const ActionMidiumBtn = Template.bind({});
// ActionBtn.args = {
//   size: 'midium',
//   label: 'Button',
//   color: 'red',
// };

// export const ActionLargeBtn = Template.bind({});
// ActionBtn.args = {
//   size: 'large',
//   label: 'Button',
//   color: 'red',
// };

// export const DisableMidiumBtn = Template.bind({});
// DisableMidiumBtn.args = {
//   size: 'midium',
//   label: 'Button',
//   color: 'blue',
//   background: '#25b9b9',
// };
// export const DisableLargeBtn = Template.bind({});
// DisableLargeBtn.args = {
//   size: 'large',
//   label: 'Button',
//   color: 'blue',
//   background: '#25b9b9',
// };

//개인 css
// Small.decorators = [
//   (Story) => (
//     <div style={{ margin: '8em' }}>
//       <Story />
//     </div>
//   ),
// ];

//스토리이름바꾸기
// Small.storyName = 'I am choonsik test button 테스트입니다';

import React from 'react';
import Checkbox from '../componnets/Checkbox';

export default {
    title: 'Example/Checkbox',
    component: Checkbox,
    // argTypes: {
    //     onChange: { control: {type: "text"}}
    // },
    //parameters: { actions: { argTypesRegex: '^on.*' } },
  };

  const Template = (args) => <Checkbox {...args} />;

  export const CheckBox = Template.bind({});
  CheckBox.args = {
    label: "terms & conditions",
    onChange: ()=>console.log("changed")
  }

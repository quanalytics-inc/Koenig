import React from 'react';

import {Button} from './Button';

const story = {
    title: 'Generic/Button',
    component: Button,
    parameters: {
        status: {
            type: 'uiReady'
        }
    }
};
export default story;

const Template = (args) => {
    return (
        <Button {...args} />
    );
};

export const Empty = Template.bind({});
Empty.args = {
    color: 'accent',
    size: 'small',
    width: 'regular',
    value: '',
    placeholder: 'Add button text'
};

export const WithText = Template.bind({});
WithText.args = {
    color: 'accent',
    size: 'small',
    width: 'regular',
    value: 'Subscribe',
    placeholder: 'Add button text'
};
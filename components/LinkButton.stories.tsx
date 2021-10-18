import React from "react"
import { Story, Meta } from '@storybook/react'

import LinkButton from "./LinkButton"

export default {
  title: 'My/Button',
  component: LinkButton,
  argTypes: {
    bgc: { control: 'color' }
  }
} as Meta<typeof LinkButton>

const Template: Story<typeof LinkButton> = (args) => <LinkButton {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {}

export const RedButton = Template.bind({})
RedButton.args = {
  name: 'link_button_red'
}
import React from "react"
import { Story, Meta } from '@storybook/react'

import GlobalNav from "./GlobalNav"

export default {
  title: 'GlobalNav',
  component: GlobalNav,
  decorators: [ story => <div style={{ width: '70px' }}>{story()}</div> ]
} as Meta

const Template: Story = (args) => <GlobalNav />

export const Default = Template.bind({})
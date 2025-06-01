import type { Meta, StoryObj } from '@storybook/react';
import { H1 } from './typography';

const meta = {
  title: 'H1',
  component: H1,
} satisfies Meta<typeof H1>;


export default meta;
type Story = StoryObj<typeof meta>;

export const BaseComponentName: Story = {
  args: {
    children: 'Heading 1',
    className: "text-red-500",
  },
};
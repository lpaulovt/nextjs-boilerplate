import { Story, Meta } from '@storybook/react/types-6-0'
import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Title', 'React Avaçado com William Justen')}
    description={text(
      'Description',
      'TypesScript, ReactJS, NextJS e Styled Components'
    )}
  />
)

export const Secondary: Story = () => (
  <Main
    title={text('Title', 'React Avançado!')}
    description={text(
      'Description',
      'TypesScript, ReactJS, NextJS e Styled Components'
    )}
  />
)

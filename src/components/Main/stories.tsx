import { withKnobs, text } from '@storybook/addon-knobs'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('Title', 'React Avaçado com William Justen')}
    description={text(
      'Description',
      'TypesScript, ReactJS, NextJS e Styled Components'
    )}
  />
)

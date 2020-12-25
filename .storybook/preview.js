import { addDecorator } from '@storybook/react'
import withGlobalStyles from './withGlobalStyles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

addDecorator(withGlobalStyles)

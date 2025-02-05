/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact',
  },
});

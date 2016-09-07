import { EXPAND_SECTION } from './../constants';

const toggleSection = id => ({
  type: EXPAND_SECTION,
  id
});

export {
  toggleSection
};


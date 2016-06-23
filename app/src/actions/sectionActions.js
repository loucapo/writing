/**
 * Created by rharik on 5/13/16.
 */

import { EXPAND_SECTION } from './../constants';

const toggleSection = (id) => ({
    type: EXPAND_SECTION,
    id
});

export {
    toggleSection
};

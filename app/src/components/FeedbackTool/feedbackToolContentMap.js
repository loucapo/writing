import { standardModel } from './SideMenu/Buttons/modalFormModel';
import { standardForm } from './SideMenu/Buttons/modalForm';

const feedbackToolContentMap = {
  other: {
    title: 'Other',
    model: standardModel,
    form: standardForm
  },
  fragment: {
    title: 'Fragment',
    resourceLinks: [4, 5, 6]
  },
  reasonSupport: {
    title: 'Reason and Support',
    resourceLinks: [4, 5, 6],
    model: standardModel,
    form: standardForm
  }
};

export default feedbackToolContentMap;


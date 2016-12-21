import { standardModel } from './SideMenu/Buttons/modalFormModel';
import { standardForm } from './SideMenu/Buttons/modalForm';

const feedbackToolContentMap = {
  other: {
    title: 'Other',
    model: standardModel,
    form: standardForm,
    color: '#00758E'
  },
  fragment: {
    title: 'Fragment',
    resourceLinks: [4, 5, 6],
    color: '#dd5714'
  },
  reasonSupport: {
    title: 'Reason and Support',
    resourceLinks: [4, 5, 6],
    model: standardModel,
    form: standardForm,
    color: '#00758E'
  }
};

export default feedbackToolContentMap;


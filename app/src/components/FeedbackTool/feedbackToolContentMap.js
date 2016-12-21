import { standardModel } from './SideMenu/Buttons/modalFormModel';
import { standardForm } from './SideMenu/Buttons/modalForm';

const feedbackToolContentMap = {
  other: {
    title: 'Other',
    model: standardModel,
    form: standardForm,
    icon: 'comment',
    color: '#00758E'
  },
  fragment: {
    title: 'Fragment',
    resourceLinks: [4, 5, 6],
    icon: 'comment_text',
    color: '#dd5714'
  },
  reasonSupport: {
    title: 'Reason and Support',
    resourceLinks: [4, 5, 6],
    model: standardModel,
    form: standardForm,
    icon: 'comment',
    color: '#00758E'
  },
  goodJob: {
    title: 'Good Job!',
    icon: 'comment_thumbs_up',
    color: '#3b822e'
  }
};

export default feedbackToolContentMap;


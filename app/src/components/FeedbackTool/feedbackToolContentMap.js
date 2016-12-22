import { standardModel } from './SideMenu/Buttons/modalFormModel';
import { standardForm } from './SideMenu/Buttons/modalForm';

const feedbackToolContentMap = {
  thesis: {
    title: 'Thesis',
    color: 'blue',
    resourceLinks: [4, 5, 6],
    model: standardModel,
    form: standardForm,
    icon: 'comment',
    color: '#00758E'
  },
  reasonSupport: {
    title: 'Reason and Support',
    color: 'blue',
    resourceLinks: [7, 8, 9],
    model: standardModel,
    form: standardForm
  },
  interpretation: {
    title: 'Interpretation',
    color: 'blue',
    resourceLinks: [4, 5, 6],
    model: standardModel,
    form: standardForm
  },
  paragraphDev: {
    title: 'Paragraph Development',
    color: 'blue',
    resourceLinks: [4, 5, 6],
    model: standardModel,
    form: standardForm
  },
  research: {
    title: 'Integration of Research',
    color: 'blue',
    resourceLinks: [4, 5, 6],
    model: standardModel,
    form: standardForm
  },
  counterarg: {
    title: 'Counterarguments',
    color: 'blue',
    resourceLinks: [4, 5, 6],
    model: standardModel,
    form: standardForm
  },
  other: {
    title: 'Other',
    color: 'blue',
    resourceLinks: [4, 5, 6],
    model: standardModel,
    form: standardForm
  },
  goodJob: {
    title: 'Good Job',
    resourceLinks: [4, 5, 6],
    model: standardModel,
    form: standardForm,
    icon: 'comment_thumbs_up',
    color: '#3b822e'
  },
  fragment: {
    title: 'Fragment',
    resourceLinks: [4, 5, 6]
    form: standardForm,
    icon: 'comment_text',
    color: '#dd5714'
  }
};

export default feedbackToolContentMap;


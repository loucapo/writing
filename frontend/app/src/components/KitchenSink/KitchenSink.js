import React, {Component} from 'react';
import moment from 'moment';
import MLAccordion from '../MLAccordion/MLAccordion';
import MLCard from '../MLCard/MLCard';
import MLDropdown from '../MLDropdown/MLDropdown';
import MLTable from '../MLTable/MLTable';
import MLButton from '../MLButton/MLButton';
import MLDialog from '../MLDialog/MLDialog';
import MLMessage from '../MLMessage/MLMessage';
import MLSpinner from '../MLSpinner/MLSpinner';
import DemoModal from '../MLModal/Modals/DemoModal';
import CheckboxForm from '../MLCheckboxForm/MLCheckboxForm';

import styles from './kitchenSink.css';

const dummyCriteria = [
  {
    id: '1234',
    createdDate: moment(new Date()).format('MM/DD/YYYY'),
    title: 'asdf',
    description: 'desc',
    useInRubric: true,
    rubricValues: {
      1: 'below',
      2: 'nearly',
      3: 'meets',
      4: 'exceeds'
    },
    draftFocus: {
      nice: '',
      needs: '',
      extensive: ''
    }
  },
  {
    id: '5678',
    createdDate: moment(new Date()).format('MM/DD/YYYY'),
    title: 'qwerty',
    description: 'desc',
    useInRubric: true,
    rubricValues: {
      1: 'below',
      2: 'nearly',
      3: 'meets',
      4: 'exceeds'
    },
    draftFocus: {
      nice: '',
      needs: '',
      extensive: ''
    }
  },
  {
    id: '9012',
    createdDate: moment(new Date()).format('MM/DD/YYYY'),
    title: 'uiop',
    description: 'desc',
    useInRubric: true,
    rubricValues: {
      1: 'below',
      2: 'nearly',
      3: 'meets',
      4: 'exceeds'
    },
    draftFocus: {
      nice: '',
      needs: '',
      extensive: ''
    }
  }
];

const dummyAccordionList = [
  {
    title: 'test',
    content: 'content test',
    dataId: 'test'
  },
  {
    title: 'second test',
    content: 'second content test',
    dataId: 'second test'
  }
];

class KitchenSink extends Component {
  state = {
    modalIsOpen: false,
    showDialog: false
  };

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  selectOnChange = (selected) => {
    console.log(selected);
  };

  showDialog = () => {
    this.setState({
      showDialog: true
    });
  };

  closeDialog = confirm => {
    confirm = confirm || false;
    this.setState(
      {
        showDialog: false
      },
      function doSomething() {
        if (confirm) {
          /* eslint-disable no-alert */
          window.alert('Confirm logic would be run here.');
          /* eslint-enable no-alert */
        }
      }
    );
  };

  render() {
    return (
      <div className={styles.container}>

        {/*accordion component demo*/}
        <div className={styles.padder}>
          <h3>Accordion Component</h3>
          <p>
            first child is the hidden content
          </p>
          <h4>Parameters:</h4>
          <ol>
            <li>type - data-id placed on header of accordion</li>
            <li>title - text content of accordian heading</li>
          </ol>
        </div>
        <div className="spacer">
          <MLAccordion list={dummyAccordionList}>
            <div>
              Bacon isplum dollars arnet coalminer dorito plasmatron femur. Es stupor linen loin ostructo coma pabari
              el domino caro pepar un nyet valicori. Tosto prima venza por eppa par nappa nop op bop deh sizzla.
            </div>
          </MLAccordion>
        </div>

        {/*card component demo*/}
        <div className={styles.padder}>
          <h3>Card Component</h3>
          <p>
            child is the body of the card; must be wrapped in one element
          </p>
          <h4>Parameters:</h4>
          <ol>
            <li>type: data-id placed on the header of the card</li>
            <li>title: text content of card heading</li>
            <li>role: instructor turns on side menu, anything else turns off</li>
            <li>options: optional icons or buttons in card header (such as for editting or deleting) </li>
          </ol>
        </div>
        <div className="spacer">
          <MLCard
            type="rubric"
            title="Final Rubric"
            role="instructor"
            options={<div>Side icons</div>}>
            <div>
              Bacon ipsum dolor amet sausage beef ribs meatloaf beef landjaeger. Alcatra salami short loin drumstick.
              Tongue t-bone shoulder, beef flank beef ribs biltong capicola pork chop hamburger strip steak meatloaf
              kielbasa. Rump burgdoggen drumstick fatback t-bone picanha. Boudin landjaeger corned beef flank porchetta
              short loin. Pork belly ball tip boudin kielbasa picanha.
            </div>
          </MLCard>
        </div>

        {/*dialog component demo*/}
        <div className={styles.padder}>
          <h3>Dialog Component</h3>
          <p>
            Renders a confirmation <a href="#" onClick={this.showDialog}>dialog</a> which is totally customizable
          </p>
          <h4>Parameters:</h4>
          <ol>
            <li>title: the title at the top of the confirmation window</li>
            <li>message: string message to appear in the dialog</li>
            <li>show: boolean used to taggle the dialog on and off</li>
            <li>children: the children components should be one or more MLButton components on the dialog</li>
          </ol>
        </div>
        <div className="spacer">
          <MLDialog
            title={'This is the MLDialog title'}
            message={'This is the MLDialog message'}
            show={this.state.showDialog}
          >
            <MLButton
              title="Cancel"
              bordered={true}
              color="red"
              dataId="dialog-cancel"
              handleClick={this.closeDialog.bind(this, false)}
            />
            <MLButton
              title="Submit"
              handleClick={this.closeDialog.bind(this, true)}
              dataId="dialog-submit"
            />
          </MLDialog>
        </div>

        {/*dropdown component demo*/}
        <div className={styles.padder}>
          <h3>Dropdown Component</h3>
          <p>
            Renders a selectable drop down menu into the page
          </p>
          <h4>Parameters:</h4>
          <ol>
            <li>title: the default text of the dropdown</li>
            <li>content: an array of options which may or may not include the title in the list</li>
          </ol>
        </div>
        <div className="spacer">
          <MLDropdown
            defaultOption={{id: '0000', value: 'No Rubric'}}
            options={[
              {id: '1234', value: 'Option1'},
              {id: '5678', value: 'Option2'},
              {id: '9012', value: 'Option3'},
              {id: '1111', value: 'Option4'}
            ]}
            onChange={this.selectOnChange}
            selected="0000"
            contentDataId="rubric-selection-content"
            openDataId="rubric-selection-open"
          />
        </div>

        {/*message component demo*/}
        <div className={styles.padder}>
          <h3>Message Component</h3>
          <p>
            Displays one of four possible messages in a page
          </p>

          <h4>Parameters:</h4>
          <ol>
            <li>message: a string to display in the message box</li>
            <li>messageType: string of four possible types, default, success, warning, error</li>
            <li>iconType: a string name of the icon wanted for display</li>
          </ol>

          <MLMessage
            message={'default message would go here.'}
            iconType="comment_text"
          />
          <MLMessage
            message={'success message would go here.'}
            messageType="success"
            iconType="comment_thumbs_up"
          />
          <MLMessage
            message={'warning message would go here.'}
            messageType="warning"
            iconType="info_outline"
          />
          <MLMessage
            message={'error message would go here.'}
            messageType="error"
            iconType="alert_outline"
          />

        </div>

        {/*modal component demo*/}
        <div className={styles.padder}>
          <h3>Modal Component</h3>
          <p>
            Opens a customizable modal with an overlay
          </p>

          <h4>Parameters:</h4>
          <ol>
            <li>closeModal: function to close modal; would be identical to all other modals</li>
            <li>isOpen: current boolean state of the modal</li>
          </ol>

          <DemoModal closeModal={this.toggleModal} isOpen={this.state.modalIsOpen} />

          <div className="spacer">
            <a onClick={this.toggleModal}>Open Demo Modal</a>
          </div>
        </div>

        {/*spinner component demo*/}
        <div className={styles.padder}>
          <h3>Spinner Component(s)</h3>
          <h4>Parameters:</h4>
          <ol>
            <li>color: string representing css class; defaults to `red`; other CDL accepted color is `gray`</li>
          </ol>
          <h4>Default Spinner:</h4>
          <MLSpinner />
          <h4>Gray Spinner:</h4>
          <MLSpinner
            color="gray"
          />
        </div>

        {/*table component demo*/}
        <div className={styles.padder}>
          <h3>Table Component</h3>
          <p>
            asdf
          </p>
          <h4>Parameters:</h4>
          <ol>
            <li>qwerty</li>
          </ol>
        </div>
        <div className="spacer">
          <MLTable
            criteriaList={dummyCriteria}
          />
        </div>

        {/*checkbox component demo*/}
        <div className={styles.padder}>
          <h3>Checkbox List Form</h3>
          <p>
            Renders a list with selectable checkboxes that can be submitted along with 'save' and 'cancel' buttons
          </p>

          <h4>Parameters:</h4>
          <ol>
            <li>fields: array of objects for field content (required)</li>
            <li>selectedFields: array of objects of fields already selected (required)</li>
            <li>saveForm: function that processes form once submitted (required)</li>
            <li>closeModal: closes modal if form is rendered inside a modal</li>
            <li>activityId</li>
            <li>draftId</li>
            <li>selectionLimit: optional max number of fields that can be selected</li>
            <li>isFormListable: boolean to list selected fields at bottom of form</li>
            <li>isFormTogglable: boolean to display/disable expand and collapse of fields</li>
          </ol>
        </div>
        <div className="spacer">
          <h5>Checkbox Form with Selection Limit of 2</h5>
          <CheckboxForm
            fields={[
              {id: '1', question: 'first'},
              {id: '2', question: 'second'},
              {id: '3', question: 'third'},
              {id: '4', question: 'four'}
            ]}
            selectedFields={[]}
            saveForm={() => console.log('submitted!')}
            selectionLimit={2}
          />

          <h5>Checkbox Form with Toggle Enabled</h5>
          <CheckboxForm
            fields={[
              {id: '1', title: 'first'},
              {id: '2', title: 'second'},
              {id: '3', title: 'third'},
              {id: '4', title: 'four'}
            ]}
            selectedFields={[]}
            saveForm={() => console.log('submitted!')}
            isFormTogglable={true}
          />
        </div>
      </div>
    );
  }
}

export default KitchenSink;

import React, {} from 'react';
import moment from 'moment';
import MLCard from '../MLCard/MLCard';
import MLDropdown from '../MLDropdown/MLDropdown';
import MLTable from '../MLTable/MLTable';

import styles from './kitchenSink.css';

const KitchenSink = () => {

  let selectOnChange = (selected) => {
    console.log(selected);
  };

  let dummyCriteria = [
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

  return (
    <div className={styles.container}>
      {/*card component demo*/}
      <div className={styles.padder}>
        <h3>Card Component</h3>
        <p>
          first child is the right hand side of the title of the card (like a side menu) <br />
          second child is the body
        </p>
        <h4>Parameters:</h4>
        <ol>
          <li>type - data-id placed on the header of the card</li>
          <li>title - text content of card heading</li>
          <li>role - instructor turns on side menu, anything else turns off</li>
        </ol>
      </div>
      <div className="spacer">
        <MLCard type="rubric" title="Final Rubric" role="instructor">
          <div>Side icons</div>
          <div>
            Bacon ipsum dolor amet sausage beef ribs meatloaf beef landjaeger. Alcatra salami short loin drumstick.
            Tongue t-bone shoulder, beef flank beef ribs biltong capicola pork chop hamburger strip steak meatloaf
            kielbasa. Rump burgdoggen drumstick fatback t-bone picanha. Boudin landjaeger corned beef flank porchetta
            short loin. Pork belly ball tip boudin kielbasa picanha.
          </div>
        </MLCard>
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
          placeholder="Select Something"
          options={[
            {id: '1234', value: 'Option1'},
            {id: '5678', value: 'Option2'},
            {id: '9012', value: 'Option3'},
            {id: '1111', value: 'Option4'}
          ]}
          onChange={selectOnChange}
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


    </div>
  );
};

// KitchenSink.propTypes = {
//   message: PropTypes.string,
//   alertType: PropTypes.string,
//   iconType: PropTypes.string
// };

export default KitchenSink;

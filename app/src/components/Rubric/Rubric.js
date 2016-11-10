import React, {PropTypes} from 'react';

// import ActivitySummary from './ActivitySummary/ActivitySummary';
// import DraftSection from './DraftSection/DraftSection';

import rubricCss from './rubric.css';

const Rubric = () => {
  // if (!activity || drafts.length <= 0) {
  //   return null;
  // }
  return (
    <section className={rubricCss.rubric_container}>
      <div className={rubricCss.category_name}>
        <div className={rubricCss.category_name_item}>

        </div>
        <div className={rubricCss.category_name_item}>
          4
          <div>Exceeds Expectations</div>
        </div>
        <div className={rubricCss.category_name_item}>
          3
          <div>Meets Expectations</div>
        </div>
        <div className={rubricCss.category_name_item}>
          2
          <div>Nearly Meets Expectations</div>
        </div>
        <div className={rubricCss.category_name_item}>
          1
          <div>Fails To Meet Expectations</div>
        </div>
      </div>

      <div className={rubricCss.category}>
        <div className={rubricCss.heading}>
          <div className={rubricCss.heading_item}>
            <div className={rubricCss.heading_name}>
              Thesis
            </div>
          </div>
          <div className={rubricCss.heading_item}>
            <div className={rubricCss.heading_name}>
              Claims
            </div>
          </div>
          <div className={rubricCss.heading_item}>
            <div className={rubricCss.heading_name}>
              Evidence
            </div>
          </div>
          <div className={rubricCss.heading_item}>
            <div className={rubricCss.heading_name}>
              Logical Appeals
            </div>
          </div>
          <div className={rubricCss.heading_item}>
            <div className={rubricCss.heading_name}>
              Counterargument
            </div>
          </div>
        </div>

        <div className={rubricCss.category_score}>
          <div className={rubricCss.category_item}>
            Introduces a focused, arguable thesis
          </div>
          <div className={rubricCss.category_item}>
            s
          </div>
          <div className={rubricCss.category_item}>
            d
          </div>
          <div className={rubricCss.category_item}>
            f
          </div>
          <div className={rubricCss.category_item}>
            g
          </div>
        </div>

        <div className={rubricCss.category_score}>
          <div className={rubricCss.category_item}>
            Introduces an arguable thesis that lacks focus
          </div>
          <div className={rubricCss.category_item}>
            s
          </div>
          <div className={rubricCss.category_item}>
            d
          </div>
          <div className={rubricCss.category_item}>
            f
          </div>
          <div className={rubricCss.category_item}>
            g
          </div>
        </div>

        <div className={rubricCss.category_score}>
          <div className={rubricCss.category_item}>
            Introduces a vague or broad thesis
          </div>
          <div className={rubricCss.category_item}>
            s
          </div>
          <div className={rubricCss.category_item}>
            d
          </div>
          <div className={rubricCss.category_item}>
            f
          </div>
          <div className={rubricCss.category_item}>
            g
          </div>
        </div>

        <div className={rubricCss.category_score}>
          <div className={rubricCss.category_item}>
            Lacks an arguable thesis
          </div>
          <div className={rubricCss.category_item}>
            s
          </div>
          <div className={rubricCss.category_item}>
            d
          </div>
          <div className={rubricCss.category_item}>
            f
          </div>
          <div className={rubricCss.category_item}>
            g
          </div>
        </div>
      </div>
    </section>
  );
};

Rubric.propTypes = {
  // activity: PropTypes.object,
  // drafts: PropTypes.array
};


export default Rubric;

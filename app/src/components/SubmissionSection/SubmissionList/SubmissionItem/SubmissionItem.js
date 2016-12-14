import React from 'react';
import { Link } from 'react-router';
import submissionItemCss from './submissionItem.css';
import MLIcon from 'ml-react-cdl-icons';

const SubmissionItem = () => (
  <tbody>


    <tr className={ submissionItemCss.row }>
      <td>
        Shakespeare, William
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <span className={submissionItemCss.check}>
          <MLIcon
            iconTitle="check"
            iconFill="#ffffff"
            iconType="check"
            iconWidth="20"
            iconHeight="20"
            viewBox="0 0 24 24"
          />
        </span>
      </td>
      <td className={submissionItemCss.reviewSent}>
        Review sent Sep 22, 2016
      </td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Faulkner, William
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <span className={submissionItemCss.check}>
          <MLIcon
            iconTitle="check"
            iconFill="#ffffff"
            iconType="check"
            iconWidth="20"
            iconHeight="20"
            viewBox="0 0 24 24"
          />
        </span>
      </td>
      <td>
        <a href="#">Send Review</a>
      </td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Austen, Jane
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <Link to="/feedbackTool/123">Start Review</Link>
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        O'Connor, Flannery
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <Link to="/feedbackTool/123">Start Review</Link>
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Walker, Alice
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <Link to="/feedbackTool/123">Start Review</Link>
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Jackson, Shirley
      </td>
      <td>&mdash;</td>
      <td>
        &mdash;
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Chopin, Kate
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <Link to="/feedbackTool/123">Start Review</Link>
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Hurston, Zora
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <span className={submissionItemCss.check}>
          <MLIcon
            iconTitle="check"
            iconFill="#ffffff"
            iconType="check"
            iconWidth="20"
            iconHeight="20"
            viewBox="0 0 24 24"
          />
        </span>
      </td>
      <td>
        <a href="#">Send Review</a>
      </td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Wollstonecraft, Mary
      </td>
      <td>&mdash;</td>
      <td>
        &mdash;
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Morrison, Toni
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <Link to="/feedbackTool/123">Start Review</Link>
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Conrad, Joseph
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <Link to="/feedbackTool/123">Start Review</Link>
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Dickens, Charles
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <Link to="/feedbackTool/123">Start Review</Link>
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Hawthorne, Nathaniel
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <span className={submissionItemCss.check}>
          <MLIcon
            iconTitle="check"
            iconFill="#ffffff"
            iconType="check"
            iconWidth="20"
            iconHeight="20"
            viewBox="0 0 24 24"
          />
        </span>
      </td>
      <td>
        <a href="#">Send Review</a>
      </td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Chaucer, Geoffrey
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <Link to="/feedbackTool/123">Start Review</Link>
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Melville, Herman
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <Link to="/feedbackTool/123">Start Review</Link>
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Wilde, Oscar
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <Link to="/feedbackTool/123">Start Review</Link>
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Gilman, Charlotte
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <Link to="/feedbackTool/123">Start Review</Link>
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Milton, John
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <Link to="/feedbackTool/123">Start Review</Link>
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Cisneros, Sandra
      </td>
      <td>Sep 18, 2016</td>
      <td>
        <Link to="/feedbackTool/123">Start Review</Link>
      </td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        James, Henry
      </td>
      <td>&mdash;</td>
      <td>&mdash;</td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Joyce, James
      </td>
      <td>&mdash;</td>
      <td>&mdash;</td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Fitzgerald, Francis
      </td>
      <td>&mdash;</td>
      <td>&mdash;</td>
      <td>&mdash;</td>
    </tr>


    <tr className={ submissionItemCss.row }>
      <td>
        Woolf, Virginia
      </td>
      <td>&mdash;</td>
      <td>&mdash;</td>
      <td>&mdash;</td>
    </tr>

  </tbody>
);

export default SubmissionItem;

import React from 'react';
import DraftFeedbackItem from './DraftFeedbackItem';
const nl2br = require('react-nl2br');

import draftItem from './draftItem.css';


let DraftItem = React.createClass({
	                    render() {
		                  let draft = this.props.draft;
		                  let feedbacks = [];
		                    draft.rightSideStuff.forEach(function(feedback, key) {
			                    feedbacks.push(<DraftFeedbackItem feedback={feedback} key={key} />);
		});
		                    return (
			<li className={ draftItem.item }>
				<header className={ draftItem.header }>
					<div className={ draftItem.draftInfo}>
						<div className={draftItem.draftOrder}>
								{draft.draftId}
						</div>
						<div className={draftItem.reviewLabel}>
							{draft.reviewType}
						</div>
						<div>
							<a className={ draftItem.editAction } href="#">Edit {draft.draftId}</a>
						</div>
					</div>

					<div>
						<span className={draftItem.strong}>
							Due:
						</span>
						&nbsp;
						{draft.dueDate}
					</div>
				</header>
				<section className={ draftItem.summary }>
					<div className={ draftItem.left }>
						<div>
							<span className={draftItem.summaryLabel}>
								Learning Objectives:
							</span>
							<span className={draftItem.summaryContainer}>
								{nl2br(draft.learningObjective)}
							</span>
						</div>
						<div className={ draftItem.grade }>
							<span className={draftItem.summaryLabel}>
								Grade:
							</span>
							&nbsp;
							<span>
								{draft.grade}
							</span>
						</div>
					</div>
					<div className={ draftItem.right }>
						{feedbacks}
					</div>
				</section>
			</li>
		);
	}
});

export default DraftItem;

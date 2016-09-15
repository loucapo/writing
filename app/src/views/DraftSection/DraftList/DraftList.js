import React from 'react';
import DraftItem from './DraftItem/DraftItem';

import draftList from './draftList.css';

let DraftList = React.createClass({
	                    render() {
		                  let drafts = [];
		                    DRAFTS.forEach(function(draft, key) {
			                    drafts.push(<DraftItem draft={draft} key={key} />);
		});
		                    return (
			<div className={ draftList.draftGroup }>
				<ul className={ draftList.items }>
					{drafts}
				</ul>
				<div className={ draftList.draftAction }>
					<a href="#"><span className={draftList.add_draft_icon}>&#8853;</span> Add Another Draft</a>
				</div>
			</div>
		);
	}
});

let DRAFTS = [
	                    {
		                                        draftId: 'Draft 1',
		                                        reviewType: 'Instructor Review',
		                                        dueDate: 'Thursday Jan 1, 2016',
		                                        learningObjective: '[Introduction] Thesis\n[Body] Move bodies with your eloquaint words and such.\n[Conclusion]What you say?',
		                                        grade: 'Incomplete/Complete',
		                                        rightSideStuff: [
			                    {
				                                        label: 'Student Reflection Questions:',
				                                        text: 'The primary argumentations...\nEvidence can and will be used against you...'
			                    },
			                    {
				                                        label: 'Post Instructor Feedback Survery Prompt:',
				                                        text: 'Put the microphone against the speaker to make everyone leave.'
			                    }
		]
	                    },
	                    {
		                                        draftId: 'Draft 2',
		                                        reviewType: 'Peer Review',
		                                        dueDate: 'Tuesday Jan 5, 2016',
		                                        learningObjective: 'Randomized',
		                                        grade: 'Incomplete/Complete',
		                                        rightSideStuff: [
			                    {
				                                        label: 'Peer Feedback Sruvey:',
				                                        text: 'Did the writer grab you by the ears and bury your face in their attention gnabbing miracle work of literacy?\nDid the organization approach you in a Big Brother context?\nDid the ending come soon enough?\nDid the voice and style make you think of a whimsical limerick?'
			                    }
		]
	                    },
	                    {
		                                        draftId: 'Final Draft',
		                                        reviewType: 'Instructor Review',
		                                        dueDate: 'Thursday Jan 8, 2016',
		                                        learningObjective: 'Selectable',
		                                        grade: 'Letter Grade',
		                                        rightSideStuff: [
			                    {
				                                        label: 'Final Reflection Questions:',
				                                        text: 'The most challenging part of this assignment was learning to read and write or...\nI think my readers will not faint because...\nFinally, I want you to know that I called to say I love you.'
			                    },
			                    {
				                                        label: 'Post Instructor Feedback Survey Prompt:',
				                                        text: 'Now that everyone has left the party besides you and I what would you like to philosophize about?'
			                    },
			                    {
				                                        label: 'Post Post Script:',
				                                        text: 'I told you so.'
			                    }
		]
	                    }
];

export default DraftList;

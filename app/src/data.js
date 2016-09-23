module.exports = function () {

    const activity = {
        "id": "13630184-5955-4dbe-9908-ab065f1bcad2",
        "title": "Assignment Title",
        "desc": "Drafting/Revising Assignment\nENG101 Introduction to writing",
        "rhetoricalGenre": "Argument",
        "rubric": "Argument",
        "prompt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor ex tincidunt auctor placerat. Etiam "
        + "nec dui id mauris sagittis dignissim. Praesent ultricies pharetra suscipit. Donec a tempor arcu. Suspendisse "
        + "tempor arcu massa, sit amet rutrum arcu ultricies non. Morbi gravida elit eu mauris malesuada gravida. "
        + "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse fringilla "
        + "ac velit non ornare. Etiam dignissim at odio nec tincidunt. Aliquam venenatis consequat vehicula. Donec "
        + "maximus sodales risus, at ultricies dui tincidunt eu.",
        "drafts": ["1b4318e5-8e45-40dd-a1de-0cd1424b94ef", "2b4318e5-8e45-40dd-a1de-0cd1424b94ef", "3b4318e5-8e45-40dd-a1de-0cd1424b94ef"]
    }

    const draft1 = {
        "id": "1b4318e5-8e45-40dd-a1de-0cd1424b94ef",
        "type": "Instructor Review",
        "dueData": "Thursday Jan 1, 2016",
        "details": {
            "gradingPolicy": "Incomplete/Complete",
            "learningObjectives": ["[Introduction] Thesis", "[Body] Move bodies with your eloquaint words and such.", "[Conclusion]What you say?"],
            "studentReflectionQuestions": ["The primary argumentations...", "Evidence can and will be used against you..."],
            "postInstructorFeedback": ["Put the microphone against the speaker to make everyone leave."]
        }
    }

    const draft2 = {
        "id": "2b4318e5-8e45-40dd-a1de-0cd1424b94ef",
        "type": "Peer Review",
        "dueData": "Tuesday Jan 5, 2016",
        "details": {
            "gradingPolicy": "Incomplete/Complete",
            "peerReviewGroups": "Randomized",
            "peerFeedbackSurvey": ["Did the writer grab you by the ears and bury your face in their attention gnabbing miracle work of literacy?",
                "Did the organization approach you in a Big Brother context?",
                "Did the ending come soon enough?",
                "Did the voice and style make you think of a whimsical limerick?"]
        }
    }

    const draft3 = {
        "id": "3b4318e5-8e45-40dd-a1de-0cd1424b94ef",
        "type": "Instructor Review",
        "dueData": "Thursday Jan 8, 2016",
        "details": {
            "gradingPolicy": "Letter Grade",
            "postInstructorFeedback": ["Now that everyone has left the party besides you and I what would you like to philosophize about?"],
            "finalReflectionSurvey": ["The most challenging part of this assignment was learning to read and write or...",
                "I think my readers will not faint because...",
                "Finally, I want you to know that I called to say I love you."]
        }
    }

    const activity2 = {
        "id": "23630184-5955-4dbe-9908-ab065f1bcad2",
        "title": "Assignment Title",
        "desc": "Drafting/Revising Assignment\nENG101 Introduction to writing",
        "rhetoricalGenre": "Argument",
        "rubric": "Argument",
        "prompt": "blah blah blahblah blah blahblah blah blahLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor ex tincidunt auctor placerat. Etiam "
        + "nec dui id mauris sagittis dignissim. Praesent ultricies pharetra suscipit. Donec a tempor arcu. Suspendisse "
        + "tempor arcu massa, sit amet rutrum arcu ultricies non. Morbi gravida elit eu mauris malesuada gravida. "
        + "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse fringilla "
        + "ac velit non ornare. Etiam dignissim at odio nec tincidunt. Aliquam venenatis consequat vehicula. Donec "
        + "maximus sodales risus, at ultricies dui tincidunt eu.",
        "drafts": ["4b4318e5-8e45-40dd-a1de-0cd1424b94ef", "5b4318e5-8e45-40dd-a1de-0cd1424b94ef", "6b4318e5-8e45-40dd-a1de-0cd1424b94ef"]
    }

    const draft4 = {
        "id": "4b4318e5-8e45-40dd-a1de-0cd1424b94ef",
        "type": "Instructor Review",
        "dueData": "Thursday Jan 1, 2017",
        "details": {
            "gradingPolicy": "Incomplete/Complete",
            "learningObjectives": ["[Introduction] Thesis bla bla bla", "[Body] Move bodies with your eloquaint words and such.", "[Conclusion]What you say?"],
            "studentReflectionQuestions": ["The primary argumentations...", "blah blah blah","Evidence can and will be used against you..."],
            "postInstructorFeedback": ["blah blah blah Put the microphone against the speaker to make everyone leave."]
        }
    }

    const draft5 = {
        "id": "5b4318e5-8e45-40dd-a1de-0cd1424b94ef",
        "type": "Peer Review",
        "dueData": "Tuesday Jan 5, 2017",
        "details": {
            "gradingPolicy": "Incomplete/Complete",
            "peerReviewGroups": "Randomized",
            "peerFeedbackSurvey": ["blah blah blah Did the writer grab you by the ears and bury your face in their attention gnabbing miracle work of literacy?",
                "blah blah blah Did the organization approach you in a Big Brother context?",
                "vblah blah blahDid the ending come soon enough?",
                "blah blah blahDid the voice and style make you think of a whimsical limerick?"]
        }
    }

    const draft6 = {
        "id": "6b4318e5-8e45-40dd-a1de-0cd1424b94ef",
        "type": "Instructor Review",
        "dueData": "Thursday Jan 8, 2017",
        "details": {
            "gradingPolicy": "Letter Grade",
            "postInstructorFeedback": ["blah blah blah Now that everyone has left the party besides you and I what would you like to philosophize about?"],
            "finalReflectionSurvey": ["blah blah blah The most challenging part of this assignment was learning to read and write or...",
                "blah blah blahI think my readers will not faint because...",
                "blah blah blahFinally, I want you to know that I called to say I love you."]
        }
    }



    const one = `INSERT INTO activity (id, "document") VALUES ('13630184-5955-4dbe-9908-ab065f1bcad2', '${JSON.stringify(activity)}');`;
    const two = `INSERT INTO draft (id, "document") VALUES ('1b4318e5-8e45-40dd-a1de-0cd1424b94ef', '${JSON.stringify(draft1)}');`;
    const three = `INSERT INTO draft (id, "document") VALUES ('2b4318e5-8e45-40dd-a1de-0cd1424b94ef', '${JSON.stringify(draft2)}');`;
    const four = `INSERT INTO draft (id, "document") VALUES ('3b4318e5-8e45-40dd-a1de-0cd1424b94ef', '${JSON.stringify(draft3)}');`;
    const five = `INSERT INTO activity (id, "document") VALUES ('23630184-5955-4dbe-9908-ab065f1bcad2', '${JSON.stringify(activity)}');`;
    const six = `INSERT INTO draft (id, "document") VALUES ('4b4318e5-8e45-40dd-a1de-0cd1424b94ef', '${JSON.stringify(draft4)}');`;
    const seven = `INSERT INTO draft (id, "document") VALUES ('5b4318e5-8e45-40dd-a1de-0cd1424b94ef', '${JSON.stringify(draft5)}');`;
    const eight = `INSERT INTO draft (id, "document") VALUES ('6b4318e5-8e45-40dd-a1de-0cd1424b94ef', '${JSON.stringify(draft6)}');`;
    return one + two + three + four+ five+ six+ seven+ eight;
}

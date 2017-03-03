const uuid = require('uuid');
const moment = require('moment');

module.exports = function () {

    const activity = {
        "id": "13630184-5955-4dbe-9908-ab065f1bcad2",
        "title": "Assignment Title",
        "courseId": '1234',
        "createdById": uuid.v4(),
        "createdDate": moment().toISOString()
        // "desc": "Drafting/Revising Assignment\nENG101 Introduction to writing",
        // "rhetoricalGenre": "Argument",
        // "rubric": "Argument",
        // "prompt": "Choose a contemporary issue in public life and write a 3-5 page essay in which you take a side and " +
        // "argue in favor of one point of view. Your paper should integrate information and quotations from at least 2-3 " +
        // "sources.",
        // "drafts": ["1b4318e5-8e45-40dd-a1de-0cd1424b94ef", "2b4318e5-8e45-40dd-a1de-0cd1424b94ef", "3b4318e5-8e45-40dd-a1de-0cd1424b94ef"]
    }

    const draft1 = {
        "id": "1b4318e5-8e45-40dd-a1de-0cd1424b94ef",
        "type": "Instructor Review",
        "dueDate": "Thursday Jan 1, 2016",
        "details": {
            "gradingPolicy": "Incomplete/Complete",
            "learningObjectives": [
                {key: "Introduction", value: "Thesis"},
                {key: "Body", value: "Reasons & Support, Interpretation / Analysis"},
                {key: "Conclusion", value: "Expansion/Significance of Thesis"},
                {key: "Research/Evidence", value: "Integration of Research, Counterarguments"}
            ],
            "studentReflectionQuestions": ["The primary argumentations...", "Evidence can and will be used against you..."],
            "postInstructorFeedback": ["Put the microphone against the speaker to make everyone leave."]
        }
    }

    const draft2 = {
        "id": "2b4318e5-8e45-40dd-a1de-0cd1424b94ef",
        "type": "Instructor Review",
        "dueDate": "Thursday Jan 1, 2016",
        "details": {
            "gradingPolicy": "Incomplete/Complete",
            "learningObjectives": [
                {key: "Introduction", value: "Thesis"},
                {key: "Body", value: "Reasons & Support, Interpretation / Analysis"},
                {key: "Conclusion", value: "Expansion/Significance of Thesis"},
                {key: "Research/Evidence", value: "Integration of Research, Counterarguments"}
            ],
            "studentReflectionQuestions": ["The primary argumentations...", "Evidence can and will be used against you..."],
            "postInstructorFeedback": ["Put the microphone against the speaker to make everyone leave."]
        }
    }

    const draft3 = {
        "id": "3b4318e5-8e45-40dd-a1de-0cd1424b94ef",
        "type": "Instructor Review",
        "dueDate": "Thursday Jan 1, 2016",
        "details": {
            "gradingPolicy": "Incomplete/Complete",
            "learningObjectives": [
                {key: "Introduction", value: "Thesis"},
                {key: "Body", value: "Reasons & Support, Interpretation / Analysis"},
                {key: "Conclusion", value: "Expansion/Significance of Thesis"},
                {key: "Research/Evidence", value: "Integration of Research, Counterarguments"}
            ],
            "studentReflectionQuestions": [
                "The most challenging part of the assignment was...",
                "I want my reader to...",
                "Finally, I want you to know..."
            ],
            "postInstructorFeedback": ["Put the microphone against the speaker to make everyone leave."]
        }
    }

    const activity2 = {
        "id": "23630184-5955-4dbe-9908-ab065f1bcad2",
        "title": "Assignment Title",
        "courseId": '456',
        "createdById": uuid.v4(),
        "createdDate": moment().toISOString()
        // "desc": "Drafting/Revising Assignment\nENG101 Introduction to writing",
        // "rhetoricalGenre": "Argument",
        // "rubric": "Argument",
        // "prompt": "Choose a contemporary issue in public life and write a 3-5 page essay in which you take a side and " +
        // "argue in favor of one point of view. Your paper should integrate information and quotations from at least 2-3 " +
        // "sources.",
        // "drafts": ["4b4318e5-8e45-40dd-a1de-0cd1424b94ef", "5b4318e5-8e45-40dd-a1de-0cd1424b94ef", "6b4318e5-8e45-40dd-a1de-0cd1424b94ef"]
    }

    const draft4 = {
        "id": "4b4318e5-8e45-40dd-a1de-0cd1424b94ef",
        "type": "Instructor Review",
        "dueDate": "Thursday Jan 1, 2016",
        "details": {
            "gradingPolicy": "Incomplete/Complete",
            "learningObjectives": [
                {key: "Introduction", value: "Thesis"},
                {key: "Body", value: "Reasons & Support, Interpretation / Analysis"},
                {key: "Conclusion", value: "Expansion/Significance of Thesis"},
                {key: "Research/Evidence", value: "Integration of Research, Counterarguments"}
            ],
            "studentReflectionQuestions": ["The primary argumentations...", "Evidence can and will be used against you..."],
            "postInstructorFeedback": ["Put the microphone against the speaker to make everyone leave."]
        }
    }

    const draft5 = {
        "id": "5b4318e5-8e45-40dd-a1de-0cd1424b94ef",
        "type": "Instructor Review",
        "dueDate": "Thursday Jan 1, 2016",
        "details": {
            "gradingPolicy": "Incomplete/Complete",
            "learningObjectives": [
                {key: "Introduction", value: "Thesis"},
                {key: "Body", value: "Reasons & Support, Interpretation / Analysis"},
                {key: "Conclusion", value: "Expansion/Significance of Thesis"},
                {key: "Research/Evidence", value: "Integration of Research, Counterarguments"}
            ],
            "studentReflectionQuestions": ["The primary argumentations...", "Evidence can and will be used against you..."],
            "postInstructorFeedback": ["Put the microphone against the speaker to make everyone leave."]
        }
    }

    const draft6 = {
        "id": "6b4318e5-8e45-40dd-a1de-0cd1424b94ef",
        "type": "Instructor Review",
        "dueDate": "Thursday Jan 1, 2016",
        "details": {
            "gradingPolicy": "Incomplete/Complete",
            "learningObjectives": [
                {key: "Introduction", value: "Thesis"},
                {key: "Body", value: "Reasons & Support, Interpretation / Analysis"},
                {key: "Conclusion", value: "Expansion/Significance of Thesis"},
                {key: "Research/Evidence", value: "Integration of Research, Counterarguments"}
            ],
            "studentReflectionQuestions": [
                "The most challenging part of the assignment was...",
                "I want my reader to...",
                "Finally, I want you to know..."
            ],
            "postInstructorFeedback": ["Put the microphone against the speaker to make everyone leave."]
        }
    }

    const one = `INSERT INTO activity (id, title) VALUES ('13630184-5955-4dbe-9908-ab065f1bcad2', '${JSON.stringify(activity)}');`;
    const two = `INSERT INTO draft (id, "document") VALUES ('1b4318e5-8e45-40dd-a1de-0cd1424b94ef', '${JSON.stringify(draft1)}');`;
    const three = `INSERT INTO draft (id, "document") VALUES ('2b4318e5-8e45-40dd-a1de-0cd1424b94ef', '${JSON.stringify(draft2)}');`;
    const four = `INSERT INTO draft (id, "document") VALUES ('3b4318e5-8e45-40dd-a1de-0cd1424b94ef', '${JSON.stringify(draft3)}');`;
    const five = `INSERT INTO activity (id, "document") VALUES ('23630184-5955-4dbe-9908-ab065f1bcad2', '${JSON.stringify(activity2)}');`;
    const six = `INSERT INTO draft (id, "document") VALUES ('4b4318e5-8e45-40dd-a1de-0cd1424b94ef', '${JSON.stringify(draft4)}');`;
    const seven = `INSERT INTO draft (id, "document") VALUES ('5b4318e5-8e45-40dd-a1de-0cd1424b94ef', '${JSON.stringify(draft5)}');`;
    const eight = `INSERT INTO draft (id, "document") VALUES ('6b4318e5-8e45-40dd-a1de-0cd1424b94ef', '${JSON.stringify(draft6)}');`;
    return {
        activities: [activity, activity2]
    }
}


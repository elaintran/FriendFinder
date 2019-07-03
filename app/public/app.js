var questions = ["Your mind is always buzzing with unexplored ideas and plans.",
				"Generally speaking, you rely more on your experience than your imagination.",
				"You find it easy to stay relaxed and focused even when there is some pressure.",
				"You rarely do something just out of sheer curiosity.",
				"People can rarely upset you.",
				"It is often difficult for you to relate to other people’s feelings.",
				"In a discussion, truth should be more important than people’s sensitivities.",
				"You rarely get carried away by fantasies and ideas.",
				"You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
				"You feel more energetic after spending time with a group of people."];

function insertQuestions() {
	for(var i = 0; i < questions.length; i++) {
		//need different id and label names so that the label can match the
		//corresponding id
		var stronglyDisagree = answer(i, "strongly-disagree", "Strongly Disagree");
		var disagree = answer(i, "disagree", "Disagree");
		var neutral = answer(i, "neutral", "Neutral");
		var agree = answer(i, "agree", "Agree");
		var stronglyAgree = answer(i, "strongly-agree", "Strongly Agree");
		var questionContainer = $("<div>").addClass("question");
		var surveyQuestion = $("<h4>").text(questions[i]);
		var surveyAnswer = $("<div>").addClass("answers");
		surveyAnswer.append(stronglyDisagree).append(disagree).append(neutral).append(agree).append(stronglyAgree);
		questionContainer.append(surveyQuestion).append(surveyAnswer);
		$(".survey").append(questionContainer);
	}
}
insertQuestions();

function answer(i, id, answer) {
	var answerButton = '<input type="radio" id="' + id + "-" + i + '" name="answer-' + i + '">' + 
	'<label for="' + id + "-" + i +'">' + answer + '</label>';
	return answerButton;
}
$(document).ready(function() {

    $("#start").on("click", function() {            //starts first question
        $("#results").css("display", "none");
        $("#quiz").css('display', 'block');   
        $(".container").css('height', '100%');  
        $("#start").css('display', 'none');      
        game.loadQuestion();             
    });  //closes start on click function


    $(document).on('click', '.answer-button', function(e) {
        game.clicked(e);
        console.log("clicked");
    })

    $(document).on('click', '#reset', function(){
        game.reset();
    })


    var questions = [
        {
            question: "King Alfred made peace with which Viking leader?",
            answers: ["Guthrum", "Ivar the Boneless ", "Sweyn Forkbeard" ],
            correctAnswer: "Guthrum"
        },
        {
            question: "Which of these cities was once a Viking town?",
            answers: ["Brighton","Nottingham","Winchester"],
            correctAnswer: "Nottingham"
        },
        {
            question: "What was the name for the part of England where Vikings settled?",
            answers: ["The Danelaw","The Scandiland","The Viking Kingdom"],
            correctAnswer: "The Danelaw"
        },
        {
            question: "What happened in a blood feud?",
            answers: ["People refused to talk to their neighbors","People threw buckets of pigs’ blood at one another","Families killed one another in revenge killings"],
            correctAnswer: "Families killed one another in revenge killings"
        },
        {
            question: "The richest and strongest Viking leaders were called…",
            answers: ["Barons","Jarls","Senators"],
            correctAnswer: "Jarls"
        },
        {
            question: "What happened to someone who was made an outlaw in Viking society?",
            answers: ["He could do what he liked and not be punished","He had to wear a funny hat to show he was bad","He could be killed by anyone"],
            correctAnswer: "He could be killed by anyone"
        },
        {
            question: "Who would have bought spurs in Viking society?",
            answers: ["A horse-rider","A shepherd","A sailor"],
            correctAnswer: "A horse-rider"
        },
        {
            question: "Which of these Viking items was made of wood?",
            answers: ["Cup","Arrowhead","Shoe"],
            correctAnswer: "Cup"
        },
        {
            question: "In which modern city can you see the remains of Jorvik?",
            answers: ["Liverpool","Newcastle","York"],
            correctAnswer: "York"
        },
        {
            question: "What wore down Vikings’ teeth?",
            answers: ["Gritty flour in bread","Talking too much","Gnawing on wood"],
            correctAnswer: "Gritty flour in bread"
        }
    ];  //closes questions array

    var game = {
        questions: questions,
        currentQuestion: 0,
        correct: 0,
        incorrect: 0,

        loadQuestion: function() {
            $("#quiz").html("<h2>" + questions[game.currentQuestion].question + "</h2>");
            for(var i=0; i<questions[game.currentQuestion].answers.length; i++) {
                $("#quiz").append('<button class="answer-button" id="button-' +i+'" data-name="'+questions[game.
                    currentQuestion].answers[i]+'">'+questions[game.
                    currentQuestion].answers[i]+'</button>');
            } //closes for loop
        }, //closes loadQuestion method

        nextQuestion: function(){
            game.currentQuestion++;
            game.loadQuestion();
        }, // closes nextQuestion method

        results: function() {
            $("#quiz").html("<h2 id=alldone>ALL DONE!</h2>");
            $("#alldone").css("color", "	#1E90FF");
            $("#alldone").css("font-size", "36px");
            $("#quiz").append("<h3 id=correct>Correct: " + game.correct + "</h3>");
            $("#correct").css("color", "#32CD32");
            $("#quiz").append("<h3 id=incorrect>Incorrect: " + game.incorrect + "</h3>");
            $("#incorrect").css("color", "#FF6347" );
            $("#quiz").append("<button id='reset'>RESET</button>");
        }, // closes results method

        clicked: function(e) {
            if($(e.target).data("name")==questions[game.currentQuestion].
                correctAnswer){
                    game.answeredCorrectly();
                } else {
                    game.answeredIncorrectly();
                }
        }, //closes clicked method

        answeredCorrectly: function() {
            console.log("Correct");
            game.correct++;
            $("#quiz").html("<h2 id=right>YOU GOT IT RIGHT!</h2>");
            $("#right").css("color", "	#32CD32");
            if(game.currentQuestion==questions.length-1){
                setTimeout(game.results, 2*1000);
            } else {
                setTimeout(game.nextQuestion, 2*1000);
            }
        }, // closes answeredCorrectly method

        answeredIncorrectly: function() {
            console.log("Incorrect");
            game.incorrect++;
            $("#quiz").html("<h2 id=wrong>YOU GOT IT WRONG!</h2>");
            $("#wrong").css("color", "	#FF6347");
            $("#quiz").append("<h3>The Correct Answer Was: " + questions[game.
                currentQuestion].correctAnswer+ "</h3>");
            if(game.currentQuestion==questions.length-1){
                setTimeout(game.results, 3*1000);
            } else {
                setTimeout(game.nextQuestion, 3*1000);
            }
        }, // closes answeredIncorrectly method

        reset: function() {
            game.currentQuestion = 0;
            game.correct = 0;
            game.incorrect = 0;
            game.loadQuestion();
        } // closes reset method
    
    } // closes game object
   

}); //closes document.ready
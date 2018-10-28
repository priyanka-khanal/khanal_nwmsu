function check(){


	let question1 = document.quiz.question1.value;
	let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
    let question5 = document.quiz.question5.value;
	let correct = 0;

    if (question1 == "Moose")
    {
		correct++;
}
    if (question2 == "Albany") {
    	correct++;
}
    if (question3 == "MilkyWay")
     {
    	correct++
    }  
    if (question4 == "Sixteen") {
    	correct++
    } 
    if (question5 == "Fifty") {
    	correct++
    } 

    const messages = ["You are smarter than a 5th Grader!!", "You need to brush up your knowledge a little!", "You really need to do better!"];
    let range;

     if (correct < 2){
     	 range = 2;
     }

      if (correct == 3 || correct==4){
     	 range = 1;
     }

        if (correct == 5){
     	 range = 0;
     }

     document.getElementById("afterSubmit").style.visibility="visible";
     document.getElementById("correctAnswer").innerHTML = "you got " + correct + " correct.";
     document.getElementById("message").innerHTML = messages[range];
     
  }
  function myFunction() {
      location.reload();
  }
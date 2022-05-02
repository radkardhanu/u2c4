// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("sbumit,favourites");
  var matchArr=JSON.parse(localStorage.getItem("schedule")) || [];
  function matchsubmit(){
    event.preventDefault();

    var matchObj={
          matchNumber:form.matchnumber.value,
          TeamA:form.TeamA.value,
          TeamB:form.TeamB.value,
          Date:form.date.value,
          Venue:form.venue.value,
          //Remove:form.Remove.value,
    }
    matchArr.push(matchObj);
    console.log(matchArr);
    localStorage.setItem("favourites",JSON.stringify(matchArr));

    //window.location.href="match.html";
  }
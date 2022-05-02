// write js code here corresponding to matches.html


var matchArr=JSON.parse(localStorage.getItem("schedule"));

displayData(matchArr);
//var sum=matchArr.reduce(function(acc,elem){
    //return acc+Number(elem,venue)
//},0)
//console.log(sum)
//var favourites=JSON.parse(localStorage.getItem("favourites")) || [];

  //function handleRemoveSort(){
  //var selected=document.querySelector("#favourites").value;
  //console.log(selected)
  function byfilter(){
      var select=document.querySelector("#filterVenue").value;
      var filterList=matchArr.filter(function(elem){
         return elem.Venue==Selection;
})
  //console.log(filterList)
  displayData(filterList)
  }
  farArr=JSON.parse(localStorage.getItem("favourites")) || [];


  function displayData(data){
  //document.querySelector("tbody").innerHTML="";

  data.forEach(function(elem){

    var tr=document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=elem.matchNumber

    var td2=document.createElement("td")
    td2.innerText=elem.TeamA

    var td3=document.createElement("td")
    td3.innerText=elem.TeamB

    var td4=document.createElement("td")
    td4.innerText=elem.Date

    var td5=document.createElement("td")
    td5.innerText=elem.Venue

    //var td6=document.createElement("td")
    //td6.innerText=elem.Remove

    var td6=document.createElement("td")
    td6.innerText="favourites";
    td6.style.color="green";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
      favouritesFun(elem);
    })

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);
  })
}
function favouritesFun(elem){
  //console.log(push(elem));
  //matchArr.push(elem);
  favouritesFun.push(elem)
  localStorage.selItem("favourites",JSOM.stringify(favArr));
}
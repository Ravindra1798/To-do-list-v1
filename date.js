exports.getDate=getDate;


function getDate()
{
  var today = new Date();


let option={
 weekday:"long",
 day:"numeric",
 month:"long"
}
var today= today.toLocaleDateString(("en-US"),option);

return today;

}


exports.getDay=getDay;
function getDay()
{
  var today = new Date();


let option={
 weekday:"long",

}
var today= today.toLocaleDateString(("en-US"),option);

return today;

}

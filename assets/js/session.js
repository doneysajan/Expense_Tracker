
var userDetails = window.localStorage.getItem('expense_tracker_app_session');
userDetails = JSON.parse(userDetails);
document.getElementById('fullname').innerHTML= userDetails.fullname;
document.getElementById('fname').innerHTML= userDetails.fullname;
document.getElementById('names').innerHTML= userDetails.fullname;
document.getElementById('profilepic').src = userDetails.profileImageUrl;  
console.log(userDetails.fullname);

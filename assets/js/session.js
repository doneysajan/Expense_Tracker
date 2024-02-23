var userDetails = window.localStorage.getItem('expense_tracker_app_session');
userDetails = JSON.parse(userDetails);

console.log(userDetails)
document.getElementById('fullname').innerHTML = userDetails.fullname;
document.getElementById('fname').innerHTML = userDetails.fullname;
document.getElementById('names').innerHTML = userDetails.fullname;

if (userDetails.profileImgUrl) {
    console.log('Profile Image URL:', userDetails.profileImgUrl);
  document.getElementById('profilepic').src = userDetails.profileImgUrl;
} 
else {
  document.getElementById('profilepic').src = 'assets/img/profile-img.jpg';
}

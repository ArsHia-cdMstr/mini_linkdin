// Retrieve data from localStorage
var profileData = JSON.parse(localStorage.getItem("userInfo"));

// Populate form fields with initial values
document.getElementById("EName").value = profileData.fullName;
document.getElementById("EUName").value = profileData.username;
document.getElementById("EGender").value = profileData.gender;
document.getElementById("EAge").value = profileData.age;
document.getElementById("EBirth").value = profileData.birthDate;
document.getElementById("ESkill1").value = profileData.skill1;
document.getElementById("ESkill2").value = profileData.skill2;
document.getElementById("ESkill3").value = profileData.skill3;
document.getElementById("EBio").value = profileData.bio;
// You can't prefill file input field due to security reasons.

document
	.getElementById("editProfileForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const errorMsg = document.getElementById("editProfileErrorMsg");

		const fullName = document.getElementById("EName").value;
		const username = document.getElementById("EUName").value;
		const gender = document.getElementById("EGender").value;
		const age = document.getElementById("EAge").value;
		const birthDate = document.getElementById("EBirth").value;
		const skill1 = document.getElementById("ESkill1").value;
		const skill2 = document.getElementById("ESkill2").value;
		const skill3 = document.getElementById("ESkill3").value;
		const bio = document.getElementById("EBio").value;


        if (
			fullName.trim() === "" ||
			username.trim() === "" ||
			gender === "" ||
			age.trim() === "" ||
			birthDate.trim() === "" ||
			skill1.trim() === "" ||
			skill2.trim() === "" ||
			skill3.trim() === "" ||
			bio.trim() === "" 
		) {
			errorMsg.innerHTML = "Please fill out all the fields.";
			return;
		}

		localStorage.setItem("userInfo");
	});

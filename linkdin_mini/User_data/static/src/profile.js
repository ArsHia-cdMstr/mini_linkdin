// Function to populate Personal Profile section
function populatePersonalProfile(user) {
	const personalProfileTable = document.querySelector("#PP .profile-table");

	for (const key in user.PersonalProfile) {
		const tr = document.createElement("tr");

		const th = document.createElement("th");
		th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
		tr.appendChild(th);

		const td = document.createElement("td");
		td.textContent = user.PersonalProfile[key];
		tr.appendChild(td);

		personalProfileTable.appendChild(tr);
	}
}

// Function to populate Educational Profile section
function populateEducationalProfile(user) {
	const educationalProfileTable = document.querySelector(
		"#EP .Education-table"
	);

	for (const key in user.EducationalProfile) {
		const tr = document.createElement("tr");

		const th = document.createElement("th");
		th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
		tr.appendChild(th);

		const td = document.createElement("td");
		td.textContent = user.EducationalProfile[key];
		tr.appendChild(td);

		educationalProfileTable.appendChild(tr);
	}
}

// Function to populate Occupational Profile section
function populateOccupationalProfile(user) {
	const occupationalProfileTable = document.querySelector(
		"#OP .Occupation-table"
	);

	for (const key in user.OccupationalProfile) {
		const tr = document.createElement("tr");

		const th = document.createElement("th");
		th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
		tr.appendChild(th);

		const td = document.createElement("td");
		td.textContent = user.OccupationalProfile[key];
		tr.appendChild(td);

		occupationalProfileTable.appendChild(tr);
	}
}

function populateUserProfile(user) {
	const userNameField = document.querySelector("h2");
	const userImg = document.querySelector("img");
	userNameField.innerHTML = user.username;
	userImg.setAttribute("src", user.img);
}

// Read user data based on query parameter and populate sections
window.onload = function () {
	const urlParams = new URLSearchParams(window.location.search);
	const username = urlParams.get("user");
	const users = JSON.parse(localStorage.getItem("users"));
	let userData = {};

	for (const key in users) {
		if (users[key].username === username) {
			userData = users[key];
		}
	}

	if (userData) {
		populateUserProfile(userData);
		populatePersonalProfile(userData);
		populateEducationalProfile(userData);
		populateOccupationalProfile(userData);
	} else {
		console.log("User not found.");
	}
};

// Get tab buttons and sections
const personalBtn = document.getElementById("personalBtn");
const educationalBtn = document.getElementById("educationalBtn");
const occupationalBtn = document.getElementById("occupationalBtn");
const personalSection = document.getElementById("PP");
const educationalSection = document.getElementById("EP");
const occupationalSection = document.getElementById("OP");

// Function to show a section and hide others
function showSection(section) {
	personalSection.style.display = "none";
	educationalSection.style.display = "none";
	occupationalSection.style.display = "none";

	section.style.display = "block";
}

// Initially show Personal Profile section
showSection(personalSection);

// Add click event listeners to tab buttons
personalBtn.addEventListener("click", function () {
	showSection(personalSection);
});

educationalBtn.addEventListener("click", function () {
	showSection(educationalSection);
});

occupationalBtn.addEventListener("click", function () {
	showSection(occupationalSection);
});

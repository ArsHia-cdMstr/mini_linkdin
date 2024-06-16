const users = {
	user1: {
		username: "MHE81",
		img: "assets/55.jpg",
		PersonalProfile: {
			name: "elika Hassanzade Eskafi",
			gender: "Female",
			age: "21",
			BirthDate: "2002/10/07",
			bio: "I'm from Isfahan but I live in Mashhad.",
		},
		EducationalProfile: {
			ElementrySchool: "Raya",
			MiddleSchool: "Venus",
			HighSchool: "Farhikhtegan",
			University: "Ferdowsi",
			UniversitySubject: "Computer Engineering",
		},
		OccupationalProfile: {
			PresentJob: "Engilsh Teacher, Student",
			PreviouseJobs: "Kindden garden Teacher",
			skills: "Playing Piano, Coding, Teaching English",
		},
	},
	user2: {
		username: "Mob82",
		img: "assets/33.jpg",
		PersonalProfile: {
			name: "Mobina Zargar",
			gender: "Female",
			age: "21",
			BirthDate: "2002/10/07",
			bio: "I'm from Isfahan but I live in Tehran.",
		},
		EducationalProfile: {
			ElementrySchool: "Raya",
			MiddleSchool: "Venus",
			HighSchool: "Farhikhtegan",
			University: "Ferdowsi",
			UniversitySubject: "Computer Engineering",
		},
		OccupationalProfile: {
			PresentJob: "Engilsh Teacher, Student",
			PreviouseJobs: "Kindden garden Teacher",
			skills: "Playing Piano, Speaking germeny",
		},
	},
	user3: {
		username: "Fatima",
		img: "assets/44.jpg",
		PersonalProfile: {
			name: "Fateme Dehbashi",
			gender: "Female",
			age: "21",
			BirthDate: "2002/10/07",
			bio: "I'm studing in Ferdowsi University. I'd like to be an AI engineer.",
		},
		EducationalProfile: {
			ElementrySchool: "Raya",
			MiddleSchool: "Venus",
			HighSchool: "Farhikhtegan",
			University: "Ferdowsi",
			UniversitySubject: "Computer Engineering",
		},
		OccupationalProfile: {
			PresentJob: "Engilsh Teacher, Student",
			PreviouseJobs: "Kindden garden Teacher",
			skills: "Speach, Organizing events, Coding",
		},
	},
	user4: {
		username: "Arsh",
		img: "assets/22.jpg",
		PersonalProfile: {
			name: "Arshia Mokhles",
			gender: "Female",
			age: "21",
			BirthDate: "2002/10/07",
			bio: "I'm studing in Ferdowsi University.",
		},
		EducationalProfile: {
			ElementrySchool: "Raya",
			MiddleSchool: "Venus",
			HighSchool: "Farhikhtegan",
			University: "Ferdowsi",
			UniversitySubject: "Computer Engineering",
		},
		OccupationalProfile: {
			PresentJob: "Engilsh Teacher, Student",
			PreviouseJobs: "Kindden garden Teacher",
			skills: "Web designing, Teaching Python, Coding",
		},
	},
	user5: {
		username: "MHG",
		img: "assets/11.jpg",
		PersonalProfile: {
			name: "Mahmoud Ghorbanie",
			gender: "Female",
			age: "21",
			BirthDate: "2002/10/07",
			bio: "I'm an IT engineer and i work in the server room of a factory.",
		},
		EducationalProfile: {
			ElementrySchool: "Raya",
			MiddleSchool: "Venus",
			HighSchool: "Farhikhtegan",
			University: "Ferdowsi",
			UniversitySubject: "Computer Engineering",
		},
		OccupationalProfile: {
			PresentJob: "Engilsh Teacher, Student",
			PreviouseJobs: "Kindden garden Teacher",
			skills: "Software developing, Installing electric hardware, Coding",
		},
	},
};

localStorage.setItem("users", JSON.stringify(users));

// Function to create HTML elements for each profile
function createProfileElement(user) {
	const profileDiv = document.createElement("a");
	profileDiv.setAttribute("href", `profile.html?user=${user.username}`);
	profileDiv.classList.add("profile");

	// Create img element
	const img = document.createElement("img");
	img.src = user.img;
	img.alt = "Profile Image";
	img.classList.add("profile-img");
	profileDiv.appendChild(img);

	// Create table element
	const table = document.createElement("table");

	// Loop through user data and create table rows
	for (const key in user.PersonalProfile) {
		const tr = document.createElement("tr");

		// Create th for key
		const th = document.createElement("th");
		th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
		tr.appendChild(th);

		// Create td for value
		const td = document.createElement("td");
		td.textContent = user.PersonalProfile[key];
		tr.appendChild(td);

		// Append row to table
		table.appendChild(tr);
	}

	// Append table to profileDiv
	profileDiv.appendChild(table);

	return profileDiv;
}

// Function to display profiles
function displayProfiles(users) {
	const profilesContainer = document.getElementById("profiles-container");

	for (const key in users) {
		const user = users[key];
		const profileElement = createProfileElement(user);
		profilesContainer.appendChild(profileElement);
	}
}

// Call the function to display profiles
displayProfiles(users);

document.getElementById("logout").addEventListener("click", () => {
	localStorage.clear();
	location.replace("auth.html");
});

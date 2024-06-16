// Function to display profile cards based on search query
function displayFilteredProfiles(searchQuery) {
	const profilesContainer = document.getElementById("profiles-container");
	profilesContainer.innerHTML = ""; // Clear previous content

	// Filter users based on search query
	const filteredUsers = Object.values(users).filter(
		(user) =>
			user.PersonalProfile.name
				.toLowerCase()
				.includes(searchQuery.toLowerCase()) ||
			user.PersonalProfile.bio
				.toLowerCase()
				.includes(searchQuery.toLowerCase()) ||
			user.OccupationalProfile.skills
				.toLowerCase()
				.includes(searchQuery.toLowerCase())
	);

	// Create profile elements for filtered users and append to container
	filteredUsers.forEach((user) => {
		const profileElement = createProfileElement(user);
		profilesContainer.appendChild(profileElement);
	});
}

// Handle form submission
document
	.getElementById("searchForm")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent default form submission behavior

		const searchInput = document.getElementById("Search");
		const searchQuery = searchInput.value.trim();

		// Display profile cards based on search query
		displayFilteredProfiles(searchQuery);
	});

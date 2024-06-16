document
	.getElementById("loginForm")
	?.addEventListener("submit", function (event) {
		event.preventDefault();

		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		const errorMsg = document.getElementById("errorMsg");

		// Check if username or password is empty
		if (username.trim() === "" || password.trim() === "") {
			errorMsg.innerHTML = "Username and password are required!";
			return;
		}

		// Password validation
		if (!isValidPassword(password)) {
			errorMsg.innerHTML =
				"Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
			return;
		}

		localStorage.setItem(
			"userInfo",
			JSON.stringify({
				username: username,
				password: password,
			})
		);
		location.replace("home.html");
	});

function isValidPassword(password) {
	// Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
	return passwordRegex.test(password);
}

document
	.getElementById("signupForm")
	?.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent form submission

		const errorMsg = document.getElementById("signUpErrorMsg");

		const fullName = document.getElementById("EName").value;
		const username = document.getElementById("EUName").value;
		const gender = document.getElementById("EGender").value;
		const age = document.getElementById("EAge").value;
		const birthDate = document.getElementById("EBirth").value;
		const skill1 = document.getElementById("ESkill1").value;
		const skill2 = document.getElementById("ESkill2").value;
		const skill3 = document.getElementById("ESkill3").value;
		const bio = document.getElementById("EBio").value;
		const profileImage = document.getElementById("Eprof").value;
		const profileHeaderImage = document.getElementById("EHprof").value;

		// Check if any required field is empty
		if (
			fullName.trim() === "" ||
			username.trim() === "" ||
			gender === "" ||
			age.trim() === "" ||
			birthDate.trim() === "" ||
			skill1.trim() === "" ||
			skill2.trim() === "" ||
			skill3.trim() === "" ||
			bio.trim() === "" ||
			profileImage.trim() === "" ||
			profileHeaderImage.trim() === ""
		) {
			errorMsg.innerHTML = "Please fill out all the fields.";
			return;
		}

		localStorage.setItem(
			"userInfo",
			JSON.stringify({
				fullName: fullName,
				username: username,
				gender: gender,
				age: age,
				birthDate: birthDate,
				skill1: skill1,
				skill2: skill2,
				skill3: skill3,
				bio: bio,
				profileImage: profileImage,
				profileHeaderImage: profileHeaderImage,
			})
		);
		location.replace("home.html");
	});

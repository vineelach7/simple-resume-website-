// Show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll(".details-section");
    sections.forEach((section) => {
        section.style.display = "none";
    });
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = "block";
    }
}

// Navigate to the next section
function nextSection(nextSectionId) {
    showSection(nextSectionId);
}

// Toggle experience details based on years of experience
function toggleExperience() {
    const experienceYears = document.getElementById("experience-years").value;
    const experienceDetails = document.getElementById("experience-details");
    if (experienceYears > 0) {
        experienceDetails.style.display = "block";
    } else {
        experienceDetails.style.display = "none";
    }
}

// Generate the resume preview
function generateResume() {
    // Personal Details
    document.getElementById("resName").innerText =
        document.getElementById("name").value || "Not provided";
    document.getElementById("resEmail").innerText =
        document.getElementById("email").value || "Not provided";
    document.getElementById("resPhone").innerText =
        document.getElementById("phone").value || "Not provided";
    document.getElementById("resLinkedIn").innerText =
        document.getElementById("linkedin").value || "Not provided";

    // Objective
    document.getElementById("resObjective").innerText =
        document.getElementById("objective-text").value || "Not provided";

    // Education
    const degreeName =
        document.getElementById("degree-name").value || "Not provided";
    const specialization =
        document.getElementById("specialization").value || "Not provided";
    const passoutYear =
        document.getElementById("passout-year").value || "Not provided";
    document.getElementById(
        "resEducation"
    ).innerText = `${degreeName} in ${specialization}, ${passoutYear}`;

    // Work Experience
    const experienceYears =
        parseInt(document.getElementById("experience-years").value) || 0;
    if (experienceYears > 0) {
        const title = document.getElementById("title").value || "Not provided";
        const position =
            document.getElementById("position").value || "Not provided";
        const startDate =
            document.getElementById("start-date").value || "Not provided";
        const endDate = document.getElementById("end-date").value || "Not provided";
        const description =
            document.getElementById("description").value || "Not provided";
        const tools = document.getElementById("tools").value || "Not provided";
        document.getElementById(
            "resExperience"
        ).innerText = `${title} at ${position} (${startDate} - ${endDate})\n${description}\nTools Used: ${tools}`;
    } else {
        document.getElementById("resExperience").innerText = "No experience";
    }

    // Projects
    const projectTitle =
        document.getElementById("project-title").value || "Not provided";
    const projectDescription =
        document.getElementById("project-description").value || "Not provided";
    const projectTools =
        document.getElementById("project-tools").value || "Not provided";
    document.getElementById(
        "resProjects"
    ).innerText = `${projectTitle}\n${projectDescription}\nTools Used: ${projectTools}`;

    // Skills
    document.getElementById("resSkills").innerText =
        document.getElementById("skills-text").value || "Not provided";

    // Achievements
    document.getElementById("resAchievements").innerText =
        document.getElementById("achievements-text").value || "Not provided";

    // Show the resume template
    document.getElementById("resumeTemplate").style.display = "block";
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    // Hide buttons and other unnecessary elements
    const elementsToHide = document.querySelectorAll(".hide-on-pdf");
    elementsToHide.forEach((element) => {
        element.style.display = "none";
    });

    // Capture the resume content
    const content = document.getElementById("resumeTemplate").innerText;
    doc.text(content, 10, 10);
    doc.save("resume.pdf");

    // Restore the hidden elements
    elementsToHide.forEach((element) => {
        element.style.display = "";
    });
}

function saveAndGenerateResume() {
    alert("Achievements saved successfully!");
    generateResume();
    downloadPDF();
}
// ================= MOBILE MENU =================

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("show");

}


// ================= EVENT FILTER =================

function filterEvents(category) {

    const cards =
        document.querySelectorAll(".event-card");

    const buttons =
        document.querySelectorAll(".filter-btn");


    // Change active button

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    event.target.classList.add("active");


    // Show / hide cards

    cards.forEach(function(card) {

        const cardCategory =
            card.getAttribute("data-category");


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ================= SELECT EVENT =================

function selectEvent(eventName) {

    const eventSelect =
        document.getElementById("eventSelect");


    eventSelect.value = eventName;


    document
        .getElementById("register")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ================= REGISTRATION =================

const registrationForm =
    document.getElementById("registrationForm");


registrationForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const registerNo =
            document.getElementById("registerNo").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const department =
            document.getElementById("department").value;

        const selectedEvent =
            document.getElementById("eventSelect").value;


        // Validation

        if (
            name === "" ||
            registerNo === "" ||
            email === "" ||
            department === "" ||
            selectedEvent === ""
        ) {

            alert(
                "Please fill in all required fields."
            );

            return;

        }


        // Success message

        const successMessage =
            document.getElementById("successMessage");


        successMessage.innerHTML =
            `
            ✅ Registration Successful!<br><br>

            <strong>${name}</strong>,
            you have successfully registered for
            <strong>${selectedEvent}</strong>.

            <br><br>

            Register Number:
            <strong>${registerNo}</strong>

            <br>

            Department:
            <strong>${department}</strong>
            `;


        successMessage.style.display = "block";


        // Reset form

        registrationForm.reset();

    }
);


// ================= ANNOUNCEMENT =================

function changeAnnouncement() {

    const announcement =
        document.getElementById("announcementText");


    announcement.innerText =
        "🎉 Early bird registration closes on 5 October 2026!";

}


// ================= CONTACT FORM =================

function sendMessage() {

    const name =
        document.getElementById("contactName").value.trim();

    const email =
        document.getElementById("contactEmail").value.trim();

    const message =
        document.getElementById("contactMessage").value.trim();


    const response =
        document.getElementById("contactResponse");


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        response.style.color = "#dc2626";

        response.innerText =
            "Please fill in all fields.";

        return;

    }


    response.style.color = "#166534";

    response.innerText =
        "✅ Your message has been sent successfully!";


    document.getElementById("contactName").value = "";

    document.getElementById("contactEmail").value = "";

    document.getElementById("contactMessage").value = "";

}
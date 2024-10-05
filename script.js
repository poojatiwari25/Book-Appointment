var groupSelect = document.getElementById('selectGroup');
var doctorSelect = document.getElementById('doctor');
var groupOptions = ['Orthopaedist', 'Neurologist', 'Pediatricians', 'Gynecologist', 'Psychiatrist', 'Allergist', 'Surgeons', 'Dermatologist', 'Cardiologist', 'Dentist'];

var doctorAppointments = {
    "Dr. Vinay Tantway": ["6:00", "7:00", "8:00", "9:00"],
    "Dr. Nipun Pauranik": ["10:00","11:00","7:30", "8:30"],
    "Dr. Dilip Gupta": ["6:00", "7:00", "8:00", "9:00"],
    "Dr. Bhavya Doshi": ["12:00", "1:00", "7:30", "8:30"],
    "Dr. Srikanth Reddy": ["6:00", "7:00", "8:00", "9:00"],
    "Dr. Jafrey’s": ["6:00", "7:30", "8:30"],
    "Dr. PS Lubana": ["6:00", "7:00", "8:00", "9:00"],
    "Dr. Love Patidar": ["10:00","11:00","12:00","6:00", "7:30", "8:30"],
    "Dr. Rakesh Jain": ["6:00", "7:00", "8:00", "9:00"],
    "Dr. Bhatia": ["6:00", "7:30", "8:30"]
};

var groupMapping = {
    'Orthopaedist': ['Dr. Vinay Tantway'],
    'Neurologist': ['Dr. Nipun Pauranik'],
    'Pediatricians': ['Dr. Dilip Gupta'],
    'Gynecologist': ['Dr. Bhavya Doshi'],
    'Psychiatrist': ['Dr. Srikanth Reddy'],
    'Allergist': ['Dr. Jafrey’s'],
    'Surgeons': ['Dr. PS Lubana'],
    'Dermatologist': ['Dr. Love Patidar'],
    'Cardiologist': ['Dr. Rakesh Jain'],
    'Dentist': ['Dr. Bhatia']
};

function appendOptions(selectElement, options) {
    options.forEach((option) => {
        var optionElement = document.createElement('option');
        optionElement.textContent = option;
        optionElement.value = option;
        selectElement.appendChild(optionElement);
    });
}

appendOptions(groupSelect, groupOptions);
groupSelect.addEventListener('change', (event) => {
    var selectedGroup = event.target.value;
    doctorSelect.options.length = 0; 

    if (selectedGroup in groupMapping) {
        appendOptions(doctorSelect, groupMapping[selectedGroup]);
    }
});

document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var selectedDoctor = doctorSelect.value;
    var appointmentTime = document.getElementById("appointmentTime").value;

    var availableTimes = doctorAppointments[selectedDoctor];

    if (availableTimes && availableTimes.includes(appointmentTime)) {
        showPopup("Appointment booked for " + selectedDoctor + " at " + appointmentTime);
    } else {
        playAudio();
    }
});

var popup = document.getElementById("popup");
var popupMessage = document.getElementById("popup-message");
var audio = document.getElementById("notification");

function showPopup(message) {
    popup.style.display = "flex";
    popupMessage.textContent = message;
    setTimeout(function() {
        hidePopup();
    }, 2000); 
}

function hidePopup() {
    popup.style.display = "none";
}

function playAudio() {
    audio.play();
}
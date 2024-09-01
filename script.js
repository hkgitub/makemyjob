document.addEventListener('DOMContentLoaded', function() {
    const signInPage = document.getElementById('signInPage');
    const homePage = document.getElementById('homePage');
    const companyPage = document.getElementById('companyPage');
    const employeePage = document.getElementById('employeePage');
    const companyRegisterBtn = document.getElementById('companyRegisterBtn');
    const employeeRegisterBtn = document.getElementById('employeeRegisterBtn');
    const companyForm = document.getElementById('companyForm');
    const employeeForm = document.getElementById('employeeForm');
    const jobList = document.getElementById('jobList');
    const employeeList = document.getElementById('employeeList');
    const registrationDetails = document.getElementById('registrationDetails');

    // Hide the home page initially
    homePage.style.display = 'none';

    // Show home page after sign in
    document.getElementById('signInForm').addEventListener('submit', function(e) {
        e.preventDefault();
        signInPage.style.display = 'none';
        homePage.style.display = 'block';
    });

    // Show company registration form and available employees
    companyRegisterBtn.addEventListener('click', function() {
        companyPage.style.display = 'block';
        employeePage.style.display = 'none';
        registrationDetails.style.display = 'none';
        employeeList.style.display = 'block';
    });

    // Show employee registration form and available jobs
    employeeRegisterBtn.addEventListener('click', function() {
        companyPage.style.display = 'none';
        employeePage.style.display = 'block';
        registrationDetails.style.display = 'none';
        jobList.style.display = 'block';
    });

    // Handle company registration form submission
    companyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const companyName = document.getElementById('companyName').value;
        const jobDescription = document.getElementById('jobDescription').value;
        const companyAddress = document.getElementById('companyAddress').value;

        // Add the job to the list
        const jobItem = document.createElement('li');
        jobItem.innerHTML = `
            <strong>${companyName}</strong><br>
            Job: ${jobDescription}<br>
            Address: ${companyAddress || 'N/A'}
            <button class="registerBtn">Register</button>
        `;
        jobList.appendChild(jobItem);

        // Clear the form
        companyForm.reset();
    });

    // Handle employee registration form submission
    employeeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const employeeName = document.getElementById('employeeName').value;
        const employeePhone = document.getElementById('employeePhone').value;
        const employeeEmail = document.getElementById('employeeEmail').value;
        const skills = document.getElementById('skills').value;
        const employeeAddress = document.getElementById('employeeAddress').value;

        // Add the employee to the list
        const employeeItem = document.createElement('li');
        employeeItem.innerHTML = `
            <strong>${employeeName}</strong><br>
            Phone: ${employeePhone}<br>
            Email: ${employeeEmail}<br>
            Skills: ${skills}<br>
            Address: ${employeeAddress}
        `;
        employeeList.appendChild(employeeItem);

        // Clear the form
        employeeForm.reset();
    });

    // Register button functionality
    jobList.addEventListener('click', function(e) {
        if (e.target.classList.contains('registerBtn')) {
            alert('Company will be notified of your registration.');
        }
    });
});

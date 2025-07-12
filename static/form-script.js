const form = document.getElementById('employee-form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const department = document.getElementById('department');
const role = document.getElementById('role');
const employeeId = document.getElementById('employeeId');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validateEmail(email.value)) {
    alert("Invalid email format.");
    return;
  }

  const newEmployee = {
    id: employeeId.value || 'E' + Date.now(),
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    email: email.value.trim(),
    department: department.value.trim(),
    role: role.value.trim()
  };

  const existing = JSON.parse(localStorage.getItem('employees')) || [];
  const index = existing.findIndex(e => e.id === newEmployee.id);
  if (index !== -1) {
    existing[index] = newEmployee;
  } else {
    existing.push(newEmployee);
  }
  localStorage.setItem('employees', JSON.stringify(existing));
  alert("Saved!");
  window.location.href = 'dashboard.ftl';
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// If editing, pre-fill values from query string
window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('edit')) {
    const id = params.get('edit');
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const emp = employees.find(e => e.id === id);
    if (emp) {
      firstName.value = emp.firstName;
      lastName.value = emp.lastName;
      email.value = emp.email;
      department.value = emp.department;
      role.value = emp.role;
      employeeId.value = emp.id;
      document.getElementById('form-title').innerText = 'Edit Employee';
    }
  }
}

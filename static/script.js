let employees = JSON.parse(localStorage.getItem('employees')) || [];
let filtered = [...employees];
let currentPage = 1;

const elems = {
  search: document.getElementById('searchInput'),
  filterBtn: document.getElementById('filterBtn'),
  filterPopup: document.getElementById('filterPopup'),
  closeFilter: document.getElementById('closeFilter'),
  applyFilter: document.getElementById('applyFilter'),
  filterF: document.getElementById('filterFirstName'),
  filterD: document.getElementById('filterDepartment'),
  filterR: document.getElementById('filterRole'),
  sortSelect: document.getElementById('sortSelect'),
  pageSize: document.getElementById('pageSize'),
  addBtn: document.getElementById('addEmployeeBtn'),
  addPopup: document.getElementById('addPopup'),
  cancelPopup: document.getElementById('cancelPopup'),
  popupForm: document.getElementById('popupForm'),
  container: document.getElementById('employeeContainer'),
  pagination: document.getElementById('pagination'),
};

function save() {
  localStorage.setItem('employees', JSON.stringify(employees));
}

function openFilter() { elems.filterPopup.classList.remove('hidden'); }
function closeFilter() { elems.filterPopup.classList.add('hidden'); }

function applyFilter() {
  const fn = elems.filterF.value.toLowerCase();
  const dept = elems.filterD.value.toLowerCase();
  const rl = elems.filterR.value.toLowerCase();
  filtered = employees.filter(e =>
    e.firstName.toLowerCase().includes(fn) &&
    e.department.toLowerCase().includes(dept) &&
    e.role.toLowerCase().includes(rl)
  );
  elems.filterPopup.classList.add('hidden');
  currentPage = 1; render();
}

function openAdd() {
  elems.popupForm.reset();
  document.getElementById('popId').value = '';
  elems.addPopup.classList.remove('hidden');
}

function closeAdd() { elems.addPopup.classList.add('hidden'); }

function editEmployee(id) {
  const emp = employees.find(e => e.id === id);
  if (!emp) return;
  document.getElementById('popFirstName').value = emp.firstName;
  document.getElementById('popLastName').value = emp.lastName;
  document.getElementById('popEmail').value = emp.email;
  document.getElementById('popDepartment').value = emp.department;
  document.getElementById('popRole').value = emp.role;
  document.getElementById('popId').value = emp.id;
  elems.addPopup.classList.remove('hidden');
}

function showMessage(text, type) {
  const msg = document.getElementById('messagePopup');
  msg.innerText = text;
  msg.className = `message-popup ${type}`;
  msg.classList.remove('hidden');
  setTimeout(() => msg.classList.add('hidden'), 3000);
}

function deleteEmployee(id) {
  if (!confirm('Delete this employee?')) return;
  employees = employees.filter(e => e.id !== id);
  save(); filtered = [...employees];
  showMessage('Employee deleted successfully', 'success');
  localStorage.setItem('employees', JSON.stringify(employees));
  render();
}

function validatePopup() {
  const email = document.getElementById('popEmail').value.trim();
  if (!document.getElementById('popFirstName').value.trim()) {
    showMessage('First Name is required', 'error');
    return false;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    showMessage('Invalid email format', 'error');
    return false;
  }
  return true;
}

function render() {
  const searchTerm = elems.search.value.toLowerCase();
  let data = filtered.filter(e =>
    e.firstName.toLowerCase().includes(searchTerm) ||
    e.lastName.toLowerCase().includes(searchTerm) ||
    e.email.toLowerCase().includes(searchTerm)
  );
  const sortBy = elems.sortSelect.value;
  if (sortBy) data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  const ps = parseInt(elems.pageSize.value);
  const totalPages = Math.ceil(data.length / ps);
  const slice = data.slice((currentPage - 1) * ps, currentPage * ps);

  elems.container.innerHTML = '';
  slice.forEach(emp => {
    const card = document.createElement('div');
    card.className = 'employee-card';
    card.innerHTML = `
      <p><strong>ID:</strong> ${emp.id}</p>
      <p><strong>Name:</strong> ${emp.firstName} ${emp.lastName}</p>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <button class="edit-button" onclick="editEmployee('${emp.id}')">Edit</button>
      <button class="delete-button" onclick="deleteEmployee('${emp.id}')">Delete</button>`;
    elems.container.appendChild(card);
  });

  elems.pagination.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    btn.className = i === currentPage ? 'active' : '';
    btn.onclick = () => { currentPage = i; render(); };
    elems.pagination.appendChild(btn);
  }
}

elems.search.oninput = () => { currentPage = 1; render(); };
elems.filterBtn.onclick = openFilter;
elems.closeFilter.onclick = closeFilter;
elems.applyFilter.onclick = applyFilter;
elems.sortSelect.onchange = () => render();
elems.pageSize.onchange = () => { currentPage = 1; render(); };
elems.addBtn.onclick = openAdd;
elems.cancelPopup.onclick = closeAdd;

elems.popupForm.onsubmit = e => {
  e.preventDefault();
  if (!validatePopup()) return;
  const emp = {
    id: document.getElementById('popId').value || 'E' + Date.now(),
    firstName: document.getElementById('popFirstName').value.trim(),
    lastName: document.getElementById('popLastName').value.trim(),
    email: document.getElementById('popEmail').value.trim(),
    department: document.getElementById('popDepartment').value,
    role: document.getElementById('popRole').value,
  };
  const idx = employees.findIndex(x => x.id === emp.id);
  if (idx >= 0) employees[idx] = emp;
  else employees.push(emp);
  save(); filtered = [...employees];
  showMessage(`Employee ${emp.id ? 'updated' : 'added'} successfully`, 'success');
  closeAdd();
  render();
};

render();

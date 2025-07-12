<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Employee Directory</title>
  <link rel="stylesheet" href="../static/style.css">
</head>
<body>

  <div id="messagePopup" class="message-popup hidden"></div>

  <!-- Header -->
  <header class="header">
    <h1>Employee Directory</h1>
    <input type="text" id="searchInput" placeholder="Search name or email">
    <button id="filterBtn">Filter</button>
  </header>

  <!-- Filter Popup -->
  <div id="filterPopup" class="popup hidden">
    <h2>Filter Employees</h2>
    <input type="text" id="filterFirstName" placeholder="First Name">
    <input type="text" id="filterDepartment" placeholder="Department">
    <input type="text" id="filterRole" placeholder="Role">
    <div class="popup-actions">
      <button id="applyFilter">Apply</button>
      <button id="closeFilter">Cancel</button>
    </div>
  </div>

  <!-- Controls -->
  <div class="controls">
    <div>
      <label for="sortSelect" class="visually-hidden">Sort Employees</label>
    <select id="sortSelect">
      <option value="">Sort By</option>
      <option value="firstName">First Name (A-Z)</option>
      <option value="department">Department (A-Z)</option>
    </select>
    </div>
    <div>
      <label for="pageSize" class="visually-hidden">Page Size</label>
    <select id="pageSize" title="Page Size">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
    </div>
    <button id="addEmployeeBtn">Add</button>
  </div>

  <!-- Add/Edit Popup -->
  <div id="addPopup" class="popup hidden">
    <h2>Add / Edit Employee</h2>
    <form id="popupForm">
      <label for="popFirstName">First Name</label><input type="text" id="popFirstName" required placeholder="Enter first name" title="First Name">
      <label for="popLastName">Last Name</label><input type="text" id="popLastName" required placeholder="Enter last name" title="Last Name">
      <label for="popEmail">Email</label><input type="email" id="popEmail" required placeholder="Enter email" title="Email">
      <label>Department</label>
      <select id="popDepartment" required title="Department">
        <option value="">Select...</option>
        <option value="Engineering">Engineering</option>
        <option value="Design">Design</option>
        <option value="Sales">Sales</option>
      </select>
      <label for="popRole">Role</label>
      <select id="popRole" required title="Role">
        <option value="">Select...</option>
        <option value="Frontend Dev">Frontend Dev</option>
        <option value="UI/UX">UI/UX</option>
        <option value="Manager">Manager</option>
      </select>
      <input type="hidden" id="popId">
      <div class="popup-actions">
        <button type="button" id="cancelPopup">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>
  </div>

  <!-- Employee Cards -->
  <div id="employeeContainer" class="employee-grid"></div>

  <!-- Pagination -->
  <div id="pagination" class="pagination"></div>

  <!-- Footer -->
  <footer class="footer">@ 2025 Employee Directory. All rights reserved.</footer>

  <!-- Data + JS -->
  <script src="../static/local-employees.js"></script>
  <script src="../static/script.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Add/Edit Employee</title>
  <link rel="stylesheet" href="../static/style.css" />
</head>
<body>
  <div class="form-container">
    <h2 id="form-title">Add Employee</h2>
    <form id="employee-form">
      <label>First Name:</label>
      <input type="text" id="firstName" required />

      <label>Last Name:</label>
      <input type="text" id="lastName" required />

      <label>Email:</label>
      <input type="email" id="email" required />

      <label>Department:</label>
      <input type="text" id="department" required />

      <label>Role:</label>
      <input type="text" id="role" required />

      <input type="hidden" id="employeeId" />

      <button type="submit">Save</button>
      <button type="button" onclick="window.location.href='dashboard.ftl'">Cancel</button>
    </form>
  </div>

  <script src="../static/form-script.js"></script>
</body>
</html>

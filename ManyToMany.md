# Many to Many aka Join Tables

## Models

### Company
- id: uuid
- name: varchar

### Employees
- id: uuid
- name: varchar

### Projects
- id: uuid
- name: varchar

## Many to Many relationship: Projects have many employees; Employees belong to many projects

### Employee_Projects
- id: uuid
- employeeId: uuid
- projectId: uuid


## Routes

### GET: /api/projects/:projectId/employees

### GET: /api/employees/:employeeId/projects


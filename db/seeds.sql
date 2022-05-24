-- Create seeds for department, role, and employee --

INSERT INTO department (name)
VALUES
('finance'),
('engineering'), 
('sales'), 
('legal');


INSERT INTO role (title, salary, department_id)
VALUES
('accountant', 75000.00, 1),
('software_engineer', 110000.00, 2), 
('sales_person', 52000.00, 3), 
('lawyer', 90000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jeff', 'Bezos', 2, 2),
('Elon', 'Musk', 2, NULL),
('Bill', 'Gates', 1, 2),
('Warren', 'Buffet', 1, NULL),
('Mark', 'Zuckerberg', 3, 2),
('Michael', 'Bloomberg', 3, 2),
('Charles', 'Koch', 3, 2),
('David', 'Koch', 4, 2),
('Larry', 'Page', 2, 2),
('Sergey', 'Brin', 3, 2);
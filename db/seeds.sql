-- Create seeds for department, role, and employee --

INSERT INTO department (name)
VALUES
(finance), (engineering), (sales), (legal);


INSERT INTO role (title, salary, department_id)
VALUES
('accountant', '75000', 1), ('software_engineer', '110000', 2 ), ('sales_person', '52000', 3 ), ('lawyer', '90000', 4);

INSERT INTO employee (employee_id, first_name, last_name, title,department, salary, manager),
VALUES
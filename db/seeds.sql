-- Create seeds for department, role, and employee --

INSERT INTO department (name)
VALUES
(finance), (engineering), (sales), (legal);


INSERT INTO role (title, salary, department_id)
VALUES
('accountant', '75000', 1), ('software_engineer', '110000', 2 ), ('sales_person', '52000', 3 ), ('lawyer', '90000', 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id),
VALUES
('Jeff', 'Bezos', 2, 2),
('Elon', 'Musk', 2, null),
('Bill', 'Gates', 1, 2),
('Warren', 'Buffet', 1, null),
('Mark', 'Zuckerberg', 3, 2),
('Michael', 'Bloomberg', 3, 2),
('Charles', 'Koch', 3, 2),
('David', 'Koch', 4, 2),
('Larry', 'Page', 2, 2),
('Sergey', 'Brin' 3, 2);
INSERT INTO department (name)
VALUES  ("Marketing"),
        ("Sales"),
        ("Product"),
        ("Ops"),
        ("Support");

INSERT INTO role (title, salary, department_id)
VALUES  ("Support Specialist", 49000, 5),
        ("Content Marketing Lead", 55000, 1),
        ("Product Manager", 70000, 3),
        ("Sales Director", 100000, 2),
        ("Support Manager", 60000, 5),
        ("Operations Specialist", 55000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Laura Leigh", "Smith", 1),
        ("May", "Tortellini", 5),
        ("Jason", "Jax", 6),
        ("Tom", "Schwartz", 6),
        ("Chelsea", "Moose", 2),
        ("Katie", "Shmatie", 4);

UPDATE employee
SET manager_id = 2
WHERE id = 1;

UPDATE employee
SET manager_id = 3
WHERE id = 4;

UPDATE employee
SET manager_id = 6
WHERE id = 5;
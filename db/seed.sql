-- Seeding file for initial data dump to database --
INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Zaphod', 'Bobbybrox', 1, 1),
  ('Tricia', 'McMillian', 2, 0),
  ('Ford', 'Prefect', 3, 2),
  ('Arthur', 'Dent', 3, 0),
  ('Marvin', 'Galacticbrain', 4, 0);

  INSERT INTO `role`
  (title, salary, department_id)
VALUES
  ('Ship Captain', 20000000.00, 1),
  ('Journalist', 10000.00, 2),
  ('Earthling', 1000.00, 2),
  ('Primary Robot', 100.00, 1);

  INSERT INTO department
  (`name`)
VALUES
  ('Ship Crew'),
  ('Hitchhiker');



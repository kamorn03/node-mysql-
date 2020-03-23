# node-mysql-sample
# please connect db 

CREATE DATABASE company;
USE company;
CREATE TABLE employees (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50),
  location varchar(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO employees (id, name, location) VALUES
(1, 'Ibad', 'Pakistan'),
(2, 'Jay', 'India'),
(3, 'Jade', 'Germany'),
(4, 'Lesley', 'Scotland');

# npm install

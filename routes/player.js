const fs = require('fs');

module.exports = {
    addEmpPage: (req, res) => {
        res.render('add-emp.ejs', {
            title: "Welcome to Socka" | "Add a new player"
            ,message: ''
        });
    },
    addEmp: (req, res) => {
        /* if (!req.files) {
            return res.status(400).send("No files were uploaded.");
        } */

        let message = '';
        let name = req.body.name;
        let location = req.body.location;
        // let position = req.body.position;
        // let number = req.body.number;
        // let username = req.body.username;
        // let uploadedFile = req.files.image;
        // let image_name = uploadedFile.name;
        // let fileExtension = uploadedFile.mimetype.split('/')[1];
        // image_name = username + '.' + fileExtension;

        let usernameQuery = "SELECT * FROM `employees` WHERE name = '" + name + "'";

        db.query(usernameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Username already exists';
                res.render('add-emp.ejs', {
                    message,
                    title: "Welcome to Add a new employee"
                });
            } else {
                // check the filetype before uploading it
                // send the employee's details to the database
                let query = "INSERT INTO `employees` (name, location) VALUES ('" +
                    name + "', '" + location + "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
            }
        });
    },
    editEmpPage: (req, res) => {
        let employeeId = req.params.id;
        let query = "SELECT * FROM `employees` WHERE id = '" + employeeId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-emp.ejs', {
                title: "Edit  Player"
                ,employees: result[0]
                ,message: ''
            });
        });
    },
    editEmp: (req, res) => {
        let employeeId = req.params.id;
        let name = req.body.name;
        let location = req.body.location;
 
        let query = "UPDATE `employees` SET `name` = '" + name + "', `location` = '" + location  + "' WHERE `employees`.`id` = '" + employeeId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deleteEmp: (req, res) => {
        // ส่่ง id เข้ามา delete
        let employeeId = req.params.id;
        let deleteUserQuery = 'DELETE FROM employees WHERE id = "' + employeeId + '"';
        db.query(deleteUserQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    }
};
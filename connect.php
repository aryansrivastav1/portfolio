<?php
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Database connection
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "portfolio";

        $conn = mysqli_connect($servername, $username, $password, $database);

        if (!$conn) {
            die("Sorry, we couldn't reach the server." . mysqli_connect_error());
        }

        $sql = "INSERT INTO form (`S. No.`, `Name`, `Email ID`, `Query`) VALUES ('', '$name', '$email', '$message')";
        $result = mysqli_query($conn, $sql);

        if ($result) {
            echo '<script type="text/JavaScript">';
            echo 'alert("Success! Your information has been saved.")';
            echo '</script>';
        } else {
            echo 'The record was not inserted because ' . mysqli_error($conn);
        }

        try {
            $pdo = new PDO('mysql:host=localhost;dbname=portfolio', 'root', '');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $sql = "CREATE TRIGGER reset_auto_increment AFTER DELETE ON your_table_name
                    FOR EACH STATEMENT
                    BEGIN
                        ALTER TABLE form AUTO_INCREMENT = 1;
                    END";

            $pdo->exec($sql);

            echo '<script type="text/JavaScript">';
            echo 'alert("Trigger created successfully")';
            echo '</script>';
        } catch (PDOException $e) {
            echo "Error creating trigger: " . $e->getMessage();
        }

        $conn->close();
    }
    ?>
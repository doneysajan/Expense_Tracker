<?php
// login.php

// Include the database connection file
include 'dbconnection.php';

// Check if the form is submitted
if(isset($_POST['login'])) {
    // Get user input
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Perform SQL query to check if the username and password match
    $query = "SELECT * FROM login WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($connection, $query);

    // Check if the query was successful
    if ($result) {
        // Check if a matching record was found
        if (mysqli_num_rows($result) == 1) {
            // Successful login
            echo "Login successful!";
            // Redirect to a dashboard or home page if needed
            // header("Location: dashboard.php");
        } else {
            // Invalid username or password
            echo "Invalid username or password";
        }
    } else {
        // Query failed
        echo "Error: " . mysqli_error($connection);
    }

    // Close the database connection
    mysqli_close($connection);
}
?>

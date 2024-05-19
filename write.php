<?php
session_start();
include("connection.php");
include("functions.php");

$user_data = check_login($con);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DayBook</title>
    <link rel="stylesheet" href="sswrite.css">
    
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</head>
<body>
    <header>
        <h2 class="logo">DayBook </h2>
        <nav class="navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <a href="logout.php">Logout</a>
            <button class="btnSubmit">Save</button>
        </nav>
    </header>
    <div class="home">
        <div class="sidebar">
            <span class="name"><ion-icon name="bonfire-outline"></ion-icon>Hello <?php echo $user_data['user_name']; ?></span>
            <!--calendar-->
            <iframe src="calendar\calendar.html" class="calendar-iframe"></iframe>
            
        </div>
        <div class="container">
            <h3>Notes</h3>
            <button class="create">create notes</button>
            <div class="notes-container">
                <!-- <p contenteditable="true" class="input-box"></p> -->
            </div>
        </div>
    </div>
    <script src="scriptwrite.js"></script>
</body>
</html>
<?php
/**
 * Poppy Productions - Hostinger PHP Backend Configuration
 * 
 * Update these details with your Hostinger Email Account credentials:
 * Hostinger cPanel -> Emails -> Email Accounts
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Email settings
define('RECEIVER_EMAIL', 'info@poppyproductions.pk'); // The email where you want to receive inquiries
define('SENDER_EMAIL', 'noreply@poppyproductions.pk');   // Your Hostinger email account

// Database settings (Optional: if you created a MySQL database on Hostinger)
define('DB_HOST', 'localhost');
define('DB_NAME', 'u123456_poppy');
define('DB_USER', 'u123456_admin');
define('DB_PASS', 'your_mysql_password_here');
define('USE_DATABASE', false); // Set to true if MySQL database is created

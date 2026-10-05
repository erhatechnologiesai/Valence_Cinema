<?php
require_once 'config.php';

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit();
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON payload']);
    exit();
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$company = trim($data['company'] ?? 'Not specified');
$department = trim($data['department'] ?? 'General Inquiry');
$message = trim($data['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name, email, and message are required.']);
    exit();
}

// 1. Email notification
$subject = "[Website Inquiry] {$department} - {$name}";
$headers = "From: " . SENDER_EMAIL . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$emailBody = "
<html>
<body style='font-family: Arial, sans-serif; background-color: #0c0c0e; color: #fff; padding: 24px;'>
    <div style='max-width: 600px; margin: auto; background: #18181b; padding: 24px; border-radius: 8px; border-top: 4px solid #FF5E3A;'>
        <h2 style='color: #FF5E3A; margin-top: 0;'>New Contact Inquiry</h2>
        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Company:</strong> " . htmlspecialchars($company) . "</p>
        <p><strong>Department:</strong> " . htmlspecialchars($department) . "</p>
        <hr style='border: 1px solid #27272a;'>
        <p><strong>Message:</strong></p>
        <p style='white-space: pre-wrap; background: #0c0c0e; padding: 12px; border-radius: 6px;'>" . htmlspecialchars($message) . "</p>
    </div>
</body>
</html>
";

$mailSent = @mail(RECEIVER_EMAIL, $subject, $emailBody, $headers);

// 2. Log inquiry to file on Hostinger
$logEntry = [
    'date' => date('Y-m-d H:i:s'),
    'name' => $name,
    'email' => $email,
    'company' => $company,
    'department' => $department,
    'message' => $message,
    'mailSent' => $mailSent
];
@file_put_contents('inquiries.log', json_encode($logEntry) . PHP_EOL, FILE_APPEND);

echo json_encode([
    'success' => true,
    'message' => 'Inquiry received successfully and dispatched.',
    'mailSent' => $mailSent
]);

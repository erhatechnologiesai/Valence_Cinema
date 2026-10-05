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

if (!$data || empty($data['contact']['fullName']) || empty($data['contact']['email'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Full name and email are required.']);
    exit();
}

$contact = $data['contact'];
$fullName = trim($contact['fullName'] ?? '');
$email = trim($contact['email'] ?? '');
$phone = trim($contact['phone'] ?? 'N/A');
$company = trim($contact['company'] ?? 'N/A');
$details = trim($contact['projectDetails'] ?? 'None provided');
$services = is_array($data['services'] ?? null) ? implode(', ', $data['services']) : 'Not selected';
$budget = trim($data['budget'] ?? 'Flexible');
$timeline = trim($data['timeline'] ?? 'Flexible');

$subject = "[Project Brief] {$fullName} - {$budget}";
$headers = "From: " . SENDER_EMAIL . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$emailBody = "
<html>
<body style='font-family: Arial, sans-serif; background-color: #0c0c0e; color: #fff; padding: 24px;'>
    <div style='max-width: 600px; margin: auto; background: #18181b; padding: 24px; border-radius: 8px; border-top: 4px solid #FF5E3A;'>
        <h2 style='color: #FF5E3A; margin-top: 0;'>New Project Commission Brief</h2>
        <p><strong>Client:</strong> " . htmlspecialchars($fullName) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
        <p><strong>Company:</strong> " . htmlspecialchars($company) . "</p>
        <hr style='border: 1px solid #27272a;'>
        <p><strong>Budget:</strong> " . htmlspecialchars($budget) . "</p>
        <p><strong>Timeline:</strong> " . htmlspecialchars($timeline) . "</p>
        <p><strong>Services:</strong> " . htmlspecialchars($services) . "</p>
        <p><strong>Details:</strong></p>
        <p style='white-space: pre-wrap; background: #0c0c0e; padding: 12px; border-radius: 6px;'>" . htmlspecialchars($details) . "</p>
    </div>
</body>
</html>
";

$mailSent = @mail(RECEIVER_EMAIL, $subject, $emailBody, $headers);

$logEntry = [
    'date' => date('Y-m-d H:i:s'),
    'fullName' => $fullName,
    'email' => $email,
    'budget' => $budget,
    'services' => $services,
    'mailSent' => $mailSent
];
@file_put_contents('project_briefs.log', json_encode($logEntry) . PHP_EOL, FILE_APPEND);

echo json_encode([
    'success' => true,
    'message' => 'Project brief received and logged successfully.',
    'mailSent' => $mailSent
]);

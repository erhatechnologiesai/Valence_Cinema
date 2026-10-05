# Poppy Productions - Backend Architecture Guide

Poppy Productions website backend has 2 options for receiving form submissions & inquiries:

---

### Option 1: Built-in Next.js Backend (Recommended - Zero Hosting Maintenance)
The backend is integrated in `src/backend` and exposed through Next.js API routes (`/api/contact` and `/api/start-project`).
It connects directly to **Hostinger's Mail Server (SMTP)** or Gmail/Outlook to send emails straight to the owner's inbox.

#### How to configure Hostinger Email on Vercel / `.env.local`:
Add these variables in `.env.local` (for localhost) or on **Vercel Project Settings -> Environment Variables**:

```env
# Hostinger SMTP Configuration
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@poppyproductions.pk
SMTP_PASSWORD=YourHostingerEmailPasswordHere
CONTACT_RECEIVER_EMAIL=info@poppyproductions.pk

# Optional: Webhook URL (Zapier, Google Sheets, Make, or custom CRM)
LEAD_WEBHOOK_URL=
```

---

### Option 2: Hostinger PHP Backend (`hostinger-backend/` folder)
If you prefer running a dedicated PHP backend script on a Hostinger shared hosting cPanel:

1. Log in to your Hostinger hPanel -> File Manager.
2. Navigate to `public_html/api/` (create the `api` folder).
3. Upload all files from the `hostinger-backend/` directory (`config.php`, `contact.php`, `start-project.php`).
4. Edit `config.php` with your receiver email (e.g. `info@poppyproductions.pk`).
5. All inquiries will be sent via Hostinger's built-in mail server and also saved to `inquiries.log` and `project_briefs.log`.

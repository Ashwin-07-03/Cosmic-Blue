# Gmail Setup for Cosmic Blue Careers Form

## Environment Variables Required

Create a `.env.local` file in your project root with:

```env
EMAIL_USER=ashwin.vk71@gmail.com
EMAIL_PASSWORD=your_app_password_here
```

---

## How to Get Gmail App Password

Since Gmail requires "App Passwords" for third-party apps, follow these steps:

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", enable **2-Step Verification**
3. Follow the setup process

### Step 2: Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select app: **Mail**
3. Select device: **Other (Custom name)**
4. Enter: "Cosmic Blue Website"
5. Click **Generate**
6. Copy the 16-character password (no spaces)
7. Paste it in `.env.local` as `EMAIL_PASSWORD`

### Step 3: Save and Restart
1. Save the `.env.local` file
2. Restart your dev server: `npm run dev`

---

## Testing

1. Navigate to http://localhost:3000/careers
2. Fill out the application form
3. Upload a PDF resume
4. Submit
5. Check ashwin.vk71@gmail.com for the application email

---

## Security Notes

- **NEVER commit `.env.local` to Git** (it's already in .gitignore)
- The app password is only for this application
- You can revoke it anytime from your Google Account

---

## If It Doesn't Work

Common issues:
- App password not generated correctly (should be 16 characters)
- 2FA not enabled
- Wrong email in EMAIL_USER
- Dev server not restarted after adding .env.local

---

## Next Steps After Setup

1. Set up `.env.local` with your Gmail app password
2. Restart dev server
3. Test the careers form
4. Applications will arrive at ashwin.vk71@gmail.com with resume attached!

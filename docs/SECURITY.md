# CrewMatch Local Demo Security Notes

This build is a browser-only GitHub Pages demo.

Current local hardening includes output sanitization, restrictive CSP, PBKDF2 password hashing, bounded text/image inputs, browser-storage validation, secure random IDs, local verification-file type/size validation, and IndexedDB storage for applicant verification previews.

Important: localStorage, sessionStorage and IndexedDB are controlled by the browser user. Admin authorization, account verification, moderation enforcement, sessions, password reset, rate limiting and private verification documents must move to a trusted server before public production launch.

Do not treat the demo code or demo verification code as a production security boundary.

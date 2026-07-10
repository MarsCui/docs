---
prev: false
next: true
---

# Register, Sign In, and Reset a Password

This scenario helps end users create an account and helps all roles sign in or recover access through the supported authentication methods.

## Target Outcome

- A new end-user account completes email verification and can sign in.
- Existing operator, provider, and end-user accounts enter the correct workspace.
- A user who forgets a password can verify the registered email and set a new password.

## Before You Start

1. Obtain the AGIOne URL from the platform administrator.
2. Confirm the corporate email can receive verification messages.
3. Use an organization-approved password and do not reuse an API key or access key.
4. Confirm whether the organization permits self-registration or requires an administrator-created account.

## Create an Account

1. Open the AGIOne sign-in page and select `Create Account`.
2. Enter username, password, password confirmation, and corporate email.
3. Send and enter the email verification code.
4. Accept the privacy policy and terms of service.
5. Submit the form and return to sign-in after creation succeeds.

## Sign In

### Password

1. Select `Password Sign-In`.
2. Enter the username or registered email and password.
3. Accept the privacy policy and terms of service.
4. Select `Sign In` and confirm that the correct workspace opens.

### Email Verification Code

1. Select `Email Verification Code`.
2. Enter the registered email and request a code.
3. Enter the code before it expires, accept the terms, and sign in.

## Reset a Password

1. Select `Forgot Password` on the sign-in page.
2. Verify the registered corporate email with a verification code.
3. Enter and confirm the new password.
4. Submit the change and return to sign-in with the new password.

## Completion Checklist

- [ ] A new account completes email verification and signs in.
- [ ] Password and email-code sign-in enter the correct tenant and workspace.
- [ ] The old password no longer works after reset and the new password does.
- [ ] Failed authentication shows a useful error without exposing account-sensitive information.

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Verification email is missing | Email address, spam folder, resend timer, and mail service state |
| Account creation fails | Duplicate username, password policy, code expiry, and accepted terms |
| Wrong workspace opens | Tenant assignment, assigned role, and default entry |
| New password does not work | Use of the new password, account state, keyboard input, and sign-in method |

## Feature Screenshots

![Create an account](./images/create-your-account.png)

![Password login](./images/password.png)

![Reset a password](./images/reset-password.png)

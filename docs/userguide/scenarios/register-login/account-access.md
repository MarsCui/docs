---
prev: false
next: true
---

# Register, Sign In, and Reset a Password

This scenario helps end users create an account and helps all roles sign in or recover access through the supported authentication methods.

## Applicable Roles

- Platform User creating an account
- Model Provider and Platform Operator signing in or recovering access

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

1. Open the AGIOne sign-in page and select **Create Account**.

![Open account creation](./images/create-your-account.png)

2. Enter username, password, password confirmation, and corporate email.
3. Send the verification code and enter it before it expires.

![Enter the email verification code](./images/verification-code.png)

4. Accept the privacy policy and terms of service.
5. Submit the form, verify the email when prompted, and return to sign-in after creation succeeds.

![Verify the registered email](./images/verify-email.png)

## Sign In

### Password

1. Select **Password Sign-In** and enter the username or registered email and password.

![Use password sign-in](./images/password.png)

2. Accept the privacy policy and terms of service.
3. Select **Sign In** and confirm that the correct workspace opens.

### Email Verification Code

1. Select **Email Verification Code**.
2. Enter the registered email and request a code.
3. Enter the code before it expires, accept the terms, and sign in.

## Reset a Password

1. Select **Forgot Password** on the sign-in page.
2. Verify the registered corporate email with a verification code.
3. Enter and confirm the new password.

![Set a new password](./images/reset-password.png)

4. Submit the change and return to sign-in with the new password.

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | A new account completes email verification and signs in. |
| 2 | Password and email-code sign-in enter the correct tenant and workspace. |
| 3 | The old password no longer works after reset and the new password does. |
| 4 | Failed authentication shows a useful error without exposing account-sensitive information. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Verification email is missing | Email address, spam folder, resend timer, and mail service state |
| Account creation fails | Duplicate username, password policy, code expiry, and accepted terms |
| Wrong workspace opens | Tenant assignment, assigned role, and default entry |
| New password does not work | Use of the new password, account state, keyboard input, and sign-in method |

## User Manual

[Choose the relevant subsystem after sign-in](/usermanual/)

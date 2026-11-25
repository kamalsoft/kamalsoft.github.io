---
name: rlm-crypto-review
description: "Review cryptographic code: algorithms, modes, key sizes, random numbers, password hashing and certificate checks. Use when code encrypts, signs, hashes or generates secrets."
---

<!-- managed-by: -->

# Cryptography review

Review cryptographic code: algorithms, modes, key sizes, random numbers, password hashing and certificate checks. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find the crypto.** List each place the code encrypts, signs, hashes, generates random values or checks certificates.
2. **Check algorithms.** Flag broken or deprecated algorithms (MD5, SHA-1, DES, RC4) and home-made constructions.
3. **Check modes and keys.** Flag ECB mode, a fixed IV or nonce, and keys shorter than current guidance.
4. **Check random values.** Security tokens must come from a cryptographic random source, not a general-purpose one.
5. **Check password hashing.** Passwords need a slow, salted hash such as Argon2, scrypt, bcrypt or PBKDF2. Flag fast hashes.
6. **Report.** List each finding with its location, severity and the fix. Mark what needs a specialist to confirm.

## Post-production

- **Weak hashing** makes a stolen database quick to crack. Use a slow password hash.
- **Predictable tokens** let attackers guess sessions. Use a cryptographic random source.
- **Coding-time prevention:** use the platform's vetted crypto library and its defaults.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.

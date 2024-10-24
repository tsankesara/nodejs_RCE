# JS Exploits

A collection of tools and scripts showcasing common exploitation techniques in Node.js applications. This repository serves as a practical guide for security researchers to understand and exploit web vulnerabilities, including deserialization, XSS, SQL injection, and cookie manipulation.

## Features

- **Deserialization Attack**: Exploit insecure deserialization to achieve Remote Code Execution (RCE).
- **Cookie Exploitation**: Tamper with cookies to gain unauthorized access.
- **XSS (Cross-Site Scripting)**: Inject malicious scripts in web applications.
- **SQL Injection**: Compromise database integrity using SQL injection.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- Basic understanding of web application security, particularly vulnerabilities like XSS, deserialization, and SQL injection.

## Installation

To clone and set up the repository, follow these steps:

```bash
git clone https://github.com/tsankesara/js_exploits
cd js_exploits
npm install
```
### Deserialization Attack (Remote Code Execution)

This script demonstrates an exploit for Node.js applications vulnerable to insecure deserialization. By crafting a malicious serialized object, it allows Remote Code Execution (RCE) on the target system.

#### Steps to Use

1. Ensure Node.js is installed.
2. Save the script as `rce_deserialization.js`.
3. Make Your Edits in the script.
4. Run the script:
   ```bash
   node rce_deserialization.js
   ```

   

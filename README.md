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

A deserialization attack occurs when an application processes untrusted or user-controlled data during deserialization, leading to potential Remote Code Execution (RCE). Insecure deserialization allows attackers to craft malicious objects that, when deserialized by the application, can execute arbitrary code.


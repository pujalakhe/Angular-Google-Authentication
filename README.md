
# Google Sign-In Integration with Angular

![Angular](https://img.shields.io/badge/Angular-Framework-red)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Introduction

This project demonstrates the integration of **Google Sign-In** with an **Angular** application.  
It uses **Google's OAuth 2.0 API** to allow users to authenticate and log in via their Google accounts.  
The implementation ensures secure and seamless authentication, making it easy to manage user sessions in Angular applications.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Documentation](#documentation)

- [License](#license)

---

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/angular-google-signin.git
    cd angular-google-signin
    ```

2. **Install project dependencies**

    ```bash
    npm install
    ```

3. **Set up Google API credentials**
    - Go to the [Google Cloud Console](https://console.cloud.google.com/).
    - Create a new project (or select an existing one).
    - Enable the **Google Identity Services API**.
    - Create OAuth 2.0 Client ID credentials.
    - Configure the **Authorized JavaScript Origins** (e.g., `http://localhost:4200`).

4. **Configure the environment variables**

    Update `src/environments/environment.ts`:

    ```typescript
    export const environment = {
      production: false,
      googleClientId: 'YOUR_GOOGLE_CLIENT_ID_HERE'
    };
    ```

---

## Usage

1. **Start the development server**

    ```bash
    ng serve
    ```

2. **Access the application**

    Open your browser at:

    ```
    http://localhost:4200/
    ```

3. **Sign in**

    Click the "Sign in with Google" button to authenticate via Google.

---

## Features

- OAuth 2.0 authentication via Google.
- User profile retrieval after successful sign-in.
- Token management and session handling.
- Easy-to-integrate Angular service for authentication flow.
- Error handling during login and logout.

---

## Dependencies

- [Angular](https://angular.io/) (vXX - specify the version you used)
- [@abacritt/angularx-social-login](https://www.npmjs.com/package/@abacritt/angularx-social-login) (or equivalent)
- [Google Identity Services](https://developers.google.com/identity/gsi/web/guides/overview)

---

## Configuration

- Ensure your Google Cloud project has the **Google Identity Services API** enabled.
- Your app's **Authorized JavaScript Origins** must match your development and production URLs.
- Double-check your Client ID and environment configurations.

---

## Documentation

- [Google Identity Platform Documentation](https://developers.google.com/identity)
- [Angular Documentation](https://angular.io/docs)

---

## Run Backend Server
node server.js



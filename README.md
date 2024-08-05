<h1 align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
  <br>discord-giveaway-bot
</h1>
<h4 align="center">A Discord bot designed to automate and streamline giveaways</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<p align="center">
  <img src="https://img.shields.io/badge/Framework-React-blue" alt="Framework: React" />
  <img src="https://img.shields.io/badge/Frontend-Javascript,_Html,_Css-red" alt="Frontend: Javascript, HTML, CSS" />
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend: Node.js" />
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="LLMs: Custom, Gemini, OpenAI" />
</p>
<p align="center">
  <img src="https://img.shields.io/github/last-commit/spectra-ai-codegen/discord-giveaway-bot?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/spectra-ai-codegen/discord-giveaway-bot?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/spectra-ai-codegen/discord-giveaway-bot?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</p>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository contains a Discord giveaway bot project designed to simplify giveaway management on Discord servers. It provides a comprehensive solution with features like automated giveaway creation, entry management, winner selection, and announcement capabilities. The project is built using a robust and scalable tech stack, including React, Node.js, PostgreSQL, and custom AI models.

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | Architecture   | The codebase utilizes a modular architecture, with distinct directories for commands, events, services, models, and utilities, ensuring maintainability and scalability. |
| 📄 | Documentation  | This README file provides a comprehensive overview of the project, its features, dependencies, installation instructions, and usage examples.                       |
| 🔗 | Dependencies   | The project relies on various external libraries such as Discord.js for interacting with the Discord API, Prisma for database management, Next.js for frontend development, and other packages for functionality.|
| 🧩 | Modularity     | The codebase is highly modular, with each component and functionality separated into dedicated directories and files, promoting code reusability and maintainability.     |
| 🧪 | Testing        |  Implement unit tests using Jest or React Testing Library to ensure the reliability and robustness of the codebase.|
| ⚡️  | Performance    | The bot is optimized for performance using caching mechanisms, efficient database queries, and asynchronous operations to minimize latency and improve responsiveness.|
| 🔐 | Security       |  Security measures include input validation, sanitization, and secure API integration, protecting against vulnerabilities and ensuring data privacy.                      |
| 🔀 | Version Control| The project uses Git for version control, with a GitHub Actions workflow for automated build and deployment processes.                                      |
| 🔌 | Integrations   | The bot seamlessly integrates with the Discord API for interactions and data retrieval. It may also integrate with external services like payment gateways or prize delivery platforms.     |
| 📶 | Scalability    | The bot is designed for scalability to handle increasing user traffic and data volume. This includes database optimization, caching, and the potential for horizontally scaling the server infrastructure. |

## 📂 Structure

```
├── src
│   ├── commands
│   │   ├── create.js
│   │   ├── enter.js
│   │   ├── end.js
│   │   ├── winners.js
│   │   ├── help.js
│   │   └── dashboard.js
│   ├── events
│   │   ├── ready.js
│   │   ├── message.js
│   │   └── interactionCreate.js
│   ├── services
│   │   ├── giveawayService.js
│   │   ├── databaseService.js
│   │   ├── discordService.js
│   │   └── notificationService.js
│   ├── models
│   │   ├── Giveaway.js
│   │   ├── User.js
│   │   └── Prize.js
│   ├── utils
│   │   ├── commandHandler.js
│   │   ├── logger.js
│   │   ├── errorHandler.js
│   │   └── randomWinnerSelector.js
│   ├── config
│   │   ├── env.config.js
│   │   └── database.config.js
│   ├── routes
│   │   ├── api.js
│   │   └── authRoutes.js
│   ├── middleware
│   │   ├── authentication.js
│   │   ├── authorization.js
│   │   └── logging.js
│   └── prisma
│       └── schema.prisma
├── public
│   ├── index.html
│   ├── favicon.ico
│   ├── robots.txt
│   └── manifest.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## 💻 Installation
### 🔧 Prerequisites
- Node.js (v18+)
- npm 
- Docker

### 🚀 Setup Instructions
1. Clone the repository:
     - `git clone https://github.com/spectra-ai-codegen/discord-giveaway-bot.git`
2. Navigate to the project directory:
     - `cd discord-giveaway-bot`
3. Install dependencies:
     - `npm install`
  
## 🏗️ Usage
### 🏃‍♂️ Running the Project
1. Start the development server:
     - `npm start`
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### ⚙️ Configuration
Adjust configuration settings in `config.js` or `.env`.
  
### 📚 Examples
- 📝 Example 1: Creating a new giveaway
    - `/create` command with arguments for prize, duration, entry requirements, and number of winners.
- 📝 Example 2: Entering a giveaway
    - `/enter` command with the giveaway ID.
- 📝 Example 3: Ending a giveaway
    - `/end` command with the giveaway ID (only for admins).
- 📝 Example 4: Viewing winners
    - `/winners` command with the giveaway ID.
- 📝 Example 5: Accessing the admin dashboard
    - `/dashboard` command (redirects to the web interface).

  
  ## 🌐 Hosting
  ### 🚀 Deployment Instructions

  #### Heroku Deployment
  1. Install the Heroku CLI:
     - `npm install -g heroku`
  2. Login to Heroku:
     - `heroku login`
  3. Create a new Heroku app:
     - `heroku create`
  4. Deploy the code:
     - `git push heroku main`
  
  #### Environment Variables
  - `DISCORD_BOT_TOKEN`: Your Discord bot token.
  - `DATABASE_URL`: Your PostgreSQL database connection string.
  - `NEXTAUTH_SECRET`: Your NextAuth.js secret key.
  
  ## 📜 API Documentation
  ### 🔍 Endpoints
  - POST /api/giveaways: Creates a new giveaway.
  - GET /api/giveaways/:id: Retrieves a specific giveaway.
  - PUT /api/giveaways/:id: Updates a giveaway.
  - DELETE /api/giveaways/:id: Deletes a giveaway.
  - POST /api/giveaways/:id/enter: Enters a giveaway.
  - POST /api/giveaways/:id/end: Ends a giveaway.
  
  ### 🔒 Authentication
  Use JWT tokens for authentication to access the API.
  
  ### 📝 Examples
  - `curl -X POST -H "Content-Type: application/json" -d '{"prize": "Discord Nitro", "duration": 86400, "entryRequirements": [], "numberOfWinners": 1}' http://localhost:3000/api/giveaways`
  
  ## 📜 License
  This project is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/).
  
  ## 👥 Authors
  - Author Name - [Spectra.codes](https://spectra.codes)
  - Creator Name - [DRIX10](https://github.com/Drix10)

  <p align="center">
    <h1 align="center">🌐 Spectra.Codes</h1>
  </p>
  <p align="center">
    <em>Why only generate Code? When you can generate the whole Repository!</em>
  </p>
  <p align="center">
	<img src="https://img.shields.io/badge/Developer-Drix10-red" alt="">
	<img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="">
	<img src="https://img.shields.io/badge/Backed_by-Google_&_Microsoft_for_Startups-red" alt="">
	<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="">
  <p>
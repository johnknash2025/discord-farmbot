# Development Environment Setup

This guide explains how to set up a development environment for Discord Farmbot.

## 🎯 Prerequisites

### Required Software
- **Node.js 18+** - JavaScript runtime
- **npm** - Package manager
- **Git** - Version control
- **Code Editor** - VS Code recommended

### Required Accounts
- **Discord Developer Account** - For bot creation
- **Google AI Studio Account** - For Gemini API
- **Cloudflare Account** - For deployment (optional for development)

## 🚀 Quick Setup

### 1. Clone Repository

```bash
# Clone via HTTPS
git clone https://github.com/johnknash2025/discord-farmbot.git
cd discord-farmbot

# Or clone via SSH
git clone git@github.com:johnknash2025/discord-farmbot.git
cd discord-farmbot
```

### 2. Install Dependencies

```bash
# Install all dependencies
npm install

# Verify installation
npm list --depth=0
```

### 3. Environment Variables Setup

```bash
# Copy template file
cp .dev.vars.example .dev.vars

# Edit environment variables
# Use your preferred editor
nano .dev.vars
# or
code .dev.vars
```

Required environment variables:
```env
# Discord Bot Configuration
DISCORD_PUBLIC_KEY=your_discord_public_key_here
DISCORD_BOT_TOKEN=your_discord_bot_token_here

# Gemini AI Configuration
GEMINI_API_KEY=your_gemini_api_key_here
```

## 🔑 Getting API Keys

### Discord Bot Setup

1. **Create Application**
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Click "New Application"
   - Enter application name: "Discord Farmbot"

2. **Create Bot**
   - Navigate to "Bot" section
   - Click "Add Bot"
   - Copy the bot token → `DISCORD_BOT_TOKEN`

3. **Get Public Key**
   - Go to "General Information" section
   - Copy "Public Key" → `DISCORD_PUBLIC_KEY`

4. **Set Bot Permissions**
   - Go to "Bot" section
   - Enable required permissions:
     - Send Messages
     - Use Slash Commands
     - Create Public Threads
     - Send Messages in Threads

### Gemini API Setup

1. **Access Google AI Studio**
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with Google account

2. **Create API Key**
   - Click "Create API Key"
   - Copy the generated key → `GEMINI_API_KEY`

3. **Verify API Access**
   ```bash
   # Test API connection
   npm run test:gemini
   ```

## 🛠️ Development Commands

### Start Development Server

```bash
# Start local development server
npm run start

# Server will start on http://localhost:8787
```

### Register Discord Commands

```bash
# Register slash commands with Discord
node scripts/register-commands.js
```

### Run Tests

```bash
# Run all tests
npm test

# Run specific test
npm run test:env
npm run test:gemini
npm run test:bot
```

### Code Quality

```bash
# Check code formatting
npm run lint

# Fix formatting issues
npm run lint:fix
```

## 🔧 Development Workflow

### 1. Local Testing

```bash
# Terminal 1: Start development server
npm run start

# Terminal 2: Test endpoints
curl http://localhost:8787/health
```

### 2. Discord Bot Testing

1. **Create Test Server**
   - Create a Discord server for testing
   - Invite your bot with proper permissions

2. **Test Commands**
   ```
   /analyze
   # Attach a test image
   ```

3. **Check Logs**
   ```bash
   # View real-time logs
   npm run dev:logs
   ```

### 3. External Access Setup

For Discord webhook testing, you need external access:

```bash
# Install ngrok
npm install -g ngrok

# Create tunnel
ngrok http 8787

# Use the HTTPS URL for Discord webhook
```

## 📁 Project Structure

```
discord-farmbot/
├── farmbot.js              # Main Worker file
├── package.json            # Dependencies and scripts
├── wrangler.toml           # Cloudflare Workers config
├── .dev.vars.example       # Environment variables template
├── .gitignore             # Git ignore rules
├── LICENSE                # License file
├── README.md              # Project overview
├── CHANGELOG.md           # Change history
│
├── scripts/               # Utility scripts
│   ├── deploy-secrets.sh  # Environment variable deployment
│   └── register-commands.js # Discord command registration
│
├── tests/                 # Test files
│   ├── test-env.js        # Environment variable tests
│   ├── test-gemini-api.js # Gemini API tests
│   ├── test-bot.js        # Bot functionality tests
│   └── test-endpoints.js  # Endpoint tests
│
├── docs/                  # Documentation
│   ├── .vuepress/         # VuePress configuration
│   ├── user-guide/        # User guides
│   ├── developer-guide/   # Developer guides
│   └── deployment/        # Deployment guides
│
└── .github/               # GitHub configuration
    └── workflows/         # GitHub Actions
        └── deploy-docs.yml # Documentation deployment
```

## 🧪 Testing Strategy

### Unit Tests
```bash
# Test individual functions
npm run test:unit
```

### Integration Tests
```bash
# Test API integrations
npm run test:integration
```

### End-to-End Tests
```bash
# Test complete workflows
npm run test:e2e
```

## 🔍 Debugging

### Enable Debug Mode

```bash
# Set debug environment
export DEBUG=farmbot:*

# Start with debug logging
npm run start:debug
```

### Common Debug Commands

```bash
# Check environment variables
npm run debug:env

# Test Discord connection
npm run debug:discord

# Test Gemini API
npm run debug:gemini
```

## 📚 Next Steps

Once your development environment is set up:

1. **[Architecture Understanding](./architecture.md)** - Learn system structure
2. **[API Reference](./api-reference.md)** - Check API specifications
3. **[Testing Guide](./testing.md)** - Learn testing methods
4. **[Contributing](./contributing.md)** - Development participation methods

---

::: tip 💡 Development Tips
- Use environment variables for all sensitive data
- Test with small images first (under 100KB)
- Monitor API usage to avoid rate limits
- Keep your development Discord server separate from production
:::

::: warning ⚠️ Security Note
Never commit `.dev.vars` file or expose API keys in code. Use environment variables for all sensitive configuration.
:::
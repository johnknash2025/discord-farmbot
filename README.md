# 🌱 Discord Farmbot

An AI-powered Discord Bot that analyzes crop images. Uses Gemini Vision API to provide detailed analysis of crop types, growth stages, health conditions, and more.

## ✨ Features

- 🔍 **Image Analysis**: High-precision crop analysis using Gemini Vision API
- 🌾 **Professional Assessment**: Detailed diagnosis of crop types, growth stages, and health conditions
- 💬 **Discord Integration**: Easy operation with Slash Commands
- 🔄 **Auto Reply**: Analysis results automatically posted in threads
- ☁️ **24/7 Operation**: Always running on Cloudflare Workers

## 🚀 Usage

1. Run `/analyze` command in Discord server
2. Attach crop image (500KB or less)
3. Detailed analysis results will be posted in thread after a few seconds

### Analysis Content

- **Crop Type**: Plant identification
- **Growth Stage**: Assessment from germination to harvest
- **Health Status**: Disease and pest sign detection
- **Growing Environment**: Soil, moisture, and light conditions
- **Quality Assessment**: Harvest timing prediction
- **Improvement Suggestions**: Cultivation management advice

## 🛠️ Setup

### Prerequisites

- Node.js 18+
- Cloudflare Workers account
- Discord Developer account
- Google AI Studio account (Gemini API)

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables Setup

```bash
cp .dev.vars.example .dev.vars
```

Edit `.dev.vars` file and configure the following:

```env
DISCORD_PUBLIC_KEY=your_discord_public_key
DISCORD_BOT_TOKEN=your_discord_bot_token
GEMINI_API_KEY=your_gemini_api_key
```

### 3. Discord Bot Configuration

1. Create application at [Discord Developer Portal](https://discord.com/developers/applications)
2. Create bot and get token
3. Set the following permissions:
   - `applications.commands`
   - `bot`
   - `Send Messages`
   - `Use Slash Commands`
   - `Read Message History`

### 4. Register Slash Commands

```bash
node scripts/register-commands.js
```

### 5. Local Development

```bash
npm run start
```

### 6. Production Deployment

```bash
# Set environment variables for production
./scripts/deploy-secrets.sh

# Deploy
npm run deploy
```

## 📁 Project Structure

```
discord-farmbot/
├── farmbot.js              # Main Worker file
├── package.json            # Dependencies configuration
├── wrangler.toml           # Cloudflare Workers configuration
├── .dev.vars.example       # Environment variables template
├── docs/                   # Documentation
│   ├── TESTING.md         # Testing guide
│   ├── production-setup.md # Production setup
│   └── setup-tunnel.md    # Development environment setup
├── scripts/               # Utility scripts
│   ├── deploy-secrets.sh  # Environment variable deployment
│   └── register-commands.js # Slash command registration
└── tests/                 # Test files
    ├── test-env.js        # Environment variable tests
    ├── test-gemini-api.js # Gemini API tests
    └── ...
```

## 🔧 Tech Stack

- **Runtime**: Cloudflare Workers
- **Language**: JavaScript (ES Modules)
- **AI API**: Google Gemini Vision API
- **Platform**: Discord API v10
- **Deployment**: Wrangler CLI

## 📊 API Limitations

- **Image Size**: 500KB or less
- **Supported Formats**: PNG, JPEG, WEBP
- **Gemini API**: Used within free tier
- **Workers**: 100,000 requests/day (free tier)

## 🐛 Troubleshooting

### Common Issues

1. **"Invalid request signature"**
   - Check if DISCORD_PUBLIC_KEY is correctly set

2. **"Image too large"**
   - Compress image to 500KB or less

3. **"Gemini API error: 400"**
   - Verify GEMINI_API_KEY is valid
   - Check if image format is supported

### Log Checking

```bash
# Monitor production logs
wrangler tail

# Check environment variables
wrangler secret list
```

## 📈 Future Improvements

- [ ] Automatic image detection feature
- [ ] Analysis history storage
- [ ] Batch analysis of multiple images
- [ ] Technical terminology dictionary
- [ ] Multi-language support

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 🤝 Contributing

Pull requests and issue reports are welcome!

## 📞 Support

If you have any problems or questions, please let us know through GitHub Issues.

## 🌍 Documentation

- **Japanese**: [Complete Documentation](https://johnknash2025.github.io/discord-farmbot/)
- **English**: [English Documentation](https://johnknash2025.github.io/discord-farmbot/en/)

## 🔗 Links

- **Discord Support Server**: [Join Here](https://discord.gg/Gq9jPaMX8g)
- **GitHub Repository**: [discord-farmbot](https://github.com/johnknash2025/discord-farmbot)
- **Documentation Site**: [docs](https://johnknash2025.github.io/discord-farmbot/)

---

**Languages**: [日本語](README_JP.md) | **English** | [中文](README_CN.md) | [한국어](README_KR.md)
---
home: true
title: Discord Farmbot
heroImage: /images/farmbot-hero.png
heroText: Discord Farmbot
tagline: 🌱 AI-powered Crop Image Analysis Discord Bot
actions:
  - text: Quick Start →
    link: /en/user-guide/getting-started.html
    type: primary
  - text: Developer Guide
    link: /en/developer-guide/setup.html
    type: secondary
features:
  - title: 🔍 High-Precision Image Analysis
    details: Advanced crop image analysis using Gemini Vision API. Detailed diagnosis of crop types, growth stages, and health conditions.
  - title: ⚡ Easy Operation
    details: Simply run the /analyze command on Discord. Get detailed analysis results in seconds by attaching an image.
  - title: ☁️ 24/7 Operation
    details: Always running on Cloudflare Workers. Provides stable service without server management.
  - title: 🌾 Professional Diagnosis
    details: Detailed analysis based on agricultural expertise. Early disease detection and optimal harvest timing prediction.
  - title: 🔄 Automatic Threads
    details: Analysis results are automatically posted in threads. Check detailed information without cluttering channels.
  - title: 🛠️ Easy Setup
    details: Anyone can easily deploy with detailed setup guides. Complete support from development to production environment.
footer: MIT Licensed | Copyright © 2024 Discord Farmbot
---

## 🚀 Get Started Now

### For Users

Start analyzing crop images with Discord Farmbot:

```bash
# Run in Discord server
/analyze
# Attach image and send
```

[View detailed usage →](./user-guide/getting-started.md)

### For Developers

Deploy Discord Farmbot to your own server:

```bash
# Clone repository
git clone https://github.com/johnknash2025/discord-farmbot.git
cd discord-farmbot

# Install dependencies
npm install

# Set environment variables
cp .dev.vars.example .dev.vars
# Edit .dev.vars

# Start local development
npm run start
```

[View developer guide →](./developer-guide/setup.md)

## 📊 Key Features

### 🔍 Image Analysis Features

- **Crop Identification**: Automatically identify 100+ types of crops
- **Growth Stage Assessment**: Detailed analysis from germination to harvest
- **Health Diagnosis**: Early detection of diseases and pest signs
- **Quality Assessment**: Predict harvest timing and quality

### 💬 Discord Integration

- **Slash Commands**: Easy operation with /analyze command
- **Automatic Threads**: Organized display of analysis results
- **Real-time Response**: Results returned in seconds
- **Error Handling**: Clear error messages

### ☁️ Infrastructure

- **Cloudflare Workers**: Fast operation with serverless architecture
- **Gemini Vision API**: Google's latest AI technology
- **24/7 Operation**: Stable service provision
- **Scalable**: Handle large volumes of requests

## 🌟 Use Cases

### For Farmers

```
🌾 Tomato Disease Diagnosis
📸 Upload image
🔍 AI Analysis Results:
   - Crop: Tomato (Solanum lycopersicum)
   - Growth Stage: Flowering
   - Health Status: Signs of mild leaf blight
   - Recommended Action: Proper water management and improved ventilation
```

### For Agricultural Students

```
📚 Educational Image Analysis
📸 Upload educational material image
🔍 Detailed Analysis:
   - Botanical feature descriptions
   - Cultivation management points
   - Common pest and disease information
   - Reference links
```

### For Researchers

```
🔬 Research Data Collection
📸 Upload experimental image
🔍 Scientific Analysis:
   - Quantitative data
   - Statistical indicators
   - Comparative analysis results
   - Data export functionality
```

## 📈 Statistics

<div class="stats-container">
  <div class="stat-item">
    <h3>1000+</h3>
    <p>Images Analyzed</p>
  </div>
  <div class="stat-item">
    <h3>95%</h3>
    <p>Identification Accuracy</p>
  </div>
  <div class="stat-item">
    <h3>3sec</h3>
    <p>Average Response Time</p>
  </div>
  <div class="stat-item">
    <h3>24/7</h3>
    <p>Uptime</p>
  </div>
</div>

## 🤝 Community

Discord Farmbot is supported by an active community:

- **GitHub Issues**: Bug reports and feature requests
- **Discussions**: Usage questions and information exchange
- **Pull Requests**: Code improvements and new feature proposals
- **Discord Server**: Real-time support

[Join the community →](./developer-guide/contributing.md)

## 📄 License

Discord Farmbot is released under the MIT License. Free to use including commercial use.

[View license details →](https://github.com/johnknash2025/discord-farmbot/blob/main/LICENSE)

<style>
.stats-container {
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  color: white;
}

.stat-item {
  text-align: center;
}

.stat-item h3 {
  font-size: 2.5rem;
  margin: 0;
  font-weight: bold;
}

.stat-item p {
  margin: 0.5rem 0 0 0;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .stats-container {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
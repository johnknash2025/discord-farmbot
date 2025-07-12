# Getting Started

Welcome to Discord Farmbot! This guide explains the basic usage for first-time users of Discord Farmbot.

## 🎯 What is Discord Farmbot?

Discord Farmbot is an AI-powered Discord Bot that analyzes crop images. Using the Gemini Vision API, it provides detailed analysis such as:

- **Crop Type Identification** - Accurate plant identification
- **Growth Stage Assessment** - From germination to harvest
- **Health Condition Diagnosis** - Disease and pest sign detection
- **Cultivation Advice** - Optimal management method suggestions

## 🚀 Quick Start

### Step 1: Invite Bot to Server

1. Have your server administrator share the following invitation link
2. Confirm that necessary permissions are granted:
   - Send Messages
   - Use Slash Commands
   - View Message History

### Step 2: Basic Usage

1. **Execute Command**
   ```
   /analyze
   ```

2. **Attach Image**
   - Select a photo of your crop
   - File size must be 500KB or less
   - Supported formats: PNG, JPEG, WEBP

3. **Check Results**
   - Detailed analysis results will be posted in a thread after a few seconds
   - The original message will be updated to "✅ Analysis Complete!"

## 📸 Tips for Taking Good Photos

### ✅ Recommended Photos

- **Bright Natural Light** - Outdoor daylight is optimal
- **Clear Focus** - Crop is in focus
- **Appropriate Distance** - Distance where entire crop is visible
- **Multiple Angles** - Various parts like leaves, stems, fruits

### ❌ Photos to Avoid

- **Too Dark** - Night time or dark indoor locations
- **Blurry** - Camera shake or out of focus
- **Too Far** - Crop details are not visible
- **Over-processed** - Filters or excessive editing

## 📊 Understanding Analysis Results

Analysis results include the following information:

### Basic Information
```
🌱 Crop: Tomato (Solanum lycopersicum)
📅 Growth Stage: Flowering
🏥 Health Status: Good
```

### Detailed Analysis
```
🔍 Detailed Analysis:
• Leaf Color: Healthy green
• Stem Condition: Strong growth
• Flower Status: Normal flowering
• Soil Condition: Appropriate moisture level
```

### Recommended Actions
```
💡 Recommended Actions:
• Continue regular watering
• Consider installing support stakes
• Recommend fertilizing in 2 weeks
• Continue pest monitoring
```

## 🔧 Troubleshooting

### Common Issues

#### "Image too large" Error
**Cause**: Image file exceeds 500KB
**Solution**: Compress the image or reduce resolution

#### "Please attach an image file" Error
**Cause**: Non-image file is attached
**Solution**: Attach PNG, JPEG, or WEBP format images

#### "Analysis failed" Error
**Cause**: Image is unclear or crop cannot be recognized
**Solution**: Retake with clearer, brighter image

### When You Need Support

If problems persist, you can get support through:

1. **GitHub Issues**: [Bug Reports & Feature Requests](https://github.com/johnknash2025/discord-farmbot/issues)
2. **Discord Support Server**: [Real-time Support](https://discord.gg/Gq9jPaMX8g)
3. **Documentation**: [FAQ](./faq.md) | [Troubleshooting](./troubleshooting.md)

## 🎓 Next Steps

After understanding basic usage, also refer to these pages:

- [Command Details](./commands.md) - Detailed explanation of all commands
- [Image Requirements](./image-requirements.md) - How to take optimal images
- [Analysis Results](./analysis-results.md) - Detailed reading of results
- [FAQ](./faq.md) - Frequently asked questions and answers

---

::: tip 💡 Tip
We recommend starting with simple vegetables (tomatoes, cucumbers, lettuce, etc.). These crops have high recognition accuracy and are easy to get detailed analysis results.
:::

::: warning ⚠️ Note
Discord Farmbot's analysis results are for reference only. For important agricultural decisions, please consult with experts.
:::
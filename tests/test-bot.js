import farmbot from './farmbot.js';

// テスト用のモックデータ
const mockDiscordPing = {
  type: 1
};

const mockSlashCommand = {
  type: 2,
  application_id: "123456789",
  token: "test_token",
  channel_id: "987654321",
  id: "message_id_123",
  data: {
    name: "analyze",
    options: [
      {
        name: "image",
        value: "attachment_id_123"
      }
    ],
    resolved: {
      attachments: {
        "attachment_id_123": {
          url: "https://example.com/test-image.jpg",
          content_type: "image/jpeg",
          filename: "test-crop.jpg"
        }
      }
    }
  }
};

// テスト用の環境変数
const mockEnv = {
  DISCORD_PUBLIC_KEY: "0".repeat(64), // 64文字のダミーキー
  DISCORD_BOT_TOKEN: "test_bot_token",
  GEMINI_API_KEY: "test_gemini_key"
};

// テスト用のコンテキスト
const mockCtx = {
  waitUntil: (promise) => {
    console.log("Background task scheduled:", promise);
    return promise;
  }
};

async function testBot() {
  console.log("🧪 Discord Farmbot テスト開始\n");

  // Test 1: Ping応答テスト
  console.log("1️⃣ Ping応答テスト");
  try {
    const pingRequest = new Request("https://test.com", {
      method: "POST",
      headers: {
        "x-signature-ed25519": "0".repeat(128),
        "x-signature-timestamp": Date.now().toString()
      },
      body: JSON.stringify(mockDiscordPing)
    });

    // 署名検証をスキップするためのテスト用修正が必要
    console.log("⚠️  実際のテストには署名検証の調整が必要です");
    
  } catch (error) {
    console.log("❌ Pingテストエラー:", error.message);
  }

  // Test 2: コマンド構造テスト
  console.log("\n2️⃣ コマンド構造テスト");
  try {
    // 画像オプションの検証
    const imageOption = mockSlashCommand.data.options?.find(opt => opt.name === 'image');
    if (imageOption) {
      console.log("✅ 画像オプション検出: OK");
    } else {
      console.log("❌ 画像オプション検出: NG");
    }

    // 添付ファイルの検証
    const attachment = mockSlashCommand.data.resolved?.attachments?.[imageOption.value];
    if (attachment && attachment.content_type?.startsWith('image/')) {
      console.log("✅ 画像添付ファイル検証: OK");
      console.log(`   - ファイル名: ${attachment.filename}`);
      console.log(`   - タイプ: ${attachment.content_type}`);
    } else {
      console.log("❌ 画像添付ファイル検証: NG");
    }

  } catch (error) {
    console.log("❌ コマンド構造テストエラー:", error.message);
  }

  // Test 3: 環境変数テスト
  console.log("\n3️⃣ 環境変数テスト");
  const requiredVars = ['DISCORD_PUBLIC_KEY', 'DISCORD_BOT_TOKEN', 'GEMINI_API_KEY'];
  requiredVars.forEach(varName => {
    if (mockEnv[varName]) {
      console.log(`✅ ${varName}: 設定済み`);
    } else {
      console.log(`❌ ${varName}: 未設定`);
    }
  });

  console.log("\n📋 テスト完了");
  console.log("\n次のステップ:");
  console.log("1. .dev.vars.example を .dev.vars にコピー");
  console.log("2. 実際のAPI キーを設定");
  console.log("3. wrangler dev でローカルテスト");
  console.log("4. Discord でコマンド登録");
  console.log("5. 実際の画像でテスト");
}

testBot().catch(console.error);
import fs from 'fs';

// 修正されたBase64変換関数
function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  
  const chunkSize = 0x8000; // 32KB chunks
  
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, chunk);
  }
  
  return btoa(binary);
}

// .dev.vars から環境変数を読み込み
function loadEnvVars() {
  const envContent = fs.readFileSync('.dev.vars', 'utf8');
  const env = {};
  
  envContent.split('\n').forEach(line => {
    line = line.trim();
    if (line && !line.startsWith('#')) {
      const [key, value] = line.split('=');
      if (key && value) {
        env[key] = value;
      }
    }
  });
  
  return env;
}

async function testFixedBase64() {
  console.log('🧪 修正されたBase64変換テスト\n');
  
  const env = loadEnvVars();

  // Test 1: 有効な小さい画像でテスト
  console.log('1️⃣ 有効な小さい画像でテスト');
  
  // 実際の小さなPNG画像（赤い1x1ピクセル）
  const validTinyPng = Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
    0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
    0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xDE, 0x00, 0x00, 0x00,
    0x0C, 0x49, 0x44, 0x41, 0x54, 0x08, 0xD7, 0x63, 0xF8, 0x0F, 0x00, 0x00,
    0x01, 0x00, 0x01, 0x5C, 0xC2, 0x8A, 0x8E, 0x00, 0x00, 0x00, 0x00, 0x49,
    0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
  ]);

  const base64Image = arrayBufferToBase64(validTinyPng.buffer);
  console.log(`Base64長: ${base64Image.length}`);
  console.log(`Base64開始: ${base64Image.substring(0, 50)}...`);

  const testRequest = {
    contents: [{
      parts: [
        {
          text: "この画像について説明してください。"
        },
        {
          inline_data: {
            mime_type: "image/png",
            data: base64Image
          }
        }
      ]
    }]
  };

  try {
    console.log(`リクエストサイズ: ${JSON.stringify(testRequest).length} 文字`);
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testRequest)
      }
    );

    console.log(`レスポンス: ${response.status}`);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ 修正版Base64テスト成功！');
      console.log(`応答: ${data.candidates?.[0]?.content?.parts?.[0]?.text || 'レスポンス取得失敗'}`);
    } else {
      const errorText = await response.text();
      console.log('❌ 修正版Base64テスト失敗');
      console.log(`エラー: ${errorText}`);
    }
  } catch (error) {
    console.log(`❌ 修正版Base64テストエラー: ${error.message}`);
  }

  console.log('\n📋 テスト完了');
}

testFixedBase64().catch(console.error);
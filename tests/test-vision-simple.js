import fs from 'fs';

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

async function testVisionAPI() {
  console.log('🧪 Gemini Vision API 段階テスト\n');
  
  const env = loadEnvVars();

  // Test 1: 小さなテスト画像を作成（1x1ピクセルのPNG）
  console.log('1️⃣ 最小画像でのテスト');
  
  // 1x1ピクセルの透明PNG（Base64）
  const tinyPngBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChAI9jU77yQAAAABJRU5ErkJggg==";
  
  const tinyImageRequest = {
    contents: [{
      parts: [
        {
          text: "この画像について説明してください。"
        },
        {
          inline_data: {
            mime_type: "image/png",
            data: tinyPngBase64
          }
        }
      ]
    }]
  };

  try {
    console.log(`リクエストサイズ: ${JSON.stringify(tinyImageRequest).length} 文字`);
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tinyImageRequest)
      }
    );

    console.log(`レスポンス: ${response.status}`);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ 最小画像テスト成功');
      console.log(`応答: ${data.candidates?.[0]?.content?.parts?.[0]?.text || 'レスポンス取得失敗'}`);
    } else {
      const errorText = await response.text();
      console.log('❌ 最小画像テスト失敗');
      console.log(`エラー: ${errorText}`);
    }
  } catch (error) {
    console.log(`❌ 最小画像テストエラー: ${error.message}`);
  }

  // Test 2: 異なるモデルでのテスト
  console.log('\n2️⃣ 異なるモデルでのVisionテスト');
  
  const modelsToTest = [
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-1.0-pro-vision-latest'
  ];

  for (const model of modelsToTest) {
    try {
      console.log(`\n🔍 ${model} でテスト中...`);
      
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(tinyImageRequest)
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ ${model}: 成功`);
        console.log(`応答: ${data.candidates?.[0]?.content?.parts?.[0]?.text?.substring(0, 100)}...`);
      } else {
        const errorText = await response.text();
        console.log(`❌ ${model}: 失敗 (${response.status})`);
        console.log(`エラー: ${errorText.substring(0, 200)}...`);
      }
    } catch (error) {
      console.log(`❌ ${model}: エラー - ${error.message}`);
    }
  }

  // Test 3: リクエスト形式の確認
  console.log('\n3️⃣ リクエスト形式の確認');
  
  // より簡潔なリクエスト
  const simpleRequest = {
    contents: [{
      parts: [
        { text: "Hello" },
        {
          inline_data: {
            mime_type: "image/png",
            data: tinyPngBase64
          }
        }
      ]
    }]
  };

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(simpleRequest)
      }
    );

    console.log(`簡潔リクエスト結果: ${response.status}`);
    
    if (response.ok) {
      console.log('✅ 簡潔リクエスト成功');
    } else {
      const errorText = await response.text();
      console.log('❌ 簡潔リクエスト失敗');
      console.log(`エラー: ${errorText.substring(0, 300)}`);
    }
  } catch (error) {
    console.log(`❌ 簡潔リクエストエラー: ${error.message}`);
  }

  console.log('\n📋 テスト完了');
}

testVisionAPI().catch(console.error);
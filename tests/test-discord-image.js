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

async function testWithPublicImage() {
  console.log('🧪 公開画像URLでのテスト\n');
  
  const env = loadEnvVars();

  // Test 1: 公開の小さな画像URLを使用
  console.log('1️⃣ 公開画像URLでテスト');
  
  // 小さな公開画像URL（例：GitHub上の画像など）
  const publicImageUrl = "https://via.placeholder.com/100x100.png";
  
  try {
    console.log(`画像URL: ${publicImageUrl}`);
    
    // 画像を取得
    const imageResponse = await fetch(publicImageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.status}`);
    }
    
    const imageBuffer = await imageResponse.arrayBuffer();
    console.log(`画像サイズ: ${imageBuffer.byteLength} bytes`);
    
    // Base64変換
    const base64Image = btoa(String.fromCharCode(...new Uint8Array(imageBuffer)));
    console.log(`Base64長: ${base64Image.length}`);
    
    const contentType = imageResponse.headers.get('content-type') || 'image/png';
    console.log(`Content-Type: ${contentType}`);

    const testRequest = {
      contents: [{
        parts: [
          {
            text: "この画像について説明してください。"
          },
          {
            inline_data: {
              mime_type: contentType,
              data: base64Image
            }
          }
        ]
      }]
    };

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
      console.log('✅ 公開画像テスト成功！');
      console.log(`応答: ${data.candidates?.[0]?.content?.parts?.[0]?.text || 'レスポンス取得失敗'}`);
    } else {
      const errorText = await response.text();
      console.log('❌ 公開画像テスト失敗');
      console.log(`エラー: ${errorText}`);
    }
  } catch (error) {
    console.log(`❌ 公開画像テストエラー: ${error.message}`);
  }

  // Test 2: 異なるBase64変換方法
  console.log('\n2️⃣ 異なるBase64変換方法でテスト');
  
  try {
    const imageResponse = await fetch(publicImageUrl);
    const imageBuffer = await imageResponse.arrayBuffer();
    
    // 方法1: 標準的な変換
    const method1 = btoa(String.fromCharCode(...new Uint8Array(imageBuffer)));
    
    // 方法2: チャンク変換
    const uint8Array = new Uint8Array(imageBuffer);
    let method2 = '';
    const chunkSize = 8192;
    
    for (let i = 0; i < uint8Array.length; i += chunkSize) {
      const chunk = uint8Array.slice(i, i + chunkSize);
      method2 += btoa(String.fromCharCode.apply(null, chunk));
    }
    
    console.log(`方法1長: ${method1.length}, 方法2長: ${method2.length}`);
    console.log(`同一結果: ${method1 === method2}`);
    
    if (method1 !== method2) {
      console.log('⚠️  Base64変換方法に違いがあります');
      console.log(`方法1開始: ${method1.substring(0, 50)}`);
      console.log(`方法2開始: ${method2.substring(0, 50)}`);
    }
    
  } catch (error) {
    console.log(`❌ Base64比較エラー: ${error.message}`);
  }

  console.log('\n📋 テスト完了');
}

testWithPublicImage().catch(console.error);
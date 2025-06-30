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

async function testGeminiAPI() {
  console.log('🧪 Gemini API テスト開始\n');
  
  const env = loadEnvVars();
  
  // Test 1: APIキーの基本確認
  console.log('1️⃣ APIキー基本確認');
  if (env.GEMINI_API_KEY) {
    console.log(`✅ APIキー形式: ${env.GEMINI_API_KEY.substring(0, 12)}...`);
  } else {
    console.log('❌ APIキーが設定されていません');
    return;
  }

  // Test 2: 利用可能なモデル一覧を取得
  console.log('\n2️⃣ 利用可能なモデル確認');
  try {
    const modelsResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${env.GEMINI_API_KEY}`,
      { method: 'GET' }
    );
    
    if (modelsResponse.ok) {
      const modelsData = await modelsResponse.json();
      console.log('✅ モデル一覧取得成功');
      
      if (modelsData.models) {
        console.log('📋 利用可能なモデル:');
        modelsData.models.forEach(model => {
          console.log(`   - ${model.name}`);
          if (model.supportedGenerationMethods) {
            console.log(`     サポート機能: ${model.supportedGenerationMethods.join(', ')}`);
          }
        });
        
        // Vision対応モデルを確認
        const visionModels = modelsData.models.filter(model => 
          model.name.includes('vision') || 
          model.name.includes('1.5') ||
          (model.supportedGenerationMethods && model.supportedGenerationMethods.includes('generateContent'))
        );
        
        console.log('\n🔍 Vision/マルチモーダル対応の可能性があるモデル:');
        visionModels.forEach(model => {
          console.log(`   - ${model.name}`);
        });
      }
    } else {
      console.log(`❌ モデル一覧取得失敗: ${modelsResponse.status}`);
      const errorText = await modelsResponse.text();
      console.log(`エラー詳細: ${errorText}`);
    }
  } catch (error) {
    console.log(`❌ モデル一覧取得エラー: ${error.message}`);
  }

  // Test 3: テキストのみでのAPI呼び出しテスト
  console.log('\n3️⃣ テキストのみAPI呼び出しテスト');
  try {
    const textOnlyRequest = {
      contents: [{
        parts: [{
          text: "こんにちは。簡単な挨拶を日本語で返してください。"
        }]
      }]
    };

    const textResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(textOnlyRequest)
      }
    );

    console.log(`テキストAPI レスポンス: ${textResponse.status}`);
    
    if (textResponse.ok) {
      const textData = await textResponse.json();
      console.log('✅ テキストAPI成功');
      console.log(`応答: ${textData.candidates?.[0]?.content?.parts?.[0]?.text || 'レスポンス取得失敗'}`);
    } else {
      const errorText = await textResponse.text();
      console.log('❌ テキストAPI失敗');
      console.log(`エラー詳細: ${errorText}`);
    }
  } catch (error) {
    console.log(`❌ テキストAPIエラー: ${error.message}`);
  }

  // Test 4: 異なるモデルでのテスト
  console.log('\n4️⃣ 異なるモデルでのテスト');
  const modelsToTest = [
    'gemini-1.5-flash',
    'gemini-1.5-pro', 
    'gemini-pro-vision',
    'gemini-pro'
  ];

  for (const modelName of modelsToTest) {
    try {
      console.log(`\n🔍 ${modelName} をテスト中...`);
      
      const testRequest = {
        contents: [{
          parts: [{
            text: "テスト"
          }]
        }]
      };

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${env.GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(testRequest)
        }
      );

      if (response.ok) {
        console.log(`✅ ${modelName}: 利用可能`);
      } else {
        console.log(`❌ ${modelName}: 利用不可 (${response.status})`);
      }
    } catch (error) {
      console.log(`❌ ${modelName}: エラー`);
    }
  }

  console.log('\n📋 テスト完了');
  console.log('\n💡 推奨事項:');
  console.log('- テキストAPIが成功する場合: モデル指定またはリクエスト形式の問題');
  console.log('- テキストAPIも失敗する場合: APIキーまたは権限の問題');
  console.log('- 特定のモデルのみ成功する場合: そのモデルを使用');
}

testGeminiAPI().catch(console.error);
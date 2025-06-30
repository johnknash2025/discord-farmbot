// エンドポイントテスト用スクリプト

async function testEndpoints(baseUrl) {
  console.log(`🧪 エンドポイントテスト開始: ${baseUrl}\n`);

  // 1. ヘルスチェックテスト
  console.log('1️⃣ ヘルスチェックエンドポイント (/health)');
  try {
    const response = await fetch(`${baseUrl}/health`);
    if (response.ok) {
      const data = await response.json();
      console.log('✅ ヘルスチェック成功');
      console.log(`   ステータス: ${data.status}`);
      console.log(`   タイムスタンプ: ${data.timestamp}`);
    } else {
      console.log(`❌ ヘルスチェック失敗: ${response.status}`);
    }
  } catch (error) {
    console.log(`❌ ヘルスチェックエラー: ${error.message}`);
  }

  // 2. ルートエンドポイントテスト (GET)
  console.log('\n2️⃣ ルートエンドポイント (/) - GET');
  try {
    const response = await fetch(baseUrl);
    if (response.ok) {
      const data = await response.json();
      console.log('✅ ルートエンドポイント成功');
      console.log(`   ステータス: ${data.status}`);
      console.log(`   エンドポイント情報: ${JSON.stringify(data.endpoints)}`);
    } else {
      console.log(`❌ ルートエンドポイント失敗: ${response.status}`);
    }
  } catch (error) {
    console.log(`❌ ルートエンドポイントエラー: ${error.message}`);
  }

  // 3. Discord署名なしPOSTテスト
  console.log('\n3️⃣ Discord署名なしPOSTテスト');
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ test: 'data' })
    });
    
    if (response.status === 400) {
      console.log('✅ 署名なしPOST: 正しく拒否されました (400)');
    } else {
      console.log(`⚠️  署名なしPOST: 予期しないレスポンス (${response.status})`);
    }
  } catch (error) {
    console.log(`❌ 署名なしPOSTエラー: ${error.message}`);
  }

  console.log('\n📋 テスト完了');
  console.log('\n次のステップ:');
  console.log('1. ngrok でHTTPS URLを取得');
  console.log('2. Discord Developer Portal でエンドポイント設定');
  console.log('3. Discord でSlash Commandテスト');
}

// コマンドライン引数からURLを取得、デフォルトはlocalhost
const baseUrl = process.argv[2] || 'http://localhost:8787';
testEndpoints(baseUrl).catch(console.error);

console.log('使用方法:');
console.log('ローカル: node test-endpoints.js');
console.log('ngrok: node test-endpoints.js https://your-ngrok-url.ngrok.io');
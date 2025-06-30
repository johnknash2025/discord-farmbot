import fs from 'fs';

// .dev.vars ファイルを読み込んで環境変数をテスト
function loadEnvVars() {
  try {
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
  } catch (error) {
    console.error('❌ .dev.vars ファイルが見つかりません');
    return null;
  }
}

async function testEnvironmentVariables() {
  console.log('🔧 環境変数テスト開始\n');
  
  const env = loadEnvVars();
  if (!env) return;

  // 1. Discord Public Key テスト
  console.log('1️⃣ Discord Public Key テスト');
  if (env.DISCORD_PUBLIC_KEY) {
    if (env.DISCORD_PUBLIC_KEY.length === 64 && /^[a-f0-9]+$/i.test(env.DISCORD_PUBLIC_KEY)) {
      console.log('✅ 形式: 正しい (64文字の16進数)');
    } else {
      console.log('❌ 形式: 不正 (64文字の16進数である必要があります)');
    }
    console.log(`   値: ${env.DISCORD_PUBLIC_KEY.substring(0, 8)}...${env.DISCORD_PUBLIC_KEY.substring(-8)}`);
  } else {
    console.log('❌ 未設定');
  }

  // 2. Discord Bot Token テスト
  console.log('\n2️⃣ Discord Bot Token テスト');
  if (env.DISCORD_BOT_TOKEN) {
    if (env.DISCORD_BOT_TOKEN.includes('.') && env.DISCORD_BOT_TOKEN.length > 50) {
      console.log('✅ 形式: 正しい (Discord Bot Token形式)');
    } else {
      console.log('❌ 形式: 不正 (Discord Bot Token形式ではありません)');
    }
    const parts = env.DISCORD_BOT_TOKEN.split('.');
    console.log(`   値: ${parts[0]}.*****.${parts[2] ? parts[2].substring(0, 4) + '...' : '***'}`);
  } else {
    console.log('❌ 未設定');
  }

  // 3. Gemini API Key テスト
  console.log('\n3️⃣ Gemini API Key テスト');
  if (env.GEMINI_API_KEY) {
    if (env.GEMINI_API_KEY.startsWith('AIzaSy') && env.GEMINI_API_KEY.length === 39) {
      console.log('✅ 形式: 正しい (Google API Key形式)');
      
      // 実際にAPIテストを実行
      console.log('   API接続テスト中...');
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models?key=${env.GEMINI_API_KEY}`,
          { method: 'GET' }
        );
        
        if (response.ok) {
          console.log('✅ API接続: 成功');
        } else if (response.status === 403) {
          console.log('❌ API接続: 認証エラー (APIキーが無効)');
        } else {
          console.log(`⚠️  API接続: エラー (${response.status})`);
        }
      } catch (error) {
        console.log('❌ API接続: ネットワークエラー');
      }
    } else {
      console.log('❌ 形式: 不正 (Google API Key形式ではありません)');
    }
    console.log(`   値: ${env.GEMINI_API_KEY.substring(0, 12)}...${env.GEMINI_API_KEY.substring(-4)}`);
  } else {
    console.log('❌ 未設定');
  }

  // 4. セキュリティチェック
  console.log('\n4️⃣ セキュリティチェック');
  const gitignoreContent = fs.readFileSync('.gitignore', 'utf8');
  if (gitignoreContent.includes('.dev.vars')) {
    console.log('✅ .dev.vars は .gitignore に含まれています');
  } else {
    console.log('⚠️  .dev.vars が .gitignore に含まれていません');
  }

  console.log('\n📋 テスト完了');
  console.log('\n次のステップ:');
  console.log('- 全て✅の場合: Discord Developer Portal での設定に進む');
  console.log('- ❌がある場合: 該当するAPIキーを再取得して設定');
}

testEnvironmentVariables().catch(console.error);
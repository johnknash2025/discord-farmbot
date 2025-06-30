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

async function registerSlashCommands() {
  console.log('🔧 Discord Slash Command 登録開始\n');
  
  const env = loadEnvVars();
  
  // Bot TokenからApplication IDを抽出
  const applicationId = Buffer.from(env.DISCORD_BOT_TOKEN.split('.')[0], 'base64').toString();
  console.log(`Application ID: ${applicationId}`);
  
  // 登録するコマンドの定義
  const commands = [
    {
      name: 'analyze',
      description: '農作物画像を解析してスレッドに結果を投稿します',
      options: [
        {
          name: 'image',
          description: '解析したい農作物の画像',
          type: 11, // ATTACHMENT type
          required: true
        }
      ]
    }
  ];

  try {
    console.log('📤 コマンドを登録中...');
    
    // グローバルコマンドとして登録
    const response = await fetch(
      `https://discord.com/api/v10/applications/${applicationId}/commands`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bot ${env.DISCORD_BOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commands)
      }
    );

    if (response.ok) {
      const registeredCommands = await response.json();
      console.log('✅ コマンド登録成功！');
      console.log(`   登録されたコマンド数: ${registeredCommands.length}`);
      
      registeredCommands.forEach(cmd => {
        console.log(`   - /${cmd.name}: ${cmd.description}`);
      });
      
      console.log('\n⏰ グローバルコマンドは反映まで最大1時間かかる場合があります');
      console.log('💡 すぐにテストしたい場合は、ギルド(サーバー)コマンドとして登録してください');
      
    } else {
      const error = await response.text();
      console.log('❌ コマンド登録失敗');
      console.log(`   ステータス: ${response.status}`);
      console.log(`   エラー: ${error}`);
    }
    
  } catch (error) {
    console.log('❌ 登録中にエラーが発生しました:', error.message);
  }
}

async function registerGuildCommands(guildId) {
  console.log(`🏠 ギルド(${guildId})コマンド登録開始\n`);
  
  const env = loadEnvVars();
  const applicationId = Buffer.from(env.DISCORD_BOT_TOKEN.split('.')[0], 'base64').toString();
  
  const commands = [
    {
      name: 'analyze',
      description: '農作物画像を解析してスレッドに結果を投稿します',
      options: [
        {
          name: 'image',
          description: '解析したい農作物の画像',
          type: 11, // ATTACHMENT type
          required: true
        }
      ]
    }
  ];

  try {
    const response = await fetch(
      `https://discord.com/api/v10/applications/${applicationId}/guilds/${guildId}/commands`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bot ${env.DISCORD_BOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commands)
      }
    );

    if (response.ok) {
      const registeredCommands = await response.json();
      console.log('✅ ギルドコマンド登録成功！');
      console.log(`   登録されたコマンド数: ${registeredCommands.length}`);
      console.log('⚡ ギルドコマンドは即座に利用可能です');
    } else {
      const error = await response.text();
      console.log('❌ ギルドコマンド登録失敗');
      console.log(`   ステータス: ${response.status}`);
      console.log(`   エラー: ${error}`);
    }
    
  } catch (error) {
    console.log('❌ 登録中にエラーが発生しました:', error.message);
  }
}

// コマンドライン引数をチェック
const args = process.argv.slice(2);
if (args.length > 0 && args[0] === 'guild') {
  if (args[1]) {
    registerGuildCommands(args[1]);
  } else {
    console.log('❌ ギルドIDを指定してください');
    console.log('使用方法: node register-commands.js guild YOUR_GUILD_ID');
  }
} else {
  registerSlashCommands();
}

console.log('\n📋 使用方法:');
console.log('グローバル登録: node register-commands.js');
console.log('ギルド登録: node register-commands.js guild YOUR_GUILD_ID');
console.log('\nギルドIDの取得方法:');
console.log('1. Discordで開発者モードを有効化');
console.log('2. サーバー名を右クリック > "IDをコピー"');
# API Dev Sample (TypeScript + Express)

簡単な TypeScript + Express のサンプル API です。

セットアップ:

```bash
cd /home/ryuta/repos/api-dev
npm install
npm run dev
```

エンドポイント:
- `GET /` - ヘルスチェック
- `GET /items` - アイテム一覧
- `POST /items` - アイテム作成（JSON body: `{ "name": string }`）

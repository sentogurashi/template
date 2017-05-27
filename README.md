# template
銭湯ぐらしテンプレート

# How To USE
gulpを使用しています
## clone
```
$ git clone git@github.com:sentogurashi/template.git
$ cd template
```
## install
```
$ npm install
```

## watch & browsersync
```
$ npm run watch
```

# gulpコマンド
## 個別

- `[default](gulp)` clean, template/style/scriptの初期生成、watch
- `font` .ttfを [.ttf/.eot/.woff]にbuild出力
- `sketch` sketchファイルからslice出力（+image 実行）
- `image` standalone/に置いた通常画像（スプライトやエンコードなし）の圧縮&build出力
- `sprite` スプライト画像生成
- `deploy` アップロード用（rsync）TODO

## gulp (default)に通常含まれるもの

- `watch` ファイル監視（template, style, script）& browsersync起動
- `template` HTML変換
- `style` CSS変換
- `script` JS変換
- `bs` browsersync
- `clean` buildディレクトリの掃除（template, style, scriptのみ）

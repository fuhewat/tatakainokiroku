# README

## ▪️アプリケーション名　  BATTLE HISTORY  
  

### ▪️アプリケーション概要
主に対戦ゲームで使います。
対戦相手の名前を入力し、
勝敗の結果を入力することで勝率が自動で計算され、保存ができます。


### ▪️デプロイ中のURL
https://tatakainokiroku-39379.onrender.com  
  
<テスト用ログインアカウント>  
ID : wataru  
pass : 1010

### ▪️利用方法
新規登録からアカウントを作りログイン,その後「たたかい始める」をクリックすると、投稿画面へ遷移します。  
勝ち負けをクリックし、勝率を求められます。現在保存方法の部分を実装中です。

### ▪️アプリケーションを作成した背景
対戦ゲームが好きで友人と楽しむ時にどれくらいの確率で勝てるのだろうとデータで保存したかったためです。
こちらを作ることで友人との勝率がわかり、勝率が上がっていくのであれば上達していることが実感できると思いました。
データで保存していくことで、勝率が上がっているのか下がっているのかが把握しやすいと思います。
最近はeスポーツの大会などもあるので、需要は少ないかもしれませんが、必要な人もいると思い作っています。

### ▪️要件定義URL
https://docs.google.com/spreadsheets/d/1bD1QnSqxH_t_Vsf889MIGPXgVRsASjKDrWVpEaHBIDA/edit?usp=sharing

### ▪️実装予定機能
・フレンド機能  
・コメント機能  
・対戦申し込み機能  
・勝率上位3位のトップページ表示  
・ゲームタイトル別詳細画面  
・ユーザー詳細画面

### ▪️現在取り組んでいること
勝敗の記録を入力することができますが、
javascriptにより出力された数字（勝ちの回数、負けの回数）
をデータベースに保存することができないため
保存できるように取り組んでいます。

### ▪️今後取り組んでいくこと
レスポンシブ化 : サイズを変えると見た目が崩れてしまうので調整  
ユーザーの詳細画面の作成 : 入力してきた勝敗結果を反映させ、一覧で見れるようにしていきます




[![Image from Gyazo](https://i.gyazo.com/941a81cfef5b11c536e6bb6d47893fbc.png)](https://gyazo.com/941a81cfef5b11c536e6bb6d47893fbc)

[![Image from Gyazo](https://i.gyazo.com/955800cda35509fb041a1e258a1468be.png)](https://gyazo.com/955800cda35509fb041a1e258a1468be)

## users
|Column              |Type    |Options                   |
|--------------------|--------|--------------------------|
|nickname            |string  |null: false               |
|email               |string  |null: false, unique: true |
|encrypted_password  |string  |null: false               |
|first_name          |string  |null: false               |
|last_name           |string  |null: false               |
|kana_first_name     |string  |null: false               |
|kana_last_name      |string  |null: false               |
|profile             |string  |null: false               |

### Association
has_many :battles



## battles
|Column             |Type       |Options                        |
|-------------------|-----------|-------------------------------|
|title              |string     |null: false                    |
|my_character       |string     |                               |
|rival_character    |string     |                               |
|win                |integer    |null: false                    |
|lose               |integer    |null: false                    |
|memo               |text       |                               |
|battle_player      |integer    |null: false                    |

### Association
belongs_to :user




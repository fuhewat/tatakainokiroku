# README

# README

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
|game_title              |string     |null: false                    |
|description        |text       |null: false                    |
|price              |integer    |null: false                    |
|category_id        |integer    |null: false                    |
|condition_id       |integer    |null: false                    |
|delivery_charge_id |integer    |null: false                    |
|send_area_id       |integer    |null: false                    |
|sender_day_id      |integer    |null: false                    |
|user               |references |null: false, foreign_key: true |

### Association
belongs_to :user




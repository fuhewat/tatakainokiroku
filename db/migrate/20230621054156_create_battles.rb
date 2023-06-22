class CreateBattles < ActiveRecord::Migration[6.0]
  def change
    create_table :battles do |t|
      t.string  :title,          null: false, default: ""
      t.string  :my_character
      t.string  :rival_character
      t.integer :win,            null: false, default: 0
      t.integer :lose,           null: false, default: 0
      t.text    :memo
      t.string  :battle_player,  null: false, default: ""
      t.timestamps
    end
  end
end

class BattlesController < ApplicationController
  def index
  end

  def new
    @battle = Battle.new
  end

  def create
    @battle = Battle.new(battle_params)
    if @battle.save
      redirect_to root_path
    else
      flash.now[:error] = @battle.errors.full_messages
      render :new
    end
  end

  def update
      @battle = Battle.find(params[:id])
      @battle.update(win: params[:battle][:win], lose: params[:battle][:lose])
  end

  private

  def battle_params
    params.require(:battle).permit(:title, :my_character, :rival_character, :win, :lose, :memo, :battle_player).merge(user_id: current_user.id)
  end
end

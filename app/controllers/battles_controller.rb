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
      render :new
    end
  end

  def update
    @battle = Battle.find(params[:id])
    if @battle.update(battle_params)
      render json: { status: 'success' }
    else
      render json: { status: 'error' }, status: :unprocessable_entity
    end
  end

  private

  def battle_params
    params.require(:battle).permit(:title, :my_character, :rival_character, :win, :lose, :memo, :battle_player)
  end
end

class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @battles = @user.battles.order(updated_at: :desc).limit(5)
  end
end

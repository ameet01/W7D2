class Api::TodosController < ApplicationController
  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def create
    @todo = Todo.new(todo_params)
    if(@todo.save)
      render json: @todo
    else
      render @todo.errors.full_messages, status: 422
    end
  end

  def update

  end

  def destroy

  end

  def todo_params
    params.permit
  end
end

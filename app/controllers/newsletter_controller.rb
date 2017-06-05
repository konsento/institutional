class NewsletterController < ApplicationController
  protect_from_forgery

  def add
    if Newsletter.where(email: params[:email]).exists?
      ret = 2
    elsif Newsletter.new(email: params[:email]).save
      ret = 1
    else
      ret = 0
    end
    render json: ret
  end
end

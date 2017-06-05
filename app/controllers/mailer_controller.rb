class MailerController < ApplicationController
  def faq
    KonsentoMailer.faq_email(params[:faq_email], params[:faq_question]).deliver_now
    # render :nothing => true, :status => 200, :content_type => 'text/html'
    flash[:notice] = "Pergunta enviada com sucesso!"
    redirect_to root_path
  end
end
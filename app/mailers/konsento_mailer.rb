class KonsentoMailer < ActionMailer::Base
  default from: "mailer.konsento@bol.com.br"

  def faq_email(email, question)
    @email = email
    @question = question
    mail(to: 'fabio@apeiara.com.br', subject: 'Konsento - Nova pergunta')
  end
end

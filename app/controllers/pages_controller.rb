class PagesController < ApplicationController
  def index
    locale = :en
    if session[:locale].present?
      locale = session[:locale]
    else
      browser_locale = get_browser_lang.to_s
      if I18n.available_locales.map(&:to_s).include? browser_locale
        locale = session[:locale] = browser_locale
      end
    end

    @curlang = I18n.locale = locale.to_s
  end

  def change_locale
    session[:locale] = params[:lang]
    redirect_to root_path
  end

  private
    def get_browser_lang
      if request.env['HTTP_ACCEPT_LANGUAGE'].to_s.length > 0
        request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
      else
        'en'
      end
    end
end

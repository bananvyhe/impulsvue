class IndexpageController < ApplicationController
	before_action :set_contact 
	private
	def set_contact
    @contacts = Contact.all
  end

end

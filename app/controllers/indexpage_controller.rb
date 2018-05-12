class IndexpageController < ApplicationController
	before_action :set_contact 
	def index
 
	end
	private
	def set_contact
    @contacts = Contact.all
  end

end

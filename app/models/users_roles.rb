# == Schema Information
# Schema version: 20110614113903
#
# Table name: users_roles
#
#  id         :integer         not null, primary key
#  user_id    :integer
#  role_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class UsersRoles < ActiveRecord::Base
end

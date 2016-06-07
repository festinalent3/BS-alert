require 'spec_helper'
require_relative '../api_constraints.rb'

describe ApiConstraints do
  let(:api_v1) { ApiConstraints.new(version: 1) }
  let(:api_v2) { ApiConstraints.new(version: 2, default: true) }

  describe "Version matching" do

    it "Return true when Accept Header matches the version" do
      request = double(host: 'localhost:3000/api',
                       headers: { "Accept" => "application/localhost:3000.v1"})
      expect(api_v1.matches?(request)).to be true
    end

    it "Return the default version when 'default' option is specified" do
      request = double(host: 'localhost:3000/api')
      expect(api_v2.matches?(request)).to be true
    end
  end
end
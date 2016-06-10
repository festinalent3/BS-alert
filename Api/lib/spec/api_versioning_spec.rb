describe ApiVersioning do
  let(:api_v1) { ApiVersioning.new(version: 1) }
  let(:api_v2) { ApiVersioning.new(version: 2, default: true) }

  describe "#matches?" do

    it "True when version in Accept header matches" do
      request = double(host: 'localhost:3000',
                       headers: {'Accept' => "application/localhost:3000.v1"})
      expect(api_v1.matches?(request)).to be true
    end

    it 'True when default options is specified' do
      request = double(host: 'bsalert.com')
      expect(api_v2.matches?(request)).to be true 
    end
  end
end
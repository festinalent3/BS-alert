# BS-button back-end API v1

Minimal documentation on the approach at designing the API which should:

- [ ] Have a user (Chrome Extension) whom can submit a BS alert for a specific URL.
- [ ] User ID === UserKey is generated on the first initialization of the chrome extension and is passed as parameter on alert submission to prevent duplication of alerts
- [ ] Visualization of the API is done via Postman REST Client (Chrome App)
- [ ] Handle requests and responses as JSON:API spec

RESTful API
---
Guidlines

* URI standard
* Data representation via JSON
* Standard HTTP methods used only GET, POST, PUT, DELETE
* Use standard api `namespace` [app/controllers/api]

###API Scoping

The api was build with the idea to confrom to industry best practice, therefore allowing it to scale and permit long-term support.

Current API version 1 URL: `http://localhost/api/urls/1`

####API Versioning

Is handler via request headers

Testing Suite
----
```group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rspec-rails'
  gem 'capybara'
  gem 'factory-girl-rails'
  gem 'ffaker'
end
```




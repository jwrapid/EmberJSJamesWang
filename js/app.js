App = Ember.Application.create();

var projects = [{
	id: '1',
	title: "Simulation Development at CEM",
	url: "files/CEMPresentation.pdf",
	about: "See My Presentation on My Work on Distributed Simulations At CEM",
	excerpt: "My 16-month internship was at Construction Engineering Management (CEM) located at the University of Alberta. There are two main branches of CEM, one working on project management products for construction companies, the other is developing construction simulation tools for both research and industry. During my internship I worked on the company’s two major simulation software Simphony.NET and Cosye.NET. Both products developed in C# and using Microsoft’s .NET Framework.",
	body: "Project was developed with C# and .NET Framework"
},{
	id: '2',
	title: "Biomembrane Project",
	url: "files/icsusermanual.pdf",
	about: "Find out about Image Correlation Spectroscopy (ICS) Here",
	excerpt: "Image Correlation Spectroscopy (ICS) is an application for performing analysis on images of bio-membranes taken from microscopes. It is capable of completing correlations between different image channels, which are then used to output graphs and values. The application consists of two parts: a standalone executable for Windows and Linux, and a web interface which can be set up on a web server and accessed remotely.  Developed for Dr. Nils Petersen at the University of Alberta as a project for CMPUT 401 in Winter 2013.",
	body: "Coded in Python and with The Django framework"
},{

	id: '3',
	title: "E-Store",
	url: "http://jwrapidestore.herokuapp.com/",
	about: "View the Estore in Action on Heroku",
	excerpt: "A web project for CMPUT 410 Web Information Systems to create a mock Electronic ecommerce webstore.",
	body: "Coded in Ruby 3 with Rails 2"
},{


	id: '4',
	title: "My Musings",
	url: "https://github.com/jwrapid/MyMusings",
	about: "View my Random code snipplets On GitHub",
	excerpt: "Misc Programs I wrote to test things, and for general interest",
	body: "Coded in various programming langauges"
}];


App.Router.map(function() {
  this.resource('projects', function() {
  	  this.resource('project', { path: '/:project_id'});
  });
});

App.ProjectsRoute = Ember.Route.extend({
  model: function() {
    return projects;
  }
});

App.ProjectRoute = Ember.Route.extend({
    model: function(params) {
        return projects.findBy('id', params.project_id);
    }
});
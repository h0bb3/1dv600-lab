package lnu;

import io.dropwizard.Application;
import io.dropwizard.setup.Environment;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.Configuration;
import io.dropwizard.assets.AssetsBundle;

// Import all resources
import lnu.resources.*;

public class Main extends Application<Configuration> {
	public static void main(String[] args) throws Exception {
		new Main().run(new String[]{"server", "config.yml"});
	}

	@Override
	public void initialize(Bootstrap<Configuration> bootstrap) {
  		bootstrap.addBundle(new AssetsBundle("/client/", "/", "index.html", "static"));
	}


	@Override
	public void run(Configuration configuration, Environment environment) throws Exception {
		// Add resources here, just copy the line and replace the class name.
		environment.jersey().register(new PingResource());
		environment.jersey().register(new GetBooksResource());
		environment.jersey().register(new GetBookResource());
		environment.jersey().register(new AddBookResource());
		environment.jersey().register(new EditBookResource());
		environment.jersey().register(new RemoveBookResource());

	}
}

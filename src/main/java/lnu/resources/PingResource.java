package lnu.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import java.io.IOException;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;


@Path("/ping")
@Produces(MediaType.APPLICATION_JSON)
public class PingResource {

	@GET
	public String pong() {

		// Read this to find out how to use JSON in java.
		// http://www.mkyong.com/java/how-to-convert-java-object-to-from-json-jackson/
		ObjectMapper objectMapper = new ObjectMapper();


		// Read this to learn how to convert xml to java objects.


		// This is how you return to the client... Simple, right?
		return "{\"answer\": \"pong\"}";
	}
}

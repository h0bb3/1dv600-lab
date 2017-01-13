import lnu.resources.*;
import io.dropwizard.testing.junit.ResourceTestRule;
import org.junit.ClassRule;
import org.junit.Test;

import static org.fest.assertions.Assertions.assertThat;

// Look at this to find out how to create an api test.
// Info on how to test with dropwizard: http://www.dropwizard.io/0.8.0/docs/manual/testing.html
public class PingResourceTest {

	@ClassRule
	public static final ResourceTestRule resources = ResourceTestRule.builder()
			.addResource(new PingResource())
			.build();

	@Test
	public void testGetPing() {
		assertThat(resources.client().target("/ping").request().get(String.class))
				.isEqualTo("{\"answer\": \"pong\"}");
	}
}

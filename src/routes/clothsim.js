import React from "react";
import styled from "styled-components";
import Latex from "react-latex";
import { Grid, Container, Header, Image, List } from "semantic-ui-react";

const Wrapper = styled.div`
  margin-top: 5%;
  margin-bottom: 7%;
`;

const Picture = styled(Image)`
  margin-bottom: 2%;
`;

const Math = styled.div`
  text-align: center;
  margin-bottom: 2%;
`;

export const ClothSim = () => {
  const hooke = "$F_s = k_s \\times (||p_a - p_b|| - l)$";
  const verlet = "$x_{t + dt} = x_t + v_t \\times dt + a_t \\times dt^2$";
  const updated_verlet =
    "$x_{t + dt} = x_t + (1 - d) \\times (x_t - x_{t - dt}) + a_t \\times dt^2$";
  const blinn_phong =
    "$L = k_a I_a + k_d(I/r^2) \\times max(0, n \\dot l) + k_s(I/r^2) \\times max(0, n \\dot h)^p$";
  const grids = [
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/ks50.png"
            size="medium"
          />
          <figcaption align="middle">ks = 50</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/ks1000.png"
            size="medium"
          />
          <figcaption align="middle">ks = 1000</figcaption>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/ks2500.png"
            size="medium"
          />
          <figcaption align="middle">ks = 2500</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/ks20k.png"
            size="medium"
          />
          <figcaption align="middle">ks = 20000</figcaption>
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/density2.png"
            size="medium"
          />
          <figcaption align="middle">density = 2</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/density50.png"
            size="medium"
          />
          <figcaption align="middle">density = 50</figcaption>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/density200.png"
            size="medium"
          />
          <figcaption align="middle">density = 200</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/density1500.png"
            size="medium"
          />
          <figcaption align="middle">density = 1500</figcaption>
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable>
      <Grid.Row>
        <video
          controls="controls"
          width="800"
          height="600"
          name="damping = 0"
          src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/damping0.mov"
        ></video>
      </Grid.Row>
      <Grid.Row>
        <video
          controls="controls"
          width="800"
          height="600"
          name="damping = 20"
          src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/damping20.mov"
        ></video>
      </Grid.Row>
      <Grid.Row>
        <video
          controls="controls"
          width="800"
          height="600"
          name="damping = 40"
          src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/damping40.mov"
        ></video>
      </Grid.Row>
      <Grid.Row>
        <video
          controls="controls"
          width="800"
          height="600"
          name="damping = 100"
          src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/damping100.mov"
        ></video>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/birds.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/default-view.png"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part3/ks50.png"
            size="medium"
          />
          <figcaption align="middle">ks = 50</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part3/default.png"
            size="medium"
          />
          <figcaption align="middle">ks = 5000</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part3/ks50000.png"
            size="medium"
          />
          <figcaption align="middle">ks = 50000</figcaption>
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/self1.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/self2.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/self3.png"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/density2-1.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/density2-2.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/density2-3.png"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/density200-1.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/density200-2.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/density200-3.png"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/ks50-1.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/ks50-2.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/ks50-3.png"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/ks1000-1.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/ks1000-2.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/ks1000-3.png"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/ks20000-1.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/ks20000-2.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part4/ks20000-3.png"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={4}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part5/ambient.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part5/diffuse.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part5/phong.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part5/final.png"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part5/bump.png"
            size="medium"
          />
          <figcaption align="middle">Bump Mapping</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part5/displacement.png"
            size="medium"
          />
          <figcaption align="middle">Displacement Mapping</figcaption>
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part5/bump-16.png"
            size="medium"
          />
          <figcaption align="middle">
            bump, <kbd>-o 16 -a 16</kbd>
          </figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part5/displacement-16.png"
            size="medium"
          />
          <figcaption align="middle">
            displacement, <kbd>-o 16 -a 16</kbd>
          </figcaption>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part5/bump-128.png"
            size="medium"
          />
          <figcaption align="middle">
            bump, <kbd>-o 128 -a 128</kbd>
          </figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://cloth-sim.s3-us-west-1.amazonaws.com/part5/displacement-128.png"
            size="medium"
          />
          <figcaption align="middle">
            displacement, <kbd>-o 128 -a 128</kbd>
          </figcaption>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ];
  return (
    <Wrapper>
      <Container text>
        <Header as="h1">Cloth Simulation</Header>
        <Header as="h2">Overview</Header>
        <p>
          This project is a real-time implementation of cloth using a mass and
          spring-based system. Ultimately, the cloth representation and
          collision rules are both built with an entire data structure. The
          real-time itself is done through Verlet integration of cloths.
        </p>
        <p>
          <b>
            <u>Disclaimer:</u>
          </b>{" "}
          Images might need to be zoomed in for results and differences to be
          clearly shown. This is also best viewed on non-mobile devices.
        </p>

        <Header as="h2">Masses and Springs</Header>
        <p>
          The cloth representation comprises of an evenly-spaced grid,
          constructed by masses and springs.
        </p>

        <Header as="h3">Mass Implementation</Header>
        <p>
          To build a grid of masses, we iterate through every width and height
          point and adjust the position based on scaled factors scale_x and
          scale_y, which are respectively <kbd>width / num_width_points</kbd>,
          and <kbd>height / num_height_points</kbd>. Thus, if our orientation is{" "}
          <kbd>HORIZONTAL</kbd>, our position is{" "}
          <kbd>(scale_x * x, 1, scale_y * y)</kbd>. Otherwise, it is{" "}
          <kbd>(scale_x * x, scale_y * y, rand)</kbd> for <kbd>rand</kbd> is a
          random number from -1/1000 to 1/1000. Next, we check if this current
          coordinate <kbd>(x, y)</kbd> is <kbd>PINNED</kbd>. We use this
          information to create a point mass with the scaled position and a
          boolean value marking it as pinned or not pinned. Lastly, we add this
          mass to our vector of point masses.
        </p>

        <Header as="h3">Spring Implementation</Header>
        <p>
          We do another iteration over every possible <kbd>(x, y)</kbd> pair
          according to <kbd>num_width_points</kbd> and{" "}
          <kbd>num_height_points</kbd>. We ultimately want to create springs
          that apply the structural, shear, and bending constraints on every
          mass based on a comparison between point masses. For instance,
          structural constraints are applied between point masses and other
          point masses left/top of it by 1 unit. Shearing constraints are
          applied between a point mass and its diagonal upper left and right
          masses. Bending constraints are similar to structural, except 2 units.
          When implemented correctly, we get the following evenly-spaced grid
          after rendering <kbd>pinned2</kbd>.
        </p>
        <Picture src="https://cloth-sim.s3-us-west-1.amazonaws.com/part1/view.png" />
        <p>
          After having an evenly-spaced grid of masses and springs, we can start
          to manipulate this grid by applying specific constraints. The grid
          above by default has no constraints turned on, but when the constraint
          is applied, we get a grid with no diagonals, as seen below.
        </p>
        <Picture src="https://cloth-sim.s3-us-west-1.amazonaws.com/part1/s2.png" />
        <p>When all constraints are applied, the entire grid disappears.</p>
        <Picture src="https://cloth-sim.s3-us-west-1.amazonaws.com/part1/s3.png" />

        <Header as="h2">Simulation</Header>
        <p>
          In this section, we implement the pure core of the cloth simulation
          structure; that is, Verlet integration is implemented in order to
          implement real-time rendering.
        </p>
        <p>
          The first step of this implementation requires that we compute the
          total force acting on each point mass (recall that <kbd>F = ma</kbd>).
          Next, we apply spring correction forces through Hooke's Law. Note that
          for bending constraints, <kbd>ks</kbd> is multiplied by another
          constant <kbd>0.2</kbd>. This is illustrated by the following
          equation:
        </p>
        <p>
          Next, we multiply this result <kbd>Fs</kbd> with the unit vector
          comprising of the scalar distance between point mass <kbd>A</kbd> and{" "}
          <kbd>B</kbd>. As a result, we subtract this product from <kbd>A</kbd>
          's forces and add the product to <kbd>B</kbd>'s forces.{" "}
        </p>
        <Math>
          <Latex>{hooke}</Latex>
        </Math>

        <Header as="h2">Verlet Integration</Header>
        <p>
          Next, we perform numerical integration in order to compute each point
          mass's change in position. For simplicity reasons, we implement
          Verlet's Integration, as shown below:
        </p>
        <Math>
          <Latex>{verlet}</Latex>
        </Math>
        <p>
          For this project, we approximate <kbd>velocity * dt</kbd> by
          subtracting the point mass's last known position from the current
          position. We also add damping to simulate loss of energy by scaling
          down the velocity with <kbd>1 - friction</kbd>. Thus, our new position
          should look like this:
        </p>
        <Math>
          <Latex>{updated_verlet}</Latex>
        </Math>

        <Header as="h2">Position Constraints</Header>
        <p>
          Now, we can simulate a real-time rendering of a cloth moving towards
          its resting position. However, we want to implement a constraint on
          springs (based on the{" "}
          <a href="https://www.cs.rpi.edu/~cutler/classes/advancedgraphics/S14/papers/provot_cloth_simulation_96.pdf">
            1995 Provot paper
          </a>
          ) to keep them from deforming during each time step.
        </p>
        <p>
          How we first implement this constraint is by setting <kbd>L_max</kbd>{" "}
          to the spring's rest length multiplied by 1.1 (since the length can
          only be at most 10% greater than the rest length). Next, we compute
          the magnitude by subtracting <kbd>L_max</kbd> from{" "}
          <kbd>scalar_dist</kbd> (which is the distance between the positions of
          point mass <kbd>A</kbd> and <kbd>B</kbd>). If the result is positive,
          then clearly the spring's lengths exceed 10% greater than the rest
          length. We correct this issue by multiplying the direction vector,
          which is a unit vector of the difference between point mass{" "}
          <kbd>A</kbd> and <kbd>B</kbd>, by the magnitude.
        </p>
        <p>
          Next, we consider the possible conditions regarding <kbd>A</kbd> and{" "}
          <kbd>B</kbd> being potentially pinned. If both are pinned, we don't
          make any changes (due to pinned rendering the point masses{" "}
          <i>completely</i> intact). If one mass is pinned, we adjust the other
          unpinned mass's position by the scaled down direction vector. If both
          are unpinned, we split this adjustment between the two point masses.
        </p>
        <p>If implemented correctly, we get the following:</p>
        <Picture src="https://cloth-sim.s3-us-west-1.amazonaws.com/part2/default.png" />
        <p>
          Now, let's play with the spring constant <kbd>ks</kbd>. Turns out this
          can affect how much force is applied in Hooke's Law! We set{" "}
          <kbd>ks</kbd> from low to high values to see the effects that arise
          from tinkering with the spring constant.
        </p>
        {grids[0]}
        <p>
          Clearly, raising <kbd>ks</kbd> increases the rigidity of the cloth;
          that is, it becomes less flexible as <kbd>ks</kbd> approaches
          infinity. Now, consider what happens when density is tampered with:
        </p>
        {grids[1]}
        <p>
          Again, there are obvious differences as density scales from low to
          high. The cloth becomes more fluid (just like raising <kbd>ks</kbd>),
          though the effects flatten out (see <kbd>d = 200, 1500</kbd> for
          comparison). There are also distinct color changes (mainly green and
          pink). Lastly, we want to tinker with the damping coefficient, as
          shown below with respective damping coefficients 0%, 20%, 40%, 100%:
        </p>
        {grids[2]}
        <p>
          The damping coefficient essentially determines the motion of the
          cloth; if there is no damping, then the cloth freely moves around (and
          even flips)! On the other hand, a damping coefficient of 1% renders
          the cloth unable to have any fast motion. This can be attributed to
          the fact that the coefficient <kbd>kd</kbd> has a leading negative
          sign, which fulfills its purpose of slowing down the object's motion.
        </p>
        <p>
          Lastly, the pictures below show a cloth with 4 pins at resting state
          and default parameters, both from a bird's eye and default
          perspective.
        </p>
        {grids[3]}

        <Header as="h2">Object Collisions</Header>
        <p>
          In this section, we implement collisions with both spheres and planes,
          such that the cloth lies just outside the primitive object instead of
          intersecting.
        </p>
        <p>The general algorithm is as follows:</p>
        <List ordered>
          <List.Item>
            Calculate the tangent point where the point mass should have
            intersected the sphere.
          </List.Item>
          <List.Item>
            Compute the correction vector applied to last_position in order to
            reach the tangent point.
          </List.Item>
          <List.Item>
            Assign the new mass position to be <kbd>last_position</kbd> added by
            the correction vector, adjusted by friction <kbd>1 - f</kbd>.
          </List.Item>
        </List>
        <Header as="h3">Sphere</Header>
        <p>
          In the sphere render, we tinker with the spring constant once again.
          This actually determines how much the cloth "drapes" over the sphere,
          as we see below:
        </p>
        {grids[4]}
        <Header as="h3">Plane</Header>
        <p>
          We apply the same algorithm, except that we also add to the correction
          vector a very miniscule constant named <kbd>SURFACE_OFFSET</kbd> in
          order to reach a point slightly above the tangent point. The picture
          below depicts the cloth lying at rest on the plane. For this scenario,
          our <kbd>SURFACE_OFFSET</kbd> was set to <kbd>0.0001</kbd>.
        </p>
        <Picture src="https://cloth-sim.s3-us-west-1.amazonaws.com/part3/plane.png" />

        <Header as="h2">Self-Collision</Header>
        <p>
          Now, we want to make sure that the cloth is able to fold on itself
          rather than clipping through itself (or in other words,
          self-colliding). How we would usually compute this naively is by
          comparing <i>all</i> pairs of point masses and their distances.
          However, this quadratic run-time solution can be exhausting for the
          CPU. Thus, we implement spatial hashing in order to reduce the amount
          of computations and comparisons we have to perform.
        </p>
        <Header as="h3">Hashing</Header>
        <p>
          When the word "hash" comes up, what one automatically thinks of is a
          key and a value. How we plan on generating a unique key is entirely
          dependent on our point mass's position. For this scenario, consider
          the following variables:
        </p>
        <List>
          <List.Item>
            <kbd>w = 3 * width / num_width_points</kbd>
          </List.Item>
          <List.Item>
            <kbd>h = 3 * height / num_height_points</kbd>
          </List.Item>
          <List.Item>
            <kbd>t = max(w, h)</kbd>
          </List.Item>
        </List>
        <p>
          These parameters ultimately define spatial hashing; that is, we
          partition the 3D space into 3D boxes with specific dimensions—a bit
          similar to balls and bins, perhaps.
        </p>
        <p>
          Our hash position thus first starts with a new 3D vector being the
          difference between the position vector and the remainder of dividing
          the position's x, y, z coordinates by w, h, and t respectively;
          somewhat like <kbd>pos.x - fmod(pos.x, w)</kbd>. We make this
          difference in order to classify similar point masses to their spaces
          depending on their positions. Then, we compute our final hashcode{" "}
          <kbd>pos.x + pos.y * 109 + pos.z * 113</kbd>. This guarantees that our
          buckets have a good amount of candidate point masses for future
          comparison.
        </p>
        <p>
          Our <kbd>(key, value)</kbd> pair ultimately is a float mapping to a
          vector of candidate point masses.
        </p>
        <Header as="h3">Implementation</Header>
        <p>
          Consider an arbitrary pair of point masses: one "current" and one
          "candidate." We want to determine if they're within{" "}
          <kbd>2 * distance</kbd> units apart. If so, we want to make sure that
          they are <i>exactly</i> <kbd>2 * distance</kbd> units apart, so the
          cloth can be able to fold on itself. This can be done by computing a
          correction vector that is applied to the current point mass.
        </p>
        <p>
          Here's the catch: we want to cumulate all of these correction vectors
          into one average correction vector after going through all of the
          candidate pairs. Thus, our final computation is adding to the current
          point mass position, the average correction vector divided by{" "}
          <kbd>simulation_steps</kbd>.
        </p>
        <p>If implemented correctly, we get the following sequence:</p>
        {grids[5]}
        <p>
          Now, let's see what happens when density gets modified (2 and 200)!
        </p>
        {grids[6]}
        <p>
          There are some notable differences when varying the density from 2 to
          200 (we already have the default parameter 50). A low density cloth
          appears to be significantly more smooth than its counterparts, and
          vice versa for the high density cloth. This also leads to the cloth
          folding itself significantly less as density decreases from negative
          infinity.
        </p>
        <p>
          Now, what happens if we tamper with the spring constant ks, from 50 to
          1000 to 20000?
        </p>
        {grids[7]}
        <p>
          In fact, there exists an inverse relationship between <kbd>ks</kbd>{" "}
          and the amount of folding. The higher <kbd>ks</kbd> is, the less
          folding there is! Also, the cloth appears to expand much more as{" "}
          <kbd>ks</kbd> grows. Lastly, <kbd>ks</kbd> also affects how rigid the
          cloth is.
        </p>

        <Header as="h2">Shaders</Header>
        <p>
          In this section, we implement shaders, which are isolated programs
          that run on parallel in the GPU, separate from the CPU. This takes
          significantly less computation time! We operate with mainly vertex and
          fragment shaders. Vertex shaders are inherently transformations to
          vertices, and fragment shaders are a result of rasterization that
          basically write in a color.
        </p>
        <Header as="h3">Blinn-Phong Shading Model</Header>
        <p>
          Consider the following model below (<kbd>L</kbd>, <kbd>k</kbd>,{" "}
          <kbd>I</kbd>, <kbd>n</kbd>, <kbd>h</kbd> in vector notation):
        </p>
        <Math>
          <Latex>{blinn_phong}</Latex>
        </Math>
        <p>
          This model is basically a combination of ambient, diffuse, and
          specular lighting. Ambient light is the leftmost term{" "}
          <Latex>$k_a I_a$</Latex>; Diffuse lighting is the middle term, and
          specular lighting is the last term. Before tackling the entire model
          in hand, consider its sub-models instead. Diffuse shading is most
          known for its uniformity; its shading is independent of view
          direction, creating a more matte appearance as the diffuse coefficient
          increases. Phong shading on the other hand is most known for its
          emphasis on surface shading.
        </p>
        <p>
          In short, the Blinn-Phong model combines these components (pictured
          below).
        </p>
        <Picture src="https://cloth-sim.s3-us-west-1.amazonaws.com/part5/components.png" />
        <p>
          In regards to our sphere model, here's what it looks like with the
          subcomponents individually, then combined:
        </p>
        {grids[8]}
        <p>
          Note that ambient appears to be very dark due to our selection of the
          coefficients <Latex>$k_a$</Latex> and <Latex>$I_a$</Latex>.
        </p>
        <Header as="h3">Texture</Header>
        <p>
          We also implement texture sampling, such that we sample a given
          texture at the texture space coordinate uv. Pictured below is a custom
          texture that is sampled all over both the cloth and sphere!
        </p>
        <Picture src="https://cloth-sim.s3-us-west-1.amazonaws.com/part5/custom.png" />
        <Header as="h3">Bump & Displacement Mapping</Header>
        <p>
          Bump Mapping gives fragment shaders the illusion of detail by
          modifying the normal vector! We want to compute the modified normal
          vector <kbd>(-du, -dv, 1)</kbd>, then convert it to model space with
          the TBN vector (which consists of the tangent, bitangent, and the
          normal vectors). We compute the following equation, where{" "}
          <kbd>h(u, v)</kbd> indicates the height encoded by a height map.
        </p>
        <List>
          <List.Item>
            <Latex>
              $dU = (h(u + 1/w, v) - h(h, v)) \times k_h \times k_n$
            </Latex>
          </List.Item>
          <List.Item>
            <Latex>
              $dV = (h(u, v + 1/h) - h(h, v)) \times k_h \times k_n$
            </Latex>
          </List.Item>
        </List>
        <p>
          Displacement mapping on the other hand, is modifying the vertex
          positions to be consistent with the new bump geometry. We modify the
          output vertex position in the vertex shader according to the equation
          below (<kbd>p</kbd>, <kbd>n</kbd> in vector notation):
        </p>
        <Math>
          <Latex>$p' = p + n \times h(u, v) \times k_h$</Latex>
        </Math>
        <p>
          When done correctly, we get the following results with all parameters
          being default.
        </p>
        {grids[9]}
        <p>
          Below are the following results after putting the <kbd>-o</kbd> and{" "}
          <kbd>-a</kbd> flags to <kbd>16</kbd> and <kbd>128</kbd>, respectively.
          We can notice that the sphere's resolution is much higher!
        </p>
        {grids[10]}
        <Header as="h3">Environment-mapped Reflections</Header>
        <p>
          In this section, we implement an approximating mirror model by
          computing the eye-ray <Latex>$w_o$</Latex>, reflecting wo over the
          normal vector to get
          <Latex>$w_i$</Latex>, then sampling the environment map on the
          incoming direction <Latex>$w_i$</Latex>. If implemented correctly, we
          get the following result:
        </p>
        <Picture src="https://cloth-sim.s3-us-west-1.amazonaws.com/part5/mirror.png" />
      </Container>
    </Wrapper>
  );
};

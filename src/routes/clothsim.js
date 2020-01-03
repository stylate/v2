import React from "react";
import styled from "styled-components";
import Latex from "react-latex";
import { Grid, Container, Header, Image, Embed } from "semantic-ui-react";

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

        <Header as='h2'>Object Collisions</Header>
      </Container>
    </Wrapper>
  );
};

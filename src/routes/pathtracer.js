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

export const Pathtracer = () => {
  const uniform_pdf = "$1 / (2 \\times \\pi)$";
  const condition1 = "pdf <= 0";
  const condition2 = "r.depth <= 1";
  const condition3 = "$I \\leq maxTolerance \\times mean$";
  const grids = [
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part1/gems.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part1/spheres.png"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part2/beast.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part2/cow.png"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part3/hemisphere_bunny.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part3/hemisphere.png"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part3/bunny_64_32.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part3/dragon_64_32.png"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part3/dragon_l1.png"
            size="medium"
          />
          <figcaption align="middle">Dragon: 1 light sample</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part3/dragon_l4.png"
            size="medium"
          />
          <figcaption align="middle">Dragon: 4 light samples</figcaption>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part3/dragon_l16.png"
            size="medium"
          />
          <figcaption align="middle">Dragon: 16 light samples</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part3/dragon_l64.png"
            size="medium"
          />
          <figcaption align="middle">Dragon: 64 light samples</figcaption>
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/bunny_global.png"
            size="medium"
          />
          <figcaption align="middle">CBBunny, 1024 pixels</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/spheres_global.png"
            size="medium"
          />
          <figcaption align="middle">CBSpheres, 1024 pixels</figcaption>
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/spheres_direct.png"
            size="medium"
          />
          <figcaption align="middle">
            Sphere: 1024 pixels, direct illumination
          </figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/spheres_indirect.png"
            size="medium"
          />
          <figcaption align="middle">
            Sphere: 1024 pixels, indirect illumination
          </figcaption>
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/bunny_depth_0.png"
            size="medium"
          />
          <figcaption align="middle">Bunny: 1024 pixels, depth = 0</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/bunny_depth_1.png"
            size="medium"
          />
          <figcaption align="middle">Bunny: 1024 pixels, depth = 1</figcaption>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/bunny_depth_2.png"
            size="medium"
          />
          <figcaption align="middle">Bunny: 1024 pixels, depth = 2</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/bunny_depth_3.png"
            size="medium"
          />
          <figcaption align="middle">Bunny: 1024 pixels, depth = 3</figcaption>
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/dragon_1.png"
            size="medium"
          />
          <figcaption align="middle">Dragon: 1 pixel</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/dragon_2.png"
            size="medium"
          />
          <figcaption align="middle">Dragon: 2 pixels</figcaption>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/dragon_4.png"
            size="medium"
          />
          <figcaption align="middle">Dragon: 4 pixels</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/dragon_8.png"
            size="medium"
          />
          <figcaption align="middle">Dragon: 8 pixels</figcaption>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/dragon_16.png"
            size="medium"
          />
          <figcaption align="middle">Dragon: 16 pixels</figcaption>
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/dragon_64.png"
            size="medium"
          />
          <figcaption align="middle">Dragon: 64 pixels</figcaption>
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part5/bunny.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://pathtracer.s3-us-west-1.amazonaws.com/part5/bunny_rate.png"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ];
  return (
    <Wrapper>
      <Container text>
        <Header as="h1">Pathtracer</Header>
        <Header as="h2">Overview</Header>
        <p>
          In this project, we're building a full renderer that mainly utilizes a
          path-tracing algorithm. The renderer utilizes various concepts such as
          adaptive sampling, bounding volume hierarchy, and direct and global
          illumination. We also create additions to our full renderer that
          mainly utilizes a path-tracing algorithm. Specifically, we are
          implementing importance sampling in both environment light and
          microfacet materials. Lastly, we utilize the camera and its basic
          functionalities—specifically the depth of field.
        </p>

        <Header as="h2">Ray Generation & Scene Interaction</Header>
        <p>
          In this part, we implement ray generation; that is, we shoot rays
          through pixels into a specific scene while intersecting with triangles
          and spheres. On a high-level form of understanding, given a value
          num_samples, we construct <kbd>num_samples</kbd> camera rays and
          perform ray tracing on each ray through the scene. We extract the
          results from these to return an average Spectrum.
        </p>
        <Header as="h2">Generating Camera Rays</Header>
        <p>
          How we actually generate camera rays, given a normalized 2D coordinate
          pair of points, is that we convert our points to camera space then
          world space. Before tackling the camera space, let's consider the
          pixel space first. We're given a pair of inputs <kbd>(x, y)</kbd>, and
          we want to construct random rays through this pixel with random points
          in the range <kbd>[0, 1]</kbd>. This means that we essentially cast a
          ray through <kbd>(x + s, y + t)</kbd> such that{" "}
          <kbd>(s, t) is in [0, 1]</kbd>. An edge case is that if we are
          generating only one ray, <kbd>(s, t)</kbd> is automatically{" "}
          <kbd>(0.5, 0.5)</kbd>—the midpoint.
        </p>
        <p>
          Now, let's go back to the camera space. The camera itself is
          positioned at the origin and looks among the <kbd>-z</kbd> axis. Its
          sensor plane's bottom left and top right corners are respectively the
          following:
        </p>
        <List>
          <List.Item>
            <kbd>[-tan(radians(hFov)*.5), -tan(radians(vFov)*.5)]</kbd>
          </List.Item>
          <List.Item>
            <kbd>[tan(radians(hFov)*.5), tan(radians(vFov)*.5)]</kbd>
          </List.Item>
        </List>
        <p>
          We ultimately want to transform our input coordinates to this sensor
          plane. Let <kbd>hFov = x</kbd> and <kbd>vFov = y</kbd>. The range is
          the following:
        </p>
        <List>
          <List.Item>
            <kbd>x : [-tan(radians(hFov)*.5, tan(radians(hFov)*.5]</kbd>
          </List.Item>
          <List.Item>
            <kbd>y : [-tan(radians(vFov*.5, tan(radians(vFov)*.5]</kbd>
          </List.Item>
        </List>
        <p>
          {" "}
          An easy way to map this transform is by first transforming our range{" "}
          <kbd>[0, 1] to [-1, 1]</kbd>.
        </p>
        <p>
          The range <kbd>[-1, 1]</kbd> is simply twice the range of{" "}
          <kbd>[0, 1]</kbd>. Thus, we can just multiply our <kbd>(x, y)</kbd> in
          pixel space by 2. However, we have to retain the original value from
          the pixel space. We thus subtract 1 from the amplification to retrieve
          the original value. In short, we compute <kbd>2((x, y) - 0.5)</kbd>{" "}
          for <kbd>(x, y)</kbd>. Converting <kbd>[-1, 1]</kbd> to sensor space
          is thus simply multiplying the new <kbd>(x, y)</kbd> pair by{" "}
          <kbd>tan(radians((x, y))*0.5</kbd>. After conversion, normalize this
          pair of coordinates and compute a c2w transform towards world space.
        </p>
        <Header as="h3">Intersection with Triangles and Spheres</Header>
        <p>
          The last part of this implementation involves sphere and triangle mesh
          intersection with rays. With regards to ray-triangle intersection, we
          implement the{" "}
          <a href="https://www.scratchapixel.com/lessons/3d-basic-rendering/ray-tracing-rendering-a-triangle/moller-trumbore-ray-triangle-intersection">
            Moller Trumbore Algorithm
          </a>{" "}
          and generate barycentric coordinates and a value <kbd>t</kbd>. This
          intersection is only valid if and only if the barycentric boordinates
          are valid and <kbd>t</kbd> is within the ray's constraints{" "}
          <kbd>min_t</kbd> and <kbd>max_t</kbd>. A picture of the Moller
          Trumbore Algorithm is shown below:
        </p>
        <Picture src="https://pathtracer.s3-us-west-1.amazonaws.com/part1/moller.png" />
        <p>
          With regards to spheres, consider the sphere equation{" "}
          <Latex>$(p - c)^2 - R^2 = 0$</Latex>. To solve for ray-sphere
          intersection, we set <Latex>$p = o + td$</Latex>, for <kbd>o</kbd> is
          the ray's origin and <kbd>d</kbd> is the ray's direction, and solve
          for <kbd>t</kbd>. The constraints from ray-triangle intersection carry
          over. For clarity, we provide the following diagram:
        </p>
        <Picture src="https://pathtracer.s3-us-west-1.amazonaws.com/part1/quad.png" />
        <p>
          When everything is done correctly in this algorithm, we render the
          following two images:
        </p>
        {grids[0]}

        <Header as="h2">Bounding Volume Hierarchy</Header>
        <p>
          When trying to render, for instance, a cow with the starter code, we
          notice that the code takes tremendously long to compute. This is
          because we naively construct a one-node BVH such that all nodes are
          leaves. As a result, our ray-intersection takes <Latex>$O(n)$</Latex>{" "}
          time. However, we can speed up this operation by constructing a more
          efficient BVH, knocking it down to <Latex>$O(\log n)$</Latex> time!
        </p>
        <p>How we create this BVH is as follows:</p>
        <List ordered>
          <List.Item>
            Compute the bounding box of prims in a loop and initialize a new{" "}
            <kbd>BVHNode</kbd>.
          </List.Item>
          <List.Item>
            If <kbd>BVHNode</kbd> is a leaf, allocate a new list of primitives
            and return the node.
          </List.Item>
          <List.Item>
            If not, then proceed. Calculate the split point based on the average
            of the primitives' centroids.
          </List.Item>
          <List.Item>
            Divide the two primitives into their left and right sets based on
            their bounding box's centroid coordinate relative to the split
            point.
          </List.Item>
          <List.Item>
            Set the current node's left and right children to these split lists
            of primitives and repeat this same algorithm.
          </List.Item>
        </List>
        <p>
          An edge case is that one side contains all of the primitives, though
          this rarely happens if ever with the centroid implementation.
          Regardless, how to cover for this case is that we recurse on both the
          node's left and right children with the list that contains all of the
          primitives.
        </p>
        <Header as="h3">Bounding Box Intersection</Header>
        <p>
          Simply speaking, we recursively split our initial list our primitives
          into their respective children based on their centroid coordinates.
        </p>
        <p>
          Next, we implement a ray-bounding box intersection scheme
          BBox::intersect. Since we have three planes, we have to compare the{" "}
          <kbd>t</kbd>
          points for each <kbd>x</kbd>, <kbd>y</kbd>, and <kbd>z</kbd>, and
          compute the <kbd>t_min</kbd> and <kbd>t_max</kbd> intervals for each
          plane. A value <kbd>ti_min / max(coordinate i, min or max)</kbd> is
          computed by either its minimum or maximum, subtracted by the ray's
          origin at <kbd>i</kbd>, divided by its direction at <kbd>i</kbd>. We
          essentially do this computation 6 times total, and swap the{" "}
          <kbd>min</kbd> and <kbd>max</kbd> values if <kbd>min</kbd>
          happens to be greater than <kbd>max</kbd> (due to ray orientation).
          Next, to finally compute <kbd>t_min</kbd>, we compare{" "}
          <kbd>max(tx_min, ty_min, tz_min)</kbd>; for <kbd>t_max</kbd>, we
          compute <kbd>min(tx_max, ty_max, and tz_max)</kbd>. This is because we
          want to constrict the <kbd>t</kbd> intervals as much as possible
          within the bounding box. For reference, consider the 2D diagram below:
        </p>
        <Picture src="https://pathtracer.s3-us-west-1.amazonaws.com/part2/diagram.png" />
        <Header as="h3">Ray-Primitive Intersection</Header>
        <p>
          Lastly, we compute the method <kbd>BVHAccel::intersect</kbd> in order
          to test ray-primitive intersection. First, we check to see if there
          exists an intersection with the ray and bounding box at all. If so, we
          proceed with the following recursive algorithm:
        </p>
        <List ordered>
          <List.Item>
            If <kbd>node</kbd> is a leaf, iterate through each primitive and see
            if it intersects with the ray. Return <kbd>true</kbd> if this
            condition satisfies.
          </List.Item>
          <List.Item>
            Otherwise, recursively repeat this algorithm on the node's left and
            right children. Return <kbd>true</kbd> if either of these children
            have an intersection with the ray.
          </List.Item>
        </List>
        <p>
          If these methods are all implemented correctly, we should be able to
          start rendering more complex meshes, as shown below:
        </p>
        {grids[1]}
        <p>
          In fact, implementing this accelerated BVH structure yields a
          tremendously fast speedup. Consider the following result below:
        </p>
        <Picture src="https://pathtracer.s3-us-west-1.amazonaws.com/part2/result.png" />
        <p>
          The naive structure averaged around 2,700 intersection tests per ray;
          this is incredibly a lot since all of the primitives are iterated
          through the leaf node, yielding a nonefficient computation. On the
          other hand, the accelerated BVH averaged only 3 intersection tests per
          ray. The time complexity change from <Latex>$O(n)$</Latex> to{" "}
          <Latex>$O(\log n)$</Latex> essentially made the cow render take less
          than a minute as opposed to the naive implementation taking at least
          5.
        </p>

        <Header as="h2">Direct Illumination</Header>
        <p>
          Now, we get to render images with realistic shading! But first, we
          should create a BSDF. Our diffusion/lambertian material is made by
          dividing the reflectance by <Latex>$\pi$</Latex>, given the parameters{" "}
          <Latex>$w_o$</Latex> and <Latex>$w_i$</Latex> (which respectively
          stand for the incoming and outgoing solid angles). The function{" "}
          <kbd>DiffuseBSDF::sample_f</kbd> however samples <Latex>$w_i$</Latex>{" "}
          by calling <kbd>sampler.get_sample(pdf)</kbd>, then calls{" "}
          <Latex>$f(w_o, w_i)$</Latex>.
        </p>
        <Header as="h3">Uniform Hemisphere Sampling</Header>
        <p>
          On a high-level form of understanding, we take samples around a
          uniform hemisphere around the point of interest <kbd>hit_p</kbd>, then
          compute its irradiance by first computing the incoming radiance from
          the light source, then converting it to the outgoing radiance with the
          BSDF function implemented previously, then averaging all of the
          samples.
        </p>
        <p>
          Computationally, this is done by iterating through all of the samples
          <kbd>scene->lights.size() * ns_area_light</kbd> and doing the
          following:
        </p>
        <List ordered>
          <List.Item>
            Retrieve a sample from <kbd>hemisphereSampler</kbd>. This is the
            incoming solid angle <Latex>$w_i$</Latex>. Convert it to world
            coordinates by multiplying the matrix <kbd>o2w</kbd> with it.
          </List.Item>
          <List.Item>
            Create a new ray but offset its origin by adding a constant{" "}
            <kbd>EPS_D * wi_world</kbd> to the point of interest. Point it at
            the solid angle's direction (in world coordinates).
          </List.Item>
          <List.Item>
            Test if this ray intersects the scene anywhere. If yes, then we can
            retrieve the intersected material's emitted light by calling{" "}
            <kbd>intersect.bsdf->get_emission()</kbd>.
          </List.Item>
          <List.Item>
            Multiply this emitted light by the passed in intersection's BSDF and
            the cosine of the angle between <Latex>$w_i$</Latex> and the normal
            vector, while dividing the result by the constant pdf{" "}
            <Latex>{uniform_pdf}</Latex>.
          </List.Item>
        </List>
        <p>
          After averaging out all of the results from the samples to get our
          final output, we get the following results:
        </p>
        {grids[2]}
        <p>
          These images look much more realistic than before, though they're a
          little bit too noisy. We can eliminate most of this noise by
          implementing importance sampling!
        </p>
        <Header as="h3">Importance Sampling</Header>
        <p>
          Instead of iterating through each uniform sample in a hemisphere, we
          sample each source of light directly! On a high-level understanding,
          we sum each light source in the scene, such that these light sources
          take in a certain number of samples based on the light surface. We
          compute the irradiance of these light sources and average them out at
          the end.
        </p>
        <p>
          Technically, we do the following for each light source, and for each
          sample (this is similar to hemisphere sampling):
        </p>
        <List ordered>
          <List.Item>
            Retrieve a sample by calling the <kbd>sample_L</kbd> function. This
            gives us a probabilistically sampled <Latex>$w_i$</Latex> unit
            vector giving the direction from <kbd>hit_p</kbd> to the light
            source, the distance from <kbd>hit_p</kbd> to the light source, and
            an evaluated PDF.
          </List.Item>
          <List.Item>
            Compute the same algorithm from the previous section but with this
            sample specifically, with a small variation being that the PDF is
            different and that the ray's <kbd>max_t = distToLight</kbd>.
          </List.Item>
          <List.Item>
            Average out this light source based on the number of samples (1 if
            delta light, <kbd>ns_area_light</kbd> if else). Add the result to{" "}
            <kbd>L_out</kbd> afterward.
          </List.Item>
        </List>
        <p>
          If implemented correctly, we'll be able to construct more renders with
          significantly less noise, as shown below!
        </p>
        {grids[3]}
        <p>
          To sum it up, uniform hemisphere sampling is what it is: generating a
          random direction on the hemisphere, without any preference; all
          directions are equally likely. This is ineffective in comparison to
          importance sampling due to the possibility of most directions yielding
          an irradiance of 0, leading to noise. Importance sampling tends to
          sample directions that would contribute a lot to{" "}
          <a href="https://en.wikipedia.org/wiki/Monte_Carlo_integration">
            Monte Carlo integration
          </a>
          . This is especially evident in the bunny and dragon renders; these
          renders specifically have point light sources, which would be a
          priority in importance sampling.
        </p>
        <p>
          One possible experiment that we can do with importance sampling is
          manipulating both the light samples and samples/pixel. We render a
          dragon using only 1 sample/pixel, and 1, 4, 16, and 64 light rays.
          This results in the following:
        </p>
        {grids[4]}
        <p>
          Though we would evidently generate significantly more noise while
          using only 1 sample/pixel, the amount of light rays is
          multiplicatively scaled, allowing us to revisit that pixel over and
          over. Thus, there exists an inverse relationship with noise and light
          rays, though not as strong as say, noise and samples/pixel.
        </p>

        <Header as="h2">Global Illumination</Header>
        <p>
          Now, we want to render images with global illumination, primarily
          through Monte Carlo integration and russian roulette. Essentially, we
          are computing light paths of at least one bounce (there is no limit on
          bounces)! One may say that we would face the curse of
          dimensionality—integrating over infinite dimensions—but unbiased
          russian roulette would allow us to terminate on a bounce randomly.
          This scheme ultimate allows us to sum over all ray paths of all
          lengths. It suffices to say that computing global illumination is a
          sum of computing radiances that have zero bounces of light, to
          infinitely many bounces of light.
        </p>
        <p>
          Thus, to compute zero bounces of light, we simply return the
          intersection's emitted light. For one bounce of light, we return
          either hemisphere or importance sampling based on the parameter
          <kbd>direct_hemisphere_sample</kbd>. When it comes to russian
          roulette, we give a probability of <kbd>0.7</kbd> and call{" "}
          <kbd>coin_flip(p)</kbd>. If true, then the ray gets terminated. When
          it comes to computing radiances with more than one bounce, however, we
          process the following recursive algorithm:
        </p>
        <List ordered>
          <List.Item>
            Take a sample from the surface BSDF with <kbd>w_out</kbd> as the
            parameter. We retrieve <kbd>w_in</kbd> and pdf this way.
          </List.Item>
          <List.Item>
            Terminate the ray through russian roulette and a series of
            conditions: <kbd>{condition1}</kbd>, and <kbd>max_ray_depth</kbd>{" "}
            and <kbd>{condition2}</kbd>.
          </List.Item>
          <List.Item>
            Compute the radiance for a new ray (offsetted) and intersection if
            and only if there exists an intersection, and either{" "}
            <kbd>r.depth == max_ray_depth</kbd> and <kbd>max_ray_depth > 1</kbd>
            , or the ray wasn't terminated.
          </List.Item>
          <List.Item>
            If the ray's depth is lower than the maximum depth, recursively call
            the same algorithm with the new ray and intersection, and multiply
            the result by the sample and cosine angle, while dividing the whole
            result by pdf and <kbd>1 - p</kbd>. Otherwise, ignore the{" "}
            <kbd>1 - p</kbd> division. In short, scale the incoming radiance to
            an outgoing radiance.
          </List.Item>
        </List>
        <p>
          As a result, the correct implementation of this algorithm will yield
          nice color bleeding in Lambertian scenes (and good use of shadows)!
          Here are some images below:
        </p>
        {grids[5]}
        <p>
          Listed below are implementations of this algorithm with strictly
          direct and indirect illumination.
        </p>
        {grids[6]}
        <p>
          We can see some obvious differences between the two: The spheres
          computed through direct illumination are seemingly normal; that is, it
          looks like a standard global illumination render. However, there is
          notable noise—especially on the sphere—of both black and white specks.
          On the other hand, indirect illumination yields for a more dim look;
          not much light is spread since there is no direct light source, but
          rather a multitude of ray bounces. It's appropritate to say that the
          entire cornell box has very, very soft lighting.
        </p>
        <p>
          Now, we compare the bunny mesh when we alter the maximum ray depth
          allowed.
        </p>
        {grids[7]}
        <center>
          <Picture src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/bunny_depth_100.png" />
        </center>
        <figcaption align="middle">Bunny, 1024 pixels, depth = 100</figcaption>
        <p>
          We can notice a difference between all of these images. First, we note
          that depths 0 and 1 are using mainly direct illumination, and the rest
          a mixture of both direct and indirect. It may not be as notable on the
          web, but when zooming in on depths 2, 3, and 100, we note that the
          brightness increases (or shadows decrease) throughout the image.
        </p>
        <p>
          Now we investigate how the amount of samples per pixel affect the
          entire render. We render a dragon with 4 light rays and 1, 2, 4, 8,
          16, 64, and 1024 samples per pixel separately, and get the following
          results:
        </p>
        {grids[8]}
        <center>
          <Picture src="https://pathtracer.s3-us-west-1.amazonaws.com/part4/dragon_1024.png" />
        </center>
        <figcaption align="middle">Dragon: 1024 pixels</figcaption>
        <p>
          As we start off with 1 sample per pixel, to 1024 per pixel, the amount
          of noise is extremely high, only to converge towards little to no
          noise, as evident on the last render.
        </p>

        <Header as="h2">Adaptive Sampling</Header>
        <p>
          Though the images in the previous part are less noisy, the rendering
          time took up to 2 hours for certain images! This is because we are
          using a fixed sampling rate of 1024/pixel. Turns out, not every part
          of the image needs exactly 1024/pixel. Hence, we introduce a more
          efficient method of sampling: adaptive sampling.
        </p>
        <p>
          Each pixel is processed based on statistics, and determined if it had
          already "converged" upon processing. We measure this convergence by
          calculating <Latex>{condition3}</Latex>, such that{" "}
          <Latex>$I = 1.96 \times (stddev / n)$</Latex>. If the pixel converges,
          we stop ray-tracing immediately.
        </p>
        <p>
          How this is more specifically computed is that we keep track of every
          sample's illuminance in the variables <Latex>$s_1$</Latex> and{" "}
          <Latex>$s_2$</Latex>, such that they are summing up respective a
          sample illuminance and the same thing squared. This is used so we can
          calculate the mean and variance of all <Latex>$n$</Latex> samples,
          which are:
        </p>
        <center>
          <Picture src="https://pathtracer.s3-us-west-1.amazonaws.com/part5/math.png" />
        </center>
        <p>
          In short, we test a pixel's convergence to determine if we continue
          ray-tracing. If it doesn't, we continue. To save computation time, we
          only sample every <kbd>s</kbd> pixels, for <kbd>s</kbd> is an
          arbitrary number. A correct implementation will result in the
          following:
        </p>
        {grids[9]}
      </Container>
    </Wrapper>
  );
};

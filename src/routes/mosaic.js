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

export const Mosaic = () => {
  const condition1 = "$1-NN / 2-NN < k$";
  const condition2 = "$SSD(p', Hp) < k$";
  const grids = [
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/rect.jpg"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/rect-out.jpg"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/sign.jpg"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/sign-out.jpg"
            size="medium"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/v-l.jpg"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/v-c.jpg"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/blended-room.jpg"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/a-l.jpg"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/a-c.jpg"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/blended-amazon.jpg"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/m-l.jpg"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/m-c.jpg"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/blended-mlk.jpg"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/harris/harris-left-amazon.png"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/harris/harris-center-amazon.png"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/harris/harris-left-mlk.png"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/harris/harris-center-mlk.png"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/harris/harris-left-room.png"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/harris/harris-center-room.png"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/anms/anms-left-amazon.png"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/anms/anms-center-amazon.png"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/anms/anms-left-mlk.png"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/anms/anms-center-mlk.png"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/anms/anms-left-room.png"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/anms/anms-center-room.png"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/matching/matching-left-amazon.png"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/matching/matching-center-amazon.png"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/matching/matching-left-mlk.png"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/matching/matching-center-mlk.png"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/matching/matching-left-room.png"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/matching/matching-center-room.png"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/ransac/ransac-left-amazon.png"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/ransac/ransac-center-amazon.png"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/ransac/ransac-left-mlk.png"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/ransac/ransac-center-mlk.png"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/ransac/ransac-left-room.png"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/ransac/ransac-center-room.png"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>,
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/autoblended-amazon.jpg"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/blended-amazon.jpg"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/autoblended-mlk.jpg"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/blended-mlk.jpg"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/autoblended-room.jpg"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Picture
            src="https://image-warping.s3-us-west-1.amazonaws.com/blended-room.jpg"
            size="large"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ];
  return (
    <Wrapper>
      <Container text>
        <Header as="h1">Mosaic Builder</Header>

        <p>
          <u>Disclaimer:</u> Best viewed on non-mobile devices.
        </p>

        <Header as="h2">Manual Mosaicing</Header>
        <Header as="h3">Recovering Homographies</Header>
        <p>
          To recover the homography matrix, I first used Python's{" "}
          <kbd>ginput()</kbd>
          function to pick certain points. Then, I computed <kbd>
            p' = Hp
          </kbd>{" "}
          and converted H from a 8x1 matrix to a 3x3 matrix. Typically, the
          correspondence points that are chosen are two-dimensional. In order to
          recover the Homography matrix, we transform these points into
          three-dimensional homography points, such that the third coordinate is
          a scaling factor.
        </p>
        <Header as="h3">Rectification</Header>
        <p>
          A rectangular box is chosen by 4 points that are then passed onto the
          homography matrix with a unit square. Then, we perform inverse warping
          with the inverse homography matrix and the warped points{" "}
          <Latex>$(x', y')$</Latex>.
        </p>
        {grids[0]}
        <Header as="h3">Image Stitching</Header>
        <p>
          A series of corresponding points are chosen between the left and
          center images for the homography matrix. Linear blending is finally
          performed and we are able to construct an image mosaic of the two!
          This can be done by rectifying the left image to a known shape, and
          padding both images based on the offsets of the warped corners of the
          left image.
        </p>
        {grids[1]}

        <Header as="h2">Automation</Header>
        <p>
          Turns out, we can follow the{" "}
          <a href="https://inst.eecs.berkeley.edu/~cs194-26/fa18/Papers/MOPS.pdf">
            MOPS algorithm
          </a>{" "}
          in order to perform autostitching and computationally set
          correspondence points. This removes the possibility of "bad" points.
        </p>
        <Header as="h3">Harris Corners</Header>
        <p>
          First, we can get a series of interest points using a Harris point
          detector algorithm. This detects corner points based on a sliding
          window of points and measuring the intensity levels. Unfortunately, as
          shown below, there are too many interest points given.
        </p>
        {grids[2]}
        <Header as="h3">Adaptive Non-Maximal Suppresion (ANMS)</Header>
        <p>
          Turns out, we can use the ANMS method to reduce the amount of interest
          points, especially since they are too close together. The main
          algorithm runs colinearly with the amount of interest points, so
          reducing such will speed up the algorithm.
        </p>
        <p>
          For each harris point <kbd>i</kbd>, ANMS finds its suppression
          radius—the smallest distance between the harris point and another
          harris point <kbd>j</kbd>
          such that the corner strength of <kbd>i</kbd> is less than the product
          of a constant <kbd>c</kbd> and the corner strength of <kbd>j</kbd>.
          Next, we select the top 300 points based on the largest suppression
          radii. As we can see, the amount of points is reduced slightly, while
          also being evenly spaced out throughout the images. We can still
          significantly reduce these points, however!
        </p>
        {grids[3]}
        <Header as="h3">Feature Descriptors & Matching</Header>
        <p>
          Next, we create feature descriptors for each harris point by first
          creating a 40x40 patch surrounding the point. Then, each patch gets
          downsampled to a 8x8 patch with bias/gain normalization.
        </p>
        <p>
          These descriptors are made specifically for both the left and center
          images. It now makes sense to keep only descriptors that match with
          each other—based on Lowe's algorithm. Essentially, we compute the SSD
          between an arbitrary left and center descriptor, corresponding to the
          left and center points. Then we take the bottom two lowest SSDs and
          determine if they satisfy the condition <Latex>{condition1}</Latex>{" "}
          for <kbd>k</kbd> is an arbitrary number, like 0.5. This significantly
          reduces the amount of interest points we have!
        </p>
        {grids[4]}
        <Header as="h3">RANSAC</Header>
        <p>
          Although feature matching significantly reduces our interest points,
          there exists some outliers in the matching pairs. This can
          significantly alter our Homography matrix, so we use the RANSAC
          algorithm to create an appropriate Homography matrix that would blend
          the two images together with a slightly less amount of matching pairs.
          The following algorithm goes by the following:
        </p>
        <List ordered>
          <List.Item>Select 4 matching pairs at random.</List.Item>
          <List.Item>
            Compute the homography matrix and the inliers; matching pairs{" "}
            <Latex>$(p, p')$</Latex> are inliers if <Latex>{condition2}</Latex>.
          </List.Item>
          <List.Item>
            Keep the largest set of inliers after repeating steps 1 and 2{" "}
            <Latex>$n$</Latex>
            times, for <Latex>$n$</Latex> is an arbitrary large integer.
          </List.Item>
          <List.Item>
            Recompute the homography matrix with the largest set of inliers.
          </List.Item>
        </List>
        {grids[5]}

        <Header as="h2">Results</Header>
        <p>
          After obtaining the homography matrix from the RANSAC algorithm, we
          run the same warping procedure as from our manual operations. The left
          images are autostitched, and the right images are the results of
          picking manual points. We can see that the blending is significantly
          more seamless in the left images!
        </p>
        {grids[6]}

        <Header as="h2">Summary</Header>
        <p>
          What I thought was really interesting was how the Homography matrix
          was the key to image rectification and mosaic building. It's
          fascinating how such transformation matrices can easily transform the
          POV of an image, and how they can help stitch two images into a
          panorama. Furthermore, it was really cool to learn about how
          autostitching worked in images! It didn't occur to me that various
          equations dictated what were exactly "good" correspondence points when
          it came to computing an ideal homography matrix.
        </p>
      </Container>
    </Wrapper>
  );
};

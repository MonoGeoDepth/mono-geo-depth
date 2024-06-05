import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './components/appbar';
import bgimage from './images/splash.jpg';
import video from './images/MonoGEOdepth.mp4';
import { Button, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const FixedAppBar = styled('div')(({ theme }) => ({
  width: '100%',
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.drawer + 1,
}));

const ScrollableContent = styled('div')(({ theme }) => ({
  width: '100%',
  overflowX: 'hidden',
  height: 'calc(100vh - 64px)', // Adjust the height as needed
}));

function App() {
  return (
    <Grid container>
      <FixedAppBar>
        <ResponsiveAppBar />
      </FixedAppBar>
      <ScrollableContent>
        <Grid
          item
          container
          elevation={3}
          xs={12}
          sx={{
            paddingTop: '50px',
            width: '100%', // Set the width to 100%
            backgroundColor: 'red',
            backgroundImage: `url(${bgimage})`,
            minHeight: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', // Set the size of the background image
          }}
        >
          <Grid item xs={12} md={8} paddingLeft={2}>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: '40px',
                  sm: '80px',
                  md: '124px',
                  lg: '140px',
                }, // Adjust the font size as needed
                color: 'lightcyan', // Change the color to white
              }}
            >
              MonoGeoDepth
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: '30px',
                  sm: '60px',
                },
                color: 'lightcyan', // Change the color to white
              }}
            >
              Monocular Depth Estimation of Planetary Landforms
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: {
                  xs: '24px',
                  sm: '48px',
                },
                color: 'lightcyan', // Change the color to white
              }}
            >
              A Diffusion Model Approach for Faster Inference
            </Typography>
          </Grid>

          <Grid item xs={12} paddingLeft={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'blueviolet',
                marginRight: '16px',
                marginTop: '-100px',
                '&:hover': {
                  backgroundColor: 'darkviolet', // Changes the button color on hover
                },
                fontSize: '32px',
                borderRadius: '12px',
              }}
              onClick={() =>
                window.open('https://github.com/MonoGeoDepth/', '_blank')
              }
            >
              Github
            </Button>

            <Button
              variant="contained"
              disabled={true}
              sx={{
                backgroundColor: 'blueviolet',
                marginRight: '16px',
                marginleft: '16px',
                marginTop: '-100px',
                '&:hover': {
                  backgroundColor: 'darkviolet', // Changes the button color on hover
                },
                fontSize: '32px',
                borderRadius: '12px',
              }}
              onClick={() =>
                window.open('https://github.com/MonoGeoDepth/', '_blank')
              }
            >
              paper
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: 'blueviolet',
                marginTop: {
                  xs: '0px',
                  sm: '-100px',
                },
                marginleft: '16px',
                '&:hover': {
                  backgroundColor: 'darkviolet', // Changes the button color on hover
                },
                fontSize: '32px',
                borderRadius: '12px',
              }}
              onClick={() =>
                window.open(
                  'https://huggingface.co/datasets/Diffins/HiRISE-DTMs',
                  '_blank'
                )
              }
            >
              DataSet
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          container
          paddingLeft={5}
          paddingRight={5}
          paddingTop={2}
          paddingBottom={5}
          borderRadius={5}
          marginLeft={2.5}
          marginTop={5}
          style={{ display: 'flex', justifyContent: 'center' }}
          elevation={4}
          justifyContent="center"
          xs={11.75}
          sx={{ backgroundColor: '#e3e3ff' }}
        >
          <Grid item xs={12} marginBottom={4}>
            <Typography
              variant="h2"
              align="center"
              paddingLeft={8}
              paddingRight={8}
              sx={{
                color: 'darkviolet',
                fontSize: {
                  xs: '24px',
                  sm: '50px',
                  md: '64px',
                },
              }}
            >
              About Our Model
            </Typography>
          </Grid>

          <Grid item xs={12} xl={6}>
            <ReactPlayer
              url={video} // Replace with your video URL
              controls
              playing
              width="100%"
              height="100%"
            />
          </Grid>
          <Grid item xs={12} xl={6}>
            <Typography
              variant="h5"
              align="justify"
              paddingLeft={{ xs: 2, xl: 8 }}
              paddingRight={{ xs: 2, xl: 2 }}
              paddingTop={{ xs: 5, xl: 0 }}
              sx={{ color: 'black' }}
            >
              Monocular depth estimation presents a significant challenge due to
              the inherent complexity of deriving three-dimensional structures
              from two-dimensional imagery. Additionally, in the context of Mars
              satellite imagery, further challenges need to be overcome given
              data limitations and the substantial demand for computational
              resources. Our research introduces a novel Conditional Diffusion
              Model to address efficient depth map generation from monocular
              images of planetary landforms. Leveraging the advanced feature
              extraction capabilities of the Swin Transformer, our approach
              enhances depth map generation accuracy by incorporating rich
              contextual information. This study not only addresses the
              computational and data- related challenges of traditional depth
              estimation methods but also significantly improves inference
              times, making it highly applicable to remote sensing and planetary
              geosciences. By presenting a scalable and efficient solution for
              accurate depth perception from limited single-image inputs, this
              work contributes to advancements in both computer vision
              technology and the exploration of Martian topography.
            </Typography>
          </Grid>
        </Grid>

        <Grid item container xs={12} marginBottom={5}>
          <Grid
            item
            container
            paddingLeft={5}
            paddingRight={5}
            paddingTop={2}
            paddingBottom={5}
            borderRadius={5}
            marginLeft={2.5}
            marginTop={5}
            style={{ display: 'flex', justifyContent: 'center' }}
            elevation={4}
            justifyContent="center"
            xs={11.75}
            sx={{ backgroundColor: '#e3e3ff' }}
          >
            <Grid item xs={12} marginBottom={4}>
              <Typography
                variant="h2"
                align="center"
                paddingLeft={8}
                paddingRight={8}
                sx={{
                  color: 'darkviolet',
                  fontSize: {
                    xs: '24px',
                    sm: '50px',
                    md: '64px',
                  },
                }}
              >
                Dataset
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h5"
                align="justify"
                paddingLeft={2}
                paddingRight={2}
                sx={{ color: '' }}
              >
                HiRISE DTMs are digital terrain models created for the surface
                of Mars. These DTMs are generated using stereo-matching
                techniques on two satellite images taken from different angles
                as part of the High-Resolution Imaging Science Experiment
                (HiRISE) project. This dataset consists of stereo pairs and
                their respective digital terrain models. This dataset is
                important for studies in depth estimation, computer vision, and
                geoscience fields.
              </Typography>
              <Grid item xs={12} paddingLeft={2} marginTop={3}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'darkviolet',

                    '&:hover': {
                      backgroundColor: 'blueviolet', // Changes the button color on hover
                    },
                    fontSize: '32px',
                    borderRadius: '12px',
                  }}
                  onClick={() =>
                    window.open(
                      'https://huggingface.co/datasets/Diffins/HiRISE-DTMs',
                      '_blank'
                    )
                  }
                >
                  DataSet
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            paddingLeft={5}
            paddingRight={5}
            paddingTop={2}
            paddingBottom={5}
            borderRadius={5}
            marginLeft={2.5}
            marginTop={5}
            style={{ display: 'flex', justifyContent: 'center' }}
            elevation={4}
            justifyContent="center"
            xs={11.75}
            sx={{ backgroundColor: '#e3e3ff' }}
          >
            <Grid item xs={12} marginBottom={4}>
              <Typography
                variant="h2"
                align="center"
                paddingLeft={8}
                paddingRight={8}
                sx={{
                  color: 'darkviolet',
                  fontSize: {
                    xs: '24px',
                    sm: '50px',
                    md: '64px',
                  },
                }}
              >
                Visualization Tool
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h5"
                align="justify"
                paddingLeft={2}
                paddingRight={2}
                sx={{ color: '' }}
              >
                we have developed an open-source visualization tool to convert a
                given satellite image into a depth image. This tool can be
                extended as a real-time depth estimation tool, considering its
                lower inference time. The source code for this project, along
                with our research paper, will be made available upon
                publication. We believe in open science and are excited to share
                our work with the global community.
              </Typography>
              <Grid item xs={12} paddingLeft={2} marginTop={3}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'darkviolet',

                    '&:hover': {
                      backgroundColor: 'blueviolet', // Changes the button color on hover
                    },
                    fontSize: '32px',
                    borderRadius: '12px',
                  }}
                  onClick={() =>
                    window.open('https://github.com/MonoGeoDepth/', '_blank')
                  }
                >
                  github
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          paddingLeft={5}
          paddingRight={5}
          paddingTop={2}
          paddingBottom={5}
          marginTop={5}
          style={{ display: 'flex', justifyContent: 'center' }}
          elevation={4}
          justifyContent="center"
          xs={12}
          sx={{ backgroundColor: 'blueviolet' }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              align="center"
              paddingLeft={8}
              paddingRight={8}
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: {
                  xs: '30px',
                  sm: '60px',
                },
              }}
            >
              <TravelExploreIcon
                sx={{
                  fontSize: {
                    xs: '30px',
                    sm: '60px',
                  },
                  marginRight: '10px',
                }}
              >
                add_circle_outline
              </TravelExploreIcon>
              MonoGeoDepth
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              align="center"
              paddingLeft={8}
              paddingRight={8}
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: {
                  xs: '10px',
                  sm: '18px',
                },
              }}
            >
              &copy; 2024 MonoGeoDepth. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </ScrollableContent>
    </Grid>
  );
}

export default App;

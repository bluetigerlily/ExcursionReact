import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const tiers = [
  {
    title: 'Once a Year Dream Vacation',
    price: '100',
    description: [
      '1 roundtrip ticket',
      '2 days filled with activities',
      '3 nights at one of our luxurious hotels',
      'Email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
  {
    title: 'Twice a Year Dream Vacation',
    subheader: 'Most popular',
    price: '200',
    description: [
      '2 roundtrip tickets',
      '3 days filled with activities',
      '4 nights at one of our luxurious hotels',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'contained',
  },
  {
    title: 'Three Dream Vacations a Year',
    price: '300',
    description: [
      '3 round trip tickets',
      '4 days filled with activties',
      '5 nights at one of our luxurious hotels',
      'Priority Concierge Service',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];



export default function Pricing() {

    return (
      <div className='pricingoutercontainer'>
        <Box component="main" 
        sx={{ 
          pt: 8, 
          pb: 30, 
          height: '100%',
          background: `linear-gradient(to bottom, #7c8490, #151515)`

        }}>
        <Container maxWidth="full" component="main" className='textContainer' 
        sx={{ 
          pt: 5,
          pb: 15,     
        }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="#e4eff6"
          fontSize='10rem'
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography 
        variant="h5" 
        align="center" 
        color="#e4eff6" 
        component="p"
        fontSize='2rem'
        >
         Your dream vacation is just a click away. 
         It&apos;s simple and easy we offer three tiers of Travel Packages to anywhere in the world.
        </Typography>
      </Container>


<Container maxWidth="full" component="main" sx={{       
 }}>
        <Grid container spacing={5} alignItems="flex-end"  >
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Three Dream Vacations a Year' ? 12 : 6}
              justifyContent="center" 
              md={4}
              pb={10}

            >
              <Card disableGutters sx={{
                boxShadow: 22,
                maxHeight: '25rem'
                }}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ 
                    align: 'center',
                    color: '#151515',
                     }}
                  action={tier.title === 'Twice a Year Dream Vacation' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                    color: '#151515',

                  }}
                  
                  sx={{
                        color: '#151515',
                        bgcolor: "primary.main"  


                  }}
                />
                <CardContent>
                  <Box 
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 1,
                      margin: 'auto',
                      

                    }}
                  > 
                    <Typography component="h2" variant="h3" color="#e4eff6">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="#e4eff6">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="ol"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        pl={0}
                        pr={4}
                      
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth  variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
      </div>
    );
}
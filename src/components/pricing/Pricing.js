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
      'Complimentary Concierge Service',
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
        <div>
        <Box component="main" sx={{ pt: 8, pb: 6, bgcolor: '#b0bec5', height: '58.7rem'
        }}>
        <Container disableGutters maxWidth="full" component="main" sx={{ pt: 8, pb: 6, bgcolor: '#b0bec5'
        }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="main"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="secondary" component="p">
         Your dream vacation is just a click away. 
         It&apos;s simple and easy we offer three tiers of Travel Packages to anywhere in the world.
        </Typography>
      </Container>


<Container maxWidth="full" disableGutters component="main" sx={{ bgcolor: '#b0bec5' }}>
        <Grid container spacing={5} alignItems="flex-end"  >
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card disableGutters>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
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
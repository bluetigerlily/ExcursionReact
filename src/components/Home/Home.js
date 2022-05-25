import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import './Home.scss';
import Image from '../..//assets/backgroundlineswhite.svg'



export default function Home(props) {

  const [Click, setOnClick] = React.useState(false);
  

  const handleClick = () => {
    setOnClick(!Click);
  };
 

    return (
    <div className='homecontainer'>
      
    <Box
     sx={{  
        bgcolor: '#121212',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${Image})`,
        flexDirection: "column",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
			  backgroundSize: "cover",
			  backgroundAttachment: "fixed",
        m: 4,
        
        }}
        disableGutters
     >
      
     <Typography sx={{ 
       fontSize: '6.5rem',
              }}
        color="text.primary" gutterBottom>
          You Deserve Happiness
        </Typography>
      
      <ImageList 
      variant="woven"
      cols={3}
      gap={10}
      >

        {itemData.map((item) => (
          <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />

          <ImageListItemBar
            title={item.title}
            subtitle={item.details}
            actionIcon={

              
              <IconButton 
                onClick={handleClick}
                aria-label={`info about ${item.title}`}
              >

                <StarIcon  sx={{ color: `${(Click ? 'yellow' : '{rgba(255, 255, 255, 0.54)}')}`}} />

              </IconButton>
       
           }

            actionPosition="left"
          />
          
        </ImageListItem>
        ))}
        
        </ImageList>
  
      </Box>
  </div>
  );
}

const itemData = [
 
    {
      img: 'https://images.unsplash.com/photo-1627537104682-15008df883ef?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
      title: 'Mount Rushmore',
    },
    {
      img: 'https://images.unsplash.com/photo-1648631272400-f2ff22de4545?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
      title: 'Paris, France',
    },
    {
      img: 'https://images.unsplash.com/photo-1649805311860-19ecc244533f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
      title: 'Byron Bay NSW, Australia', 
    },
    {
      img: 'https://images.unsplash.com/photo-1651945205231-d20282acba59?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
      title: 'Serik, Turkey',
  },
  {
      img: 'https://images.unsplash.com/photo-1652417928593-0e7234d2bbe0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
      title: 'Scheveningen Strand, Netherlands',
  },
  {
     img: 'https://images.unsplash.com/photo-1652668130483-15121ec5b96d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
      title: 'Iran, Isfahan Province',
      details: 'The Heart of Iran, the Cultural Superplex of the Isfahan Province Region.',
  },
   
  ];



// removed these to decrease loading times and also make way for text


// {
//   img: 'https://images.unsplash.com/photo-1652515076688-74514f941a2e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
//   title: 'Venice, Italy',
// },
// {
//   img: 'https://images.unsplash.com/photo-1650754634717-eab9b4b1bd54?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
//   title: 'Cologne, Germany',
// },
// {
//   img: 'https://images.unsplash.com/photo-1652806724545-669233b0b1f2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
//   title: 'Tehran Province, Iran',
// },
// {
//   img: 'https://images.unsplash.com/photo-1652523843280-1266e2520a91?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
//   title: 'Cairo, Egypt',
// },
// {
//   img: 'https://images.unsplash.com/photo-1652523843280-1266e2520a91?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
//   title: 'Cairo, Egypt',
// },
// {
//   img: 'https://images.unsplash.com/photo-1649717233552-54a6564d442b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
//   title: 'Berlin, Germany',
// },
// {
//   img: 'https://images.unsplash.com/photo-1652173254238-38fb2aa89ffd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
//   title: 'Birmingham, United Kingdoms',
// },
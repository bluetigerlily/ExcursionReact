import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  
  
    return (
<Box sx={{
height: '100%',
bgcolor: '#121212'
}}
>
      <Typography sx={{ fontSize: 95 }} color="text.primary" gutterBottom>
          You Deserve Happiness
        </Typography>

    <Box sx={{  
        width: '100%',
        bgcolor: '#121212',
        display: 'flex',
        justifyContent: 'center',
        }}
     >
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
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
        <StarBorderIcon /> 
       

              </IconButton>
            }
            actionPosition="left"
          />
          
        </ImageListItem>
        ))}
        
      </ImageList>
    </Box>
    </Box>
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
  
 
 
 
];




// removed these to decrease loading times and also make way for text
// {
//   img: 'https://images.unsplash.com/photo-1651945205231-d20282acba59?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
//   title: 'Serik, Turkey',
// },
// {
//   img: 'https://images.unsplash.com/photo-1652417928593-0e7234d2bbe0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
//   title: 'Scheveningen Strand, Netherlands',
// },
// {
//   img: 'https://images.unsplash.com/photo-1652668130483-15121ec5b96d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
//   title: 'Iran, Isfahan Province',
//   details: 'The Heart of Iran, the Cultural Superplex of the Isfahan Province Region.',
// },
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
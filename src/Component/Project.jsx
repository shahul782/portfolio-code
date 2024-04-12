import * as React from 'react';
import CardContent from "@mui/material/CardContent";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Project.css'

const Project = () => {
  return (
    <>
      <div className="container">
        <div className='row mt-4  justify-content-evenly' >
          <div className="col-3">
          <CardImage sx={{ maxWidth: 700, maxHeight: 700 }} 
              img='./Poster.jpg' 
              name='Movies' 
              gitClientLink='https://github.com/shahul782/movies-frontend' 
              gitServerLink='https://github.com/shahul782/movies-backend' 
              button1Text='Git Client' 
              button2Text='Git Server' 
            />
          </div>
          <div className="col-3">
            <CardImage sx={{ maxWidth: 700, maxHeight: 700 }} 
              name='Quotation Maker' 
              img='./quatation-img.jpg'
              gitClientLink='https://github.com/shahul782/Quatation-Maker-Client' 
              gitServerLink='https://github.com/shahul782/QuationMaker_Server' 
              button1Text='Git Client' 
              button2Text='Git Server' 
            />
          </div>
          <div className="col-3">
            <CardImage  sx={{ maxWidth: 700, maxHeight: 700 }} 
              img='./Food-Poster.jpg' 
              name='Go Food' 
              gitClientLink='https://github.com/shahul782/goofood' 
              gitServerLink='https://github.com/shahul782/movies-backend' 
              button1Text='Git Client' 
              button2Text='Git Server' 
            />
          </div>
          <div className="col-3">
            <CardImage sx={{ maxWidth: 700, maxHeight: 700 ,}} 
              img='./products.jpg' 
              name='Products' 
              gitClientLink='#' 
              gitServerLink='#' 
              button1Text='Git Client' 
              // button2Text='Git Server' 
              hide='hide'
            />
          </div>
        </div>
      </div>
    </>
  )
}

function CardImage ({ name, img, gitClientLink, gitServerLink, button1Text, button2Text,hide }) {
  return (
    <>
      <Card sx={{ maxWidth: 445, maxHeight: 500 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={img}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" href={gitClientLink}>{button1Text}</Button>
          <Button variant="contained" hidden={hide} size="small" href={gitServerLink}>{button2Text}</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default Project;

import { Container, Divider, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <>
      <Container sx={{ p: 4 }}>
        <Typography
          sx={{ justifyContent: "center", display: "flex", m: 2 }}
          variant="h2"
        >
          About Us
        </Typography>
        <Divider/>
        <Typography
          paragraph
          sx={{ justifyContent: "center", display: "flex", m: 2 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          reprehenderit natus perspiciatis iusto, in dolor asperiores dolorum,
          consequatur nihil nulla aspernatur maxime repudiandae facere. Sed
          saepe accusamus dolore quam quo adipisci magni quasi quae nihil,
          quaerat labore culpa a cumque unde tenetur laboriosam deserunt
          corrupti perferendis! Sed harum eveniet veniam voluptas fugiat
          commodi? Iusto unde placeat commodi! Assumenda similique cumque magnam
          esse nemo veniam repudiandae impedit expedita distinctio minima
          corporis asperiores facilis a deleniti quam, reprehenderit nulla! Ab,
          voluptate praesentium. Recusandae quae reiciendis, possimus nesciunt
          hic velit est vitae, in non quos perferendis dolorem ducimus molestiae
          cum quod enim odio corporis alias rerum officia id mollitia nemo.
          Odit, tempora accusamus nostrum quas deleniti enim corporis nam
          doloribus, rerum voluptatem nulla facere id aliquam, maiores quia
          praesentium voluptatum fugit at nesciunt. Delectus, illum quam. Sunt,
          molestias?
        </Typography>
      </Container>
    </>
  );
}

export default About
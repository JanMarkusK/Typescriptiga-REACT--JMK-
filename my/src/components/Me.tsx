import * as React from "react"
import { Typography, ListItem, List, ListItemText,  } from "@mui/material"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2'
import MyContainer from "../layout/MyContainer";

 const Demo = styled('div')(({ theme }) => ({
   backgroundColor: theme.palette.background.paper,
 }));

export default function Me() {
  return (
    <>
      <MyContainer>
        <Typography variant="h3">JMK</Typography>
        <hr />
        <Grid container spacing={2}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Hobid:
          </Typography>
          <Demo>
            <List>
                <ListItem>
                  <ListItemText
                    primary="Mängud"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Kunst"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Ajalugu"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Proge"
                  />
                </ListItem>
            </List>
          </Demo>
        </Grid>
      </MyContainer>
    </>
  )
}

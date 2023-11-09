import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ProjectCard({ projects }) {
  return (
    <div className="projectcard">
    <Card sx={{ maxWidth: 450 }} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={projects.image}
          alt={projects.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {projects.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default ProjectCard;

import * as React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { Box, Typography, CircularProgress } from "@mui/material"
import { IconButton, ImageListItemBar } from "@mui/material"
import { Info } from "@mui/icons-material"
import Dialogue from "../components/Dialogue/Dialogue"
import { graphql } from "gatsby"

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}

export default function QuiltedImageList({ data }) {
  const styles = {
    mainBox2: {
      display: "flex",
      flexDirection: "column",
      margin: "20px auto",
      width: "100%",
    },
    mainHeading: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 500,
      fontSize: "25px",
      color: "#a2cfcd",
      margin: "auto",
      marginBottom: "16px",
    },
    smallLine2: {
      color: "#002A4C",
      backgroundColor: "#cbaf22",
      width: "40px",
      height: "1px",
      marginTop: "3px",
    },
    subHeading: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      fontSize: "40px",
      color: "#a2cfcd",
      margin: "auto",
      textAlign: "center",
      marginBottom: "16px",
      "@media (max-width:1150px ) and (min-width:900px )": {
        fontSize: "50px",
      },
      "@media (max-width:899px ) and (min-width:700px )": {
        fontSize: "40px",
      },
      "@media (max-width:699px ) and (min-width:550px )": {
        fontSize: "35px",
      },
      "@media (max-width:549px ) and (min-width:300px )": {
        fontSize: "30px",
      },
      "@media (max-width:299px )": {
        fontSize: "25px",
      },
    },
    smallBox: {
      color: "#002A4C",
      backgroundColor: "#cbaf22",
      width: "7px",
      height: "7px",
    },
  }
  const [open, setOpen] = React.useState(false)
  const [load, setload] = React.useState(false)
  const [dataa, setdataa] = React.useState("")

  const handleClickOpen = (name, _data) => () => {
    setOpen(true)
    console.log("name", name)
    console.log("_data 80", _data)
    setdataa(name + " " + _data)
  }
  React.useEffect(() => {
    setload(true)
  }, [open, load])
  return (
    <Box>
      <Box sx={styles.mainBox2}>
        <Typography sx={styles.mainHeading}>Our Gallery</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "25px",
          }}
        >
          <Box sx={styles.smallLine2}>.</Box>
          <Box sx={styles.smallBox}>.</Box>
          <Box sx={styles.smallLine2}>.</Box>
        </Box>
        <Typography sx={styles.subHeading}>
          Some Professional Pictures
        </Typography>
      </Box>

      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          margin: "50px auto",
        }}
      >
        {load ? (
          <>
            <ImageList
              sx={{ "@media(max-width:700px)": { display: "none" } }}
              variant="quilted"
              cols={6}
              rowHeight={190}
            >
              {data.allMarkdownRemark.edges.map(item => {
                const gemContent = item?.node?.frontmatter
                return (
                  <ImageListItem
                    key={gemContent.image}
                    cols={gemContent.cols || 1}
                    rows={gemContent.rows || 1}
                  >
                    <img
                      {...srcset(
                        gemContent.image,
                        190,
                        gemContent.rows,
                        gemContent.cols
                      )}
                      alt={gemContent.mainHeading}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={gemContent.mainHeading}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${gemContent.mainHeading}`}
                        >
                          <Info
                            onClick={handleClickOpen(
                              gemContent.mainHeading,
                              gemContent.details
                            )}
                          />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                )
              })}
            </ImageList>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                margin: "50px auto",
                "@media(min-width:700px)": { display: "none" },
              }}
            >
              {data?.allMarkdownRemark?.edges?.map(item => {
                const gemContent = item?.node?.frontmatter
                return (
                  <Box>
                    <img
                      style={{ margin: "10px auto", width: "100%" }}
                      src={gemContent.image}
                      alt={gemContent.mainHeading}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      sx={{ position: "relative" }}
                      title={gemContent.mainHeading}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${gemContent.mainHeading}`}
                        >
                          <Info
                            onClick={handleClickOpen(
                              gemContent.mainHeading,
                              gemContent.details
                            )}
                          />
                        </IconButton>
                      }
                    />
                  </Box>
                )
              })}
            </Box>
          </>
        ) : (
          <CircularProgress />
        )}
      </Box>
      <Dialogue data={dataa} open={open} setOpen={setOpen} />
    </Box>
  )
}

export const query = graphql`
  query data {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            mainHeading
            details
            image
            cols
            rows
          }
        }
      }
    }
  }
`

import React from "react";
import { styled } from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import person from "../../../assets/Image 5.png";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import IconButton from "@mui/joy/IconButton";
import Edit from "@mui/icons-material/Edit";
import Chip from "@mui/joy/Chip";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";

const Employee = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <Card variant="outlined" sx={{border: 0,   boxShadow: '1px 1px 10px 1px lightgrey'}}>
          <div>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              className="bg-hover"
              sx={{
                position: "absolute",
                top: "0.875rem",
                right: "0.5rem",
                backgroundColor: "#d4d4d4",
                borderRadius: 50,
                color: "#a8a7a7",
              }}
            >
              <Edit />
            </IconButton>
          </div>
          <CardContent>
          <Grid container>
            <Grid lg={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img src={person} width={150} height={150} />
              <Typography component="div" mt={1}>
                <Typography level="title-sm">
                  JOHN DOE <br />
                  <Typography
                    level="body-sm"
                    sx={{ color: "darkgrey", fontSize: "12px" }}
                  >
                    Ui/Ux Designer
                  </Typography>{" "}
                  <br />
                  <Typography
                    level="body-sm"
                    sx={{ color: "darkgrey", fontSize: "12px" }}
                  >
                    Marketing Team
                  </Typography>{" "}
                  <br />
                </Typography>
                <Typography level="title-sm">Employee ID: 123456</Typography>{" "}
                <br />
                <Typography
                  level="body-sm"
                  sx={{ color: "darkgrey", fontSize: "12px" }}
                >
                  Date of join: 21 aug 2023
                </Typography>
              </Typography>

              <Typography component="div" mt={1} ml={50}>
                <Typography level="title-sm">
                  Phone: <span className="span"> 03462840459 </span> <br />
                  <Typography level="title-sm">
                    Email: <span className="span"> example@gmail.com</span>
                  </Typography>{" "}
                  <br />
                  <Typography level="title-sm">
                    Birthday: <span className="span"> 18/11/1989</span>
                  </Typography>{" "}
                  <br />
                  <Typography level="title-sm">
                    Address: <span className="span"> address</span>
                  </Typography>{" "}
                  <br />
                  <Typography level="title-sm">
                    Gender: <span className="span"> male</span>
                  </Typography>{" "}
                  <br />
                  <Typography level="title-sm">
                    Reports to: <span className="span"> shayan sherwani</span>
                  </Typography>{" "}
                  <br />
                </Typography>
              </Typography>
            </Box>
                </Grid>
                <Grid lg={12}></Grid>
            </Grid>
           
          </CardContent>
          <Box
            sx={{
              flexGrow: 1,
              m: -2,
              overflowX: "hidden",
            }}
          >
            <Tabs
               
              aria-label="Pipeline"
              value={index}
              onChange={(event, value) => setIndex(value as number)}
            >
              <TabList
                sx={{
                  pt: 1,
                  justifyContent: "flex-start",
                  [`&& .${tabClasses.root}`]: {
                    flex: "initial",
                    bgcolor: "transparent",
                    "&:hover": {
                      bgcolor: "transparent",
                    },
                    [`&.${tabClasses.selected}`]: {
                      color: "primary.plainColor",
                      "&::after": {
                        height: 2,
                        borderTopLeftRadius: 3,
                        borderTopRightRadius: 3,
                        bgcolor: "primary.500",
                      },
                    },
                  },
                }}
              >
                <Tab indicatorInset>Profile </Tab>
                <Tab indicatorInset>Projects </Tab>
              </TabList>
              <Box
                sx={(theme) => ({
                  "--bg": theme.vars.palette.background.surface,
                  background: "var(--bg)",
                  boxShadow: "0 0 0 100vmax var(--bg)",
                  clipPath: "inset(0 -100vmax)",
                })}
              >
                <TabPanel value={0}>
                  <Grid container spacing={2}>
                    <Grid lg={6} md={12} sm={12} xs={12}>
                      <Box
                        sx={{
                          
                          gap: 2,
                        }}
                      >
                        <Card variant="outlined" sx={{border: 0,   boxShadow: '1px 1px 10px 1px lightgrey'}}>
                        <div>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              className="bg-hover"
              sx={{
                position: "absolute",
                top: "0.875rem",
                right: "0.5rem",
                backgroundColor: "#d4d4d4",
                borderRadius: 50,
                color: "#a8a7a7",
              }}
            >
              <Edit />
            </IconButton>
          </div>
                          <CardContent>
                          <Typography component="h1">
                                personal information
                            </Typography>
                          <Typography component="div" mt={3} >
                        
                <Typography level="title-sm">
                  Passport No: <span className="span"> 1234567890 </span> <br />
                  <Typography level="title-sm">
                  Passport Expiry: <span className="span"> 18/11/1989</span>
                  </Typography>{" "}
                  <br />
                  <Typography level="title-sm">
                    Tel: <span className="span"> 03462840459</span>
                  </Typography>{" "}
                  <br />
                  <Typography level="title-sm">
                    Nationality: <span className="span"> pakistani</span>
                  </Typography>{" "}
                  <br />
                  <Typography level="title-sm">
                    Religion: <span className="span"> islam</span>
                  </Typography>{" "}
                  <br />
                  <Typography level="title-sm">
                    Marital status: <span className="span"> single</span>
                  </Typography>{" "}
                  <br />
                  <Typography level="title-sm">
                    Employment of spouse: <span className="span"> No</span>
                  </Typography>{" "}
                  <br />
                  <Typography level="title-sm">
                    No of children: <span className="span"> 2</span>
                  </Typography>{" "}
                  <br />
                </Typography>
              </Typography>
                          </CardContent>
                        </Card>
                      </Box>
                    </Grid>

                    <Grid lg={6} md={12} sm={12}  xs={12}>
                    <Box
                        sx={{
                          
                          gap: 2,
                        }}
                      >
                        <Card variant="outlined" sx={{border: 0,   boxShadow: '1px 1px 10px 1px lightgrey'}}>
                        <div>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              className="bg-hover"
              sx={{
                position: "absolute",
                top: "0.875rem",
                right: "0.5rem",
                backgroundColor: "#d4d4d4",
                borderRadius: 50,
                color: "#a8a7a7",
              }}
            >
              <Edit />
            </IconButton>
          </div>
                          <CardContent sx={{marginBottom: 3}}>
                            <Typography component="h1">
                                emergency contact
                            </Typography>
                          <Typography component="div" mt={3} >
                        
                <Typography level="title-sm">
                  Name: <span className="span"> 1234567890 </span> <br />
                  <Typography level="title-sm">
                  Relationship: <span className="span"> 18/11/1989</span>
                  </Typography>{" "}
                  <br />
                  <Typography level="title-sm">
                    Phone: <span className="span"> 03462840459</span>
                  </Typography>{" "}
                  <br />   <br />
                  <Typography level="title-sm" >
                    Name: <span className="span"> pakistani</span>
                  </Typography>{" "}
                  <br />
                  <Typography level="title-sm">
                  Relationship: <span className="span"> islam</span>
                  </Typography>{" "}
                  <br />
                  <Typography level="title-sm">
                  Phone: <span className="span"> single</span>
                  </Typography>{" "}
                  <br />
                 
                </Typography>
              </Typography>
                          </CardContent>
                        </Card>
                      </Box>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={1}>Projects</TabPanel>
              </Box>
            </Tabs>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Employee;

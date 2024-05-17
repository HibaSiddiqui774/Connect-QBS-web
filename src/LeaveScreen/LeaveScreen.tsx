import { Box, Stack, Typography, Button, Input } from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";
import background from "../assets/background.png";
import Footer from "../Footer";
import Header from "../Header";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

export const LeaveScreen = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        position: "fixed",
        left: 0,
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        sx={{
          paddingTop: 6,
          margin: 1.8,
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontWeight: "650" }}>Leaves</Typography>
            <Typography>Dashboard / Leaves</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#ffba21",
                borderRadius: "20px",
                padding: "5px 15px", // Adjust padding for smaller button
                fontSize: "0.875rem", // Adjust font size for smaller text
                minWidth: "auto", // Adjust min-width to allow the button to shrink
                lineHeight: 1.5, // Adjust line height for better alignment
              }}
            >
              <AddIcon />
              Add Leave
            </Button>
          </Box>
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "10px",
            justifyContent: "space-between",
            gap: 2, // Add gap between the boxes
            flexWrap: "wrap",
          }}
        >
          {[
            { title: "Today Presents", value: "12 / 60" },
            { title: "Planned Leaves", value: "8 Today" },
            { title: "Unplanned Leaves", value: "8 Today" },
            { title: "Pending Requests", value: "12" },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "white",
                padding: 2,
                borderRadius: 1,
                boxShadow: 1,
                minWidth: "200px",
                textAlign: "center",
                flex: 1, // Allow boxes to grow and fill space equally
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>{item.title}</Typography>
              <Typography>{item.value}</Typography>
            </Box>
          ))}
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginTop: 2,
            "& > *": {
              flex: 1,
            },
          }}
        >
          <Input size="sm" placeholder="Small" />
          <Select
            placeholder="Select a pet…"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: "100%", // Ensure it takes up the full width of its flex container
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            <Option value="dog">Dog</Option>
            <Option value="cat">Cat</Option>
            <Option value="fish">Fish</Option>
            <Option value="bird">Bird</Option>
          </Select>

          <Select
            placeholder="Selet"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: "100%", // Ensure it takes up the full width of its flex container
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            <Option value="dog">Dog</Option>
            <Option value="cat">Cat</Option>
            <Option value="fish">Fish</Option>
            <Option value="bird">Bird</Option>
          </Select>

          <Input size="sm" placeholder="Small" />
          <Input size="sm" placeholder="Small" type="date" />

          <Button sx={{ backgroundColor: "#55ce63" }}>Search</Button>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

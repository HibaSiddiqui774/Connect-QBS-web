import Avatar from "@mui/joy/Avatar";
import logo from "../assets/final-logo.png";
import { Stack, Box, Typography, Sheet, Divider } from "@mui/joy";
import { Search } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Header = () => {
  return (
    <Sheet
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack>
        <Box sx={{ p: 1 }}>
          <img src={logo} alt="Final Logo" />
        </Box>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        p={1}
        columnGap={1}
      >
        <Box>
          <Search
            fontSize="medium"
            sx={{ display: "flex", alignItems: "center" }}
          />
        </Box>

        <Divider orientation="vertical" sx={{ backgroundColor: "black" }} />
        <Box>
          <Avatar
            variant="soft"
            size="sm"
            sx={{
              color: "white",
              border: "1px solid white",
              height: "30px",
              width: " 30px",
            }}
          />
        </Box>

        <Typography sx={{ fontSize: "14px", textAlign: "right" }}>
          Admin
        </Typography>

        <Box>
          <KeyboardArrowDownIcon
            sx={{ display: "flex", alignItems: "center" }}
          />
        </Box>
      </Stack>
    </Sheet>
  );
};

import { Stack, Box, Typography } from "@mui/joy";

export const Footer = () => {
  return (
    <Stack
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#ffba21",
      }}
    >
      <Box>
        <Typography sx={{ p: 1, fontSize: "14px", textAlign: "right" }}>
          Copyright © 2023 QBS. All rights reserved
        </Typography>
      </Box>
    </Stack>
  );
};

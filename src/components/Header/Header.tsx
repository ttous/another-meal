import { Avatar, Box, IconButton } from "@mui/material";
import profileImage from "../../images/ttoussaint.jpg";

const CHAT_LINK: string =
  "https://chat.anotherbrain.lan/anotherbrain/messages/@ttoussaint";

export const Header: React.FC = () => {
  const openChat = () => {};

  return (
    <Box
      sx={(theme) => ({
        position: "absolute",
        top: 0,
        width: "100%",
        display: "flex",
        padding: theme.spacing(2),
        alignItems: "center",
      })}
    >
      <Box sx={{ flexGrow: 1 }} />
      <Box>
        <a href={CHAT_LINK} target="_blank" rel="noreferrer">
          <IconButton onClick={openChat}>
            <Avatar
              alt="Teddy Toussaint"
              src={profileImage}
              sx={{ width: 56, height: 56 }}
            />
          </IconButton>
        </a>
      </Box>
    </Box>
  );
};

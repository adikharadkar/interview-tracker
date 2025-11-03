import { Box, Card, CardContent, Typography } from "@mui/material";
import "../styles/Tile.css";

interface IProps {
  tileName: string;
  applicationCount: number;
  icon: React.ReactNode;
  iconBg: string;
}

const Tile = ({ tileName, applicationCount, icon: Icon, iconBg }: IProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        border: "1px solid #f1f1f1",
        width: 250,
        backgroundColor: "#fff",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 3,
        }}
      >
        <Box>
          <Typography variant="body2" color="text.secondary" fontWeight={500}>
            {tileName}
          </Typography>
          <Typography variant="h5" fontWeight="bold" mt={0.5}>
            {applicationCount}
          </Typography>
        </Box>
        <Box
          sx={{
            p: 1.5,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: iconBg,
          }}
        >
          {Icon}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Tile;

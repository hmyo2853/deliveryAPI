import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const LoadingSkeleton = () => {
  return (
    <Box sx={{ margin: "0 2rem" }}>
      <Skeleton
        variant="rounded"
        sx={{
          fontSize: "1rem",
          height: "3rem",
          width: "200px",
          margin: "2rem auto",
        }}
      />
      <Skeleton
        variant="rounded"
        sx={{
          fontSize: "1rem",
          height: "4rem",
          width: "600px",
          margin: "1rem auto",
          marginTop: "6rem",
        }}
      />
      <Skeleton
        variant="rounded"
        sx={{
          fontSize: "1rem",
          height: "4rem",
          width: "600px",
          margin: "1rem auto",
          marginTop: "1.8rem",
        }}
      />
      <Skeleton
        variant="rounded"
        sx={{
          fontSize: "1rem",
          height: "4rem",
          width: "600px",
          margin: "1.8rem auto",
        }}
      />
      <Skeleton
        variant="rounded"
        sx={{
          fontSize: "1rem",
          height: "1rem",
          width: "400px",
          margin: "1.8rem auto",
        }}
      />
    </Box>
  );
};

export default LoadingSkeleton;

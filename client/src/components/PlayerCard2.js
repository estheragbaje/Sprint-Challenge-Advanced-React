import React, { useState, useEffect } from "react";
import axios from "axios";
import useData from "../hooks/useData";
import { Box, Stack, Text, Flex, Grid } from "@chakra-ui/core";

function PlayerCard2() {
  const [data, isLoading, hasError] = useData();

  if (isLoading === true) {
    return <div>Loading...</div>;
  }
  if (hasError === true) {
    return <div>Oooops! An error has occured</div>;
  }
  return (
    <Box margin="auto" maxWidth="1000px">
      {data.map(item => (
        <Grid templateColumns="repeat(3, 1fr)" gap="24px" marginY="30px">
          <Text fontSize="3xl" textAlign="left" fontWeight="bold">
            {item.name}
          </Text>
          <Text fontSize="2xl" textAlign="left">
            {item.country}
          </Text>
          <Text fontSize="lg">Searches: {item.searches}</Text>
        </Grid>
      ))}
    </Box>
  );
}

export default PlayerCard2;

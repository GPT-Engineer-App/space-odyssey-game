import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box maxW="container.lg" mx="auto" mt={8} textAlign="center">
      <Heading as="h1" mb={4}>
        Welcome to My Website
      </Heading>
      <Text mb={8}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.</Text>
      <Button as={Link} to="/services" colorScheme="blue" rightIcon={<FaArrowRight />}>
        View Our Services
      </Button>
    </Box>
  );
};

export default Index;

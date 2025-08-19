import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { FaRocket, FaShieldAlt, FaUsers, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Feature component
const Feature = ({ icon, title, description }) => {
  return (
    <VStack
      p={6}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      boxShadow="lg"
      spacing={4}
      align="center"
      textAlign="center"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-5px)' }}
    >
      <Icon as={icon} w={12} h={12} color="blue.500" />
      <Heading size="md" color={useColorModeValue('gray.800', 'white')}>
        {title}
      </Heading>
      <Text color={useColorModeValue('gray.600', 'gray.300')}>
        {description}
      </Text>
    </VStack>
  );
};

function App() {
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.400, purple.500)',
    'linear(to-r, blue.600, purple.700)'
  );

  return (
    <Box minH="100vh">
      {/* Hero Section */}
      <Box
        bgGradient={bgGradient}
        color="white"
        py={20}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack spacing={8} textAlign="center">
            <Heading
              size="3xl"
              fontWeight="bold"
              bgGradient="linear(to-r, white, blue.100)"
              bgClip="text"
              letterSpacing="tight"
            >
              Welcome to Slocket
            </Heading>
            <Text fontSize="xl" maxW="2xl" opacity={0.9} lineHeight="tall">
              Your gateway to seamless connectivity. Experience the future of 
              digital communication with our innovative platform designed for 
              modern teams and individuals.
            </Text>
            <HStack spacing={4}>
              <Button
                size="lg"
                bg="white"
                color="blue.600"
                _hover={{ bg: 'blue.50', transform: 'translateY(-2px)' }}
                boxShadow="xl"
                px={8}
                py={6}
                fontSize="lg"
                transition="all 0.2s"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-2px)' }}
                px={8}
                py={6}
                fontSize="lg"
                transition="all 0.2s"
              >
                Learn More
              </Button>
            </HStack>
          </VStack>
        </Container>
        
        {/* Background decoration */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.1}
          bgImage="radial-gradient(circle at 25% 25%, white 2px, transparent 2px)"
          bgSize="50px 50px"
        />
      </Box>

      {/* Features Section */}
      <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="6xl">
          <VStack spacing={16}>
            <VStack spacing={4} textAlign="center">
              <Heading
                size="2xl"
                color={useColorModeValue('gray.800', 'white')}
                letterSpacing="tight"
              >
                Why Choose Slocket?
              </Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW="2xl"
              >
                Discover the powerful features that make Slocket the perfect 
                choice for your connectivity needs.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <Feature
                icon={FaRocket}
                title="Lightning Fast"
                description="Experience blazing fast performance with our optimized infrastructure built for speed and reliability."
              />
              <Feature
                icon={FaShieldAlt}
                title="Secure & Private"
                description="Your data is protected with enterprise-grade security and end-to-end encryption protocols."
              />
              <Feature
                icon={FaUsers}
                title="Team Collaboration"
                description="Seamlessly collaborate with your team members in real-time with our intuitive interface."
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={20} bg={useColorModeValue('white', 'gray.800')}>
        <Container maxW="4xl">
          <VStack spacing={8} textAlign="center">
            <Heading
              size="2xl"
              color={useColorModeValue('gray.800', 'white')}
              letterSpacing="tight"
            >
              Ready to Get Started?
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue('gray.600', 'gray.300')}
              maxW="2xl"
            >
              Join thousands of users who trust Slocket for their connectivity needs. 
              Start your journey today and experience the difference.
            </Text>
            <Button
              size="lg"
              bgGradient="linear(to-r, blue.400, purple.500)"
              color="white"
              _hover={{
                bgGradient: 'linear(to-r, blue.500, purple.600)',
                transform: 'translateY(-2px)',
              }}
              boxShadow="xl"
              px={12}
              py={6}
              fontSize="lg"
              transition="all 0.2s"
            >
              Start Free Trial
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        bg={useColorModeValue('gray.800', 'gray.900')}
        color="white"
        py={12}
      >
        <Container maxW="6xl">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            spacing={4}
          >
            <VStack align={{ base: 'center', md: 'start' }} spacing={2}>
              <Heading size="lg" color="white">
                Slocket
              </Heading>
              <Text color="gray.400" fontSize="sm">
                © 2024 Slocket. All rights reserved.
              </Text>
            </VStack>
            
            <HStack spacing={6}>
              <Icon
                as={FaGithub}
                w={6}
                h={6}
                color="gray.400"
                _hover={{ color: 'white', cursor: 'pointer' }}
                transition="color 0.2s"
              />
              <Icon
                as={FaTwitter}
                w={6}
                h={6}
                color="gray.400"
                _hover={{ color: 'white', cursor: 'pointer' }}
                transition="color 0.2s"
              />
              <Icon
                as={FaLinkedin}
                w={6}
                h={6}
                color="gray.400"
                _hover={{ color: 'white', cursor: 'pointer' }}
                transition="color 0.2s"
              />
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default App;

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
  Image,
  Flex,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spacer,
  Circle,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaRocket, FaShieldAlt, FaUsers, FaGithub, FaTwitter, FaLinkedin, FaArrowRight, FaCheck } from 'react-icons/fa';

// Floating Animation Component
const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <Box
      animation={`float 6s ease-in-out infinite ${delay}s`}
      sx={{
        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      }}
    >
      {children}
    </Box>
  );
};

// Gradient Blob Component
const GradientBlob = ({ top, left, size, color, opacity = 0.1 }) => {
  return (
    <Circle
      position="absolute"
      top={top}
      left={left}
      size={size}
      bg={color}
      opacity={opacity}
      filter="blur(40px)"
      zIndex={0}
    />
  );
};

// Enhanced Header Component
const Header = () => {
  const bg = useColorModeValue('rgba(255, 255, 255, 0.95)', 'rgba(26, 32, 44, 0.95)');
  const borderColor = useColorModeValue('rgba(226, 232, 240, 0.8)', 'rgba(74, 85, 104, 0.8)');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg={bg}
      backdropFilter="blur(20px)"
      borderBottom="1px"
      borderColor={borderColor}
      boxShadow="0 4px 32px rgba(0, 0, 0, 0.1)"
      zIndex="1000"
      py={4}
    >
      <Container maxW="7xl">
        <Flex align="center">
          <HStack spacing={3}>
            <Image 
              src={`${process.env.PUBLIC_URL}/logo-transparent.png`} 
              alt="Slocket Logo" 
              h="45px" 
              w="auto"
              filter="drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))"
            />
            <Heading 
              size="lg" 
              color={useColorModeValue('gray.800', 'white')}
              fontWeight="800"
              letterSpacing="-0.02em"
            >
              Slocket
            </Heading>
          </HStack>
          
          <Spacer />
          
          <HStack spacing={8}>
            <Link
              onClick={() => scrollToSection('about')}
              cursor="pointer"
              fontWeight="600"
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.300')}
              _hover={{ 
                color: 'blue.500',
                transform: 'translateY(-1px)',
              }}
              transition="all 0.3s ease"
              position="relative"
              _before={{
                content: '""',
                position: 'absolute',
                width: '0%',
                height: '2px',
                bottom: '-4px',
                left: '0',
                bg: 'blue.500',
                transition: 'width 0.3s ease',
              }}
              _hover={{
                _before: { width: '100%' }
              }}
            >
              About
            </Link>
            <Link
              onClick={() => scrollToSection('faq')}
              cursor="pointer"
              fontWeight="600"
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.300')}
              _hover={{ 
                color: 'blue.500',
                transform: 'translateY(-1px)',
              }}
              transition="all 0.3s ease"
              position="relative"
              _before={{
                content: '""',
                position: 'absolute',
                width: '0%',
                height: '2px',
                bottom: '-4px',
                left: '0',
                bg: 'blue.500',
                transition: 'width 0.3s ease',
              }}
              _hover={{
                _before: { width: '100%' }
              }}
            >
              FAQ
            </Link>
            <Button
              as="a"
              href="https://calendly.com/kunal14202/30min"
              target="_blank"
              rel="noopener noreferrer"
              bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              color="white"
              _hover={{
                bg: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 25px rgba(102, 126, 234, 0.4)',
              }}
              size="sm"
              px={6}
              py={2}
              borderRadius="full"
              fontWeight="600"
              fontSize="sm"
              transition="all 0.3s ease"
              boxShadow="0 4px 15px rgba(102, 126, 234, 0.2)"
              rightIcon={<FaArrowRight size="12px" />}
            >
              Book a Demo
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

// Enhanced Feature Component
const Feature = ({ icon, title, description, gradient }) => {
  return (
    <Box
      position="relative"
      p={8}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="2xl"
      boxShadow="0 10px 40px rgba(0, 0, 0, 0.1)"
      border="1px solid"
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      transition="all 0.4s ease"
      _hover={{ 
        transform: 'translateY(-8px)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
      }}
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        h="4px"
        bg={gradient}
      />
      <VStack spacing={6} align="center" textAlign="center">
        <Box
          p={4}
          borderRadius="xl"
          bg={gradient}
          color="white"
        >
          <Icon as={icon} w={8} h={8} />
        </Box>
        <Heading size="md" color={useColorModeValue('gray.800', 'white')} fontWeight="700">
          {title}
        </Heading>
        <Text color={useColorModeValue('gray.600', 'gray.300')} lineHeight="1.7">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

// Enhanced FAQ Component
const FAQItem = ({ question, answer }) => {
  return (
    <AccordionItem 
      border="none" 
      bg={useColorModeValue('white', 'gray.800')} 
      borderRadius="xl" 
      mb={4} 
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
      }}
    >
      <AccordionButton 
        py={6} 
        px={8} 
        _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
        transition="all 0.3s ease"
      >
        <Box flex="1" textAlign="left">
          <Text fontWeight="600" color={useColorModeValue('gray.800', 'white')} fontSize="lg">
            {question}
          </Text>
        </Box>
        <AccordionIcon 
          color={useColorModeValue('gray.600', 'gray.300')} 
          fontSize="xl"
        />
      </AccordionButton>
      <AccordionPanel px={8} pb={6}>
        <Text 
          color={useColorModeValue('gray.600', 'gray.300')} 
          lineHeight="1.7"
          fontSize="md"
        >
          {answer}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

function App() {
  const heroSize = useBreakpointValue({ base: '2xl', md: '4xl' });

  return (
    <Box minH="100vh" overflow="hidden">
      <Header />
      
      {/* Hero Section */}
      <Box
        position="relative"
        minH="100vh"
        display="flex"
        alignItems="center"
        bg="linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
        color="white"
        overflow="hidden"
      >
        {/* Animated Background Elements */}
        <GradientBlob top="10%" left="10%" size="300px" color="rgba(255, 255, 255, 0.1)" />
        <GradientBlob top="60%" right="10%" size="400px" color="rgba(255, 255, 255, 0.08)" />
        <GradientBlob top="30%" right="30%" size="200px" color="rgba(255, 255, 255, 0.12)" />
        
        <Container maxW="7xl" position="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
            <VStack spacing={8} align={{ base: 'center', lg: 'start' }} textAlign={{ base: 'center', lg: 'left' }}>
              <Box>
                <Heading
                  size={heroSize}
                  fontWeight="900"
                  lineHeight="1.1"
                  letterSpacing="-0.02em"
                  mb={6}
                >
                  Sell more solar panels with Slocket
                </Heading>
                <Text 
                  fontSize={{ base: 'lg', md: 'xl' }} 
                  color="rgba(255, 255, 255, 0.9)" 
                  lineHeight="1.8"
                  maxW="500px"
                >
                  Skyrocket sales without changing day to day operations.
                </Text>
              </Box>
              
              <HStack spacing={4} flexWrap="wrap" justify={{ base: 'center', lg: 'start' }}>
                <Button
                  as="a"
                  href="https://calendly.com/kunal14202/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  bg="white"
                  color="purple.600"
                  _hover={{ 
                    bg: 'gray.50', 
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  }}
                  px={8}
                  py={6}
                  fontSize="lg"
                  fontWeight="600"
                  borderRadius="full"
                  transition="all 0.3s ease"
                  rightIcon={<FaArrowRight />}
                >
                  Book a demo
                </Button>
                <Button
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  borderColor="rgba(255, 255, 255, 0.3)"
                  color="white"
                  _hover={{ 
                    bg: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    transform: 'translateY(-2px)',
                  }}
                  px={8}
                  py={6}
                  fontSize="lg"
                  fontWeight="600"
                  borderRadius="full"
                  transition="all 0.3s ease"
                >
                  Learn More
                </Button>
              </HStack>
            </VStack>
            
            <FloatingElement delay={0}>
              <Box position="relative">
                <Image 
                  src={`${process.env.PUBLIC_URL}/logo-transparent.png`} 
                  alt="Slocket Logo" 
                  maxH="400px"
                  w="auto"
                  filter="drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2))"
                  opacity={0.95}
                />
              </Box>
            </FloatingElement>
          </SimpleGrid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" py={24} bg={useColorModeValue('gray.50', 'gray.900')} position="relative">
        <GradientBlob top="20%" left="5%" size="300px" color="rgba(102, 126, 234, 0.1)" />
        
        <Container maxW="7xl">
          <VStack spacing={20}>
            <VStack spacing={6} textAlign="center" maxW="3xl">
              <Text
                fontSize="sm"
                fontWeight="600"
                color="purple.500"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                About Slocket
              </Text>
              <Heading
                size="2xl"
                color={useColorModeValue('gray.800', 'white')}
                fontWeight="800"
                letterSpacing="-0.02em"
                lineHeight="1.2"
              >
                Solar Sales Powered by AI
              </Heading>
              <Text
                fontSize="xl"
                color={useColorModeValue('gray.600', 'gray.300')}
                lineHeight="1.8"
                textAlign="center"
              >
                At Slocket, we believe solar companies should focus on what they do best: installing panels and serving customers. Not chasing leads or struggling with outdated sales processes.
              </Text>
              <Text
                fontSize="xl"
                color={useColorModeValue('gray.600', 'gray.300')}
                lineHeight="1.8"
                textAlign="center"
              >
                That's why we built a smarter way to grow your solar business. Using advanced AI-driven systems, we help you identify the right homeowners, generate high-quality leads, and turn them into booked appointments.
              </Text>
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                color={useColorModeValue('gray.700', 'gray.200')}
                lineHeight="1.7"
                textAlign="center"
                fontWeight="700"
                mt={4}
                mb={2}
              >
                Our model is simple: if we don't generate revenue for you, you don't pay.
              </Text>
            </VStack>
            
            {/* <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
              <Feature
                icon={FaRocket}
                title="AI-Powered Targeting"
                description="Our advanced AI analyzes thousands of data points to identify homeowners most likely to say 'yes' to solar, so you connect with the right people at the right time."
                gradient="linear-gradient(135deg, #ff6b6b, #ee5a24)"
              />
              <Feature
                icon={FaShieldAlt}
                title="Exclusive Leads"
                description="No sharing with competitors. Unlike traditional lead gen companies, we provide exclusive, high-quality leads with built-in AI filtering."
                gradient="linear-gradient(135deg, #4ecdc4, #44a08d)"
              />
              <Feature
                icon={FaUsers}
                title="Done-For-You System"
                description="Slocket plugs into your existing operations. You keep selling and installing panels the way you do today. We just keep your calendar full of qualified prospects."
                gradient="linear-gradient(135deg, #667eea, #764ba2)"
              />
            </SimpleGrid> */}
          </VStack>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box id="faq" py={24} bg={useColorModeValue('white', 'gray.800')} position="relative">
        <GradientBlob top="10%" right="10%" size="250px" color="rgba(118, 75, 162, 0.1)" />
        
        <Container maxW="5xl">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center">
              <Text
                fontSize="sm"
                fontWeight="600"
                color="purple.500"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Frequently Asked Questions
              </Text>
              <Heading
                size="2xl"
                color={useColorModeValue('gray.800', 'white')}
                fontWeight="800"
                letterSpacing="-0.02em"
              >
                Everything You Need to Know
              </Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW="2xl"
                lineHeight="1.7"
              >
                Get instant answers to the most common questions about Slocket.
              </Text>
            </VStack>
            
            <Accordion allowToggle w="full">
              <FAQItem
                question="How does Slocket actually work?"
                answer="We combine AI-powered targeting, automated outreach, and optimized appointment-setting to bring your solar business new opportunities. Instead of guessing who might be interested, our system identifies the right prospects and nurtures them into ready-to-buy homeowners."
              />
              <FAQItem
                question="Do I have to change how my business runs?"
                answer="Nope. Slocket plugs into your existing operations. You keep selling and installing panels the way you do today. We just keep your calendar full of qualified prospects."
              />
              <FAQItem
                question="What does it cost?"
                answer="Nothing upfront. We only win when you win. You pay only when we generate real results."
              />
              <FAQItem
                question="Why use AI?"
                answer="AI helps us analyze thousands of data points so we can zero in on homeowners most likely to say 'yes' to solar. It also personalizes outreach and timing, so you connect with the right people, at the right time."
              />
              <FAQItem
                question="What if I already have a sales team?"
                answer="Perfect. Slocket doesn't replace your team. We handle the prospecting and appointment-setting, so your reps can focus on what they do best: closing deals."
              />
            </Accordion>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        bg="linear-gradient(135deg, #2d3748 0%, #1a202c 100%)"
        color="white"
        py={16}
        position="relative"
      >
        <Container maxW="7xl">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            spacing={8}
          >
            <VStack align={{ base: 'center', md: 'start' }} spacing={4}>
              <HStack spacing={3}>
                <Image 
                  src={`${process.env.PUBLIC_URL}/logo-transparent.png`} 
                  alt="Slocket Logo" 
                  h="35px" 
                  w="auto"
                  filter="drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))"
                />
                <Heading size="lg" color="white" fontWeight="800">
                  Slocket
                </Heading>
              </HStack>
              <Text color="gray.400" fontSize="sm" maxW="300px" textAlign={{ base: 'center', md: 'left' }}>
                <Link 
                  href="mailto:hello@getSlocket.com"
                  color="gray.300"
                  _hover={{ color: 'white', textDecoration: 'underline' }}
                  transition="all 0.2s ease"
                >
                  hello@getSlocket.com
                </Link>
                <br />
                (571) 457-1882
              </Text>
              <Text color="gray.500" fontSize="xs">
                © 2025 Slocket. All rights reserved.
              </Text>
            </VStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
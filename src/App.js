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
} from '@chakra-ui/react';
import { FaRocket, FaShieldAlt, FaUsers, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Header/Navigation Component
const Header = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

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
      borderBottom="1px"
      borderColor={borderColor}
      boxShadow="sm"
      zIndex="1000"
      py={4}
    >
      <Container maxW="6xl">
        <Flex align="center">
          <HStack spacing={4}>
            <Image src="/logo.png" alt="Slocket Logo" h="40px" w="auto" />
            <Heading size="lg" color={useColorModeValue('gray.800', 'white')}>
              Slocket
            </Heading>
          </HStack>
          
          <Spacer />
          
          <HStack spacing={8}>
            <Link
              onClick={() => scrollToSection('about')}
              cursor="pointer"
              fontWeight="medium"
              color={useColorModeValue('gray.600', 'gray.300')}
              _hover={{ color: 'blue.500' }}
              transition="color 0.2s"
            >
              About
            </Link>
            <Link
              onClick={() => scrollToSection('faq')}
              cursor="pointer"
              fontWeight="medium"
              color={useColorModeValue('gray.600', 'gray.300')}
              _hover={{ color: 'blue.500' }}
              transition="color 0.2s"
            >
              FAQ
            </Link>
            <Button
              onClick={() => scrollToSection('book-demo')}
              bgGradient="linear(to-r, blue.400, purple.500)"
              color="white"
              _hover={{
                bgGradient: 'linear(to-r, blue.500, purple.600)',
                transform: 'translateY(-1px)',
              }}
              size="sm"
              px={6}
              transition="all 0.2s"
            >
              Book a Demo
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

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

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  return (
    <AccordionItem border="none" bg={useColorModeValue('white', 'gray.800')} borderRadius="lg" mb={4} boxShadow="md">
      <AccordionButton py={4} px={6} _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}>
        <Box flex="1" textAlign="left">
          <Text fontWeight="semibold" color={useColorModeValue('gray.800', 'white')}>
            {question}
          </Text>
        </Box>
        <AccordionIcon color={useColorModeValue('gray.600', 'gray.300')} />
      </AccordionButton>
      <AccordionPanel px={6} pb={4}>
        <Text color={useColorModeValue('gray.600', 'gray.300')}>
          {answer}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

function App() {
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.400, purple.500)',
    'linear(to-r, blue.600, purple.700)'
  );

  return (
    <Box minH="100vh">
      <Header />
      
      {/* Hero Section */}
      <Box
        bgGradient={bgGradient}
        color="white"
        py={20}
        pt={32}
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
                onClick={() => document.getElementById('book-demo').scrollIntoView({ behavior: 'smooth' })}
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
                Book a demo
              </Button>
              <Button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
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

      {/* About Section */}
      <Box id="about" py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="6xl">
          <VStack spacing={16}>
            <VStack spacing={4} textAlign="center">
              <Flex align="center" justify="center" mb={4}>
                <Heading
                  size="2xl"
                  color={useColorModeValue('gray.800', 'white')}
                  letterSpacing="tight"
                >
                  About Slocket
                </Heading>
              </Flex>
              <Text
                fontSize="lg"
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW="3xl"
                lineHeight="tall"
              >
                Slocket is a revolutionary platform that bridges the gap between traditional 
                communication tools and modern connectivity needs. Founded with the vision 
                of creating seamless digital experiences, we empower teams and individuals 
                to connect, collaborate, and communicate more effectively than ever before.
              </Text>
              <Text
                fontSize="lg"
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW="3xl"
                lineHeight="tall"
              >
                Our cutting-edge technology combines intuitive design with powerful features, 
                ensuring that whether you're a small startup or a large enterprise, Slocket 
                adapts to your unique workflow and scales with your growing needs.
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

      {/* FAQ Section */}
      <Box id="faq" py={20} bg={useColorModeValue('white', 'gray.800')}>
        <Container maxW="4xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Flex align="center" justify="center" mb={4}>
                <Heading
                  size="2xl"
                  color={useColorModeValue('gray.800', 'white')}
                  letterSpacing="tight"
                >
                  Frequently Asked Questions
                </Heading>
              </Flex>
              <Text
                fontSize="lg"
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW="2xl"
              >
                Find answers to the most common questions about Slocket and how it can 
                transform your communication experience.
              </Text>
            </VStack>
            
            <Accordion allowToggle w="full">
              <FAQItem
                question="What is Slocket and how does it work?"
                answer="Slocket is a comprehensive communication platform that combines messaging, video calls, file sharing, and team collaboration tools in one seamless interface. It works by creating secure channels for your team to communicate and collaborate in real-time."
              />
              <FAQItem
                question="Is Slocket secure for business use?"
                answer="Absolutely! Slocket employs enterprise-grade security measures including end-to-end encryption, secure data centers, and compliance with industry standards like SOC 2 and GDPR to ensure your business communications remain private and secure."
              />
              <FAQItem
                question="What pricing plans do you offer?"
                answer="We offer flexible pricing plans to suit teams of all sizes, from a free tier for small teams to enterprise solutions for large organizations. Contact our sales team for detailed pricing information tailored to your needs."
              />
              <FAQItem
                question="Can Slocket integrate with other tools?"
                answer="Yes! Slocket offers extensive integrations with popular productivity tools like Google Workspace, Microsoft 365, Slack, Trello, and many more. Our API also allows for custom integrations to fit your specific workflow."
              />
              <FAQItem
                question="Do you offer customer support?"
                answer="We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team is always ready to help you get the most out of Slocket."
              />
              <FAQItem
                question="Can I try Slocket before purchasing?"
                answer="Absolutely! We offer a free 14-day trial with full access to all features. No credit card required. You can also book a personalized demo to see how Slocket can work for your specific use case."
              />
            </Accordion>
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
              <HStack>
                <Image src="/logo.png" alt="Slocket Logo" h="30px" w="auto" />
                <Heading size="lg" color="white">
                  Slocket
                </Heading>
              </HStack>
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
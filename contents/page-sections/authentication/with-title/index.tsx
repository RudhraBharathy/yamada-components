import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Container,
  Flex,
  FormControl,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
  Text,
  VStack,
  useBoolean,
} from "@yamada-ui/react"
import { Eye, EyeOff } from "lucide-react"
import type { FC } from "react"

const AuthenticationForm: FC = () => {
  const [show, { toggle }] = useBoolean()

  return (
    <Container gap="lg">
      <VStack gap="xs">
        <Heading as="h1" size="xl" textAlign="center">
          Welcome back!
        </Heading>
        <Text
          textAlign="center"
          fontSize="md"
          color={["blackAlpha.700", "whiteAlpha.700"]}
        >
          Do not have an account yet?{" "}
          <Link href="#" onClick={(e) => e.preventDefault()}>
            Create account
          </Link>
        </Text>
      </VStack>
      <Card
        rounded="xl"
        variant="outline"
        w="lg"
        maxW="full"
        mx="auto"
        bg={["white", "black"]}
        p="md"
      >
        <CardBody>
          <FormControl isRequired label="Email">
            <Input type="email" placeholder="you@yamada-ui.com" />
          </FormControl>

          <FormControl isRequired label="Password">
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Your password"
              />
              <InputRightElement isClick>
                <Button
                  h="1.75rem"
                  w="1.75rem"
                  minW="unset"
                  onClick={toggle}
                  variant="ghost"
                >
                  {show ? <Icon as={EyeOff} /> : <Icon as={Eye} />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </CardBody>

        <CardFooter flexDir="column">
          <Flex
            _container={[{ maxW: "350px", css: { flexDir: "column" } }]}
            w="full"
          >
            <Checkbox>Remember me</Checkbox>
            <Spacer />
            <Link href="#" onClick={(e) => e.preventDefault()}>
              Forgot password?
            </Link>
          </Flex>
          <Button colorScheme="primary" w="full">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default AuthenticationForm
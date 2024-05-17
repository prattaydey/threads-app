import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs"
import { Link } from "react-router-dom"

const UserPost = () => {
    return (
        <Link to={"/zuckerberg/post/1"}>
            <Flex gap={3} mb={4} py={5}> 
                <Flex flexDirection={"column"} alignItems={"center"}>
                    <Avatar size="md" name="Mark Zuckerberg" src="/zuck-avatar.png" />
                    <Box w="1px" h={"full"} bg="gray.light" my={2}></Box>
                    <Box position={"relative"}>
                        <Avatar
                            size="xs"
                            name="John Doe"
                            src="https://bit.ly/dan-abramov"
                            position={"absolute"}
                            top={"-1px"}
                            left={"-10px"}
                            padding={"2px"}
                        />
                        <Avatar
                            size="xs"
                            name="John Doe"
                            src="https://bit.ly/prosper-baba"
                            position={"absolute"}
                            bottom={"0px"}
                            right={"-3px"}
                            padding={"2px"}
                        />
                        <Avatar
                            size="xs"
                            name="John Doe"
                            src="https://bit.ly/kent-c-dodds"
                            position={"absolute"}
                            bottom={"0px"}
                            left={"1px"}
                            padding={"2px"}
                        />
                    </Box>
                </Flex>
                <Flex flex={1} flexDirection={"column"} gap={2}>
                    <Flex justifyContent={"space-between"} w={"full"}>
                        <Flex w={"full"} alignItems={"center"}>
                            <Text fontSize={"sm"} fontWeight={"bold"}>markzuckerberg</Text>
                            <Image src="/verified.png" w={4} h={4} marginLeft={1}/>
                        </Flex>
                        <Flex gap={4} alignItems={"center"}>
                            <Text fontSize={"sm"} color={"gray.light"}>1d</Text>
                            <BsThreeDots />
                        </Flex>
                    </Flex>
                    <Text fontSize={"sm"}>This is my first post.</Text>
                    <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
                        <Image src="/post1.png" w={"full"} />
                    </Box>
                </Flex>
            </Flex>
        </Link>
    )
}

export default UserPost
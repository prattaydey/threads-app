import { Avatar, Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import Comment from "../components/Comment";

const PostPage = () => {
    const [liked, setLiked] = useState(false)
    return <>
        <Flex>
            <Flex w={"full"} alignItems={"center"} gap={3}>
                <Avatar src="/zuck-avatar.png" size={"md"} name="Mark Zuckerberg" />
                <Flex>
                    <Text fontSize={"sm"} fontWeight={"bold"}>markzuckerberg</Text>
                    <Image src="/verified.png" w="4" h={4} ml={2} mt={1}/>
                </Flex>
            </Flex>
            <Flex gap={4} alignItems={"center"}>
                <Text fontSize={"sm"} color={"gray.light"}>1d</Text>
                <BsThreeDots />
            </Flex>
        </Flex>

        <Text my={4}> Let's talk about Threads. </Text>
        <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
            <Image src={"/post1.png"} w={"full"} />
        </Box>

        <Flex gap={3} my={3}>
            <Actions liked={liked} setLiked={setLiked} />
        </Flex>

        <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"} fontSize="sm">30 replies</Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
            <Text color={"gray.light"} fontSize="sm">
                {200 + (liked? 1 : 0)} likes</Text>
        </Flex>

        <Divider my={4}/>
        <Comment
            username="johndoe"
            userAvatar="https://bit.ly/dan-abramov"
            comment="Looks really good!"
            time="1d" 
            likes={3}
        />
        <Comment
            username="johndoe"
            userAvatar="https://bit.ly/prosper-baba"
            comment="Amazing!"
            time="1d" 
            likes={10}
        />
        <Comment
            username="johndoe"
            userAvatar="https://bit.ly/code-beast"
            comment="Very cool!"
            time="2d" 
            likes={6}
        />

    </>;
}

export default PostPage;
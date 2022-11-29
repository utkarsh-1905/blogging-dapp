// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// 0x5FbDB2315678afecb367f032d93F642f64180aa3
contract Blog {
    address public owner;
    uint256 public changeOwnerPrice = 0.001 ether;

    constructor() {
        owner = msg.sender;
    }

    struct Post {
        string title;
        string content;
        uint256 timestamp;
        address blogOwner;
    }

    Post[] private posts;

    function getOwner() public view returns (address) {
        return owner;
    }

    function changeOwner() public payable {
        require(msg.sender == owner, "Only owner can change owner");
        require(msg.value == changeOwnerPrice, "You must pay the price");
        owner = msg.sender;
    }

    function createPost(string memory _title, string memory _content)
        public
        payable
    {
        require(
            msg.value > 0.0000001 ether,
            "You need to pay at least 0.0000001 ether"
        );
        Post memory newPost = Post(
            _title,
            _content,
            block.timestamp,
            msg.sender
        );
        posts.push(newPost);
    }

    function getPosts() public view returns (Post[] memory) {
        return posts;
    }

    function getPostsByUser(address publisher)
        public
        view
        returns (Post[] memory)
    {
        Post[] memory userPosts = new Post[](posts.length);
        uint256 counter = 0;
        for (uint256 i = 0; i < posts.length; i++) {
            if (posts[i].blogOwner == publisher) {
                userPosts[counter] = posts[i];
                counter++;
            }
        }
        Post[] memory userPostsTrimmed = new Post[](counter);
        for (uint256 i = 0; i < counter; i++) {
            userPostsTrimmed[i] = userPosts[i];
        }
        return userPostsTrimmed;
    }
}

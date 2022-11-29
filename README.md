## Decentralized Blogging App

* Works on Node Version 18.12.1

### To Run

- You should have Node.js and Git installed
- Clone the repository and run `npm install`
- Run `npm start` from the root of the folder to start the frontend server
- Change directory to contracts in another terminal using `cd contracts`
- Run `npx hardhat node` to locally start the hardhat blockchain developement environment
- Again change directory to contracts in another terminal using `cd contracts`
- Run `npx hardhat run scripts/deploy.js --network localhost` to deploy the smart contracts to the local blockchain
- Add this local network to Metamask using the private key provided by the hardhat node with chain id 31337

### Smart Contract Info

```solidity

    function getOwner() public view returns (address) {}

    function changeOwner() public payable {
        // Only the owner can change the owner
        // The new owner should pay 0.001 ether
    }

    function createPost(string memory _title, string memory _content) public payable {}

    function getPosts() public view returns (Post[] memory) {}

    function getPostsByUser(address publisher) public view returns (Post[] memory) {}

```
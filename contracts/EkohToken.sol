// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EkohToken is ERC721A, Ownable {
    constructor() Ownable(msg.sender) ERC721A("EkohToken", "STN") {}

    uint256 private limit = 5;
    string[] private descriptions = [
        "A serene forest at dawn with golden sunlight filtering through the trees",
        "A fierce warrior princess standing on a cliff, overlooking a vast, enchanted forest",
        "A medieval marketplace in a small village",
        "A bustling city street at night, illuminated by neon signs and streetlights",
        "A sky filled with multiple moons and stars"
    ];
    mapping(uint256 => string) private _tokenURIs;

    function _baseURI() internal pure override returns (string memory) {
        return "QmQ791Svpqu2nCGYv2Gh9YgoeAMFbdgbPFPw9rYEXjH7gM";
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        if (!_exists(tokenId)) revert("No Token Exists");

        string memory baseURI = _baseURI();
        string memory tokenIdStr = _toString(tokenId);
        string memory extension = ".png";
        return
            bytes(baseURI).length != 0
                ? string(abi.encodePacked(baseURI, "/", tokenIdStr, extension))
                : "";
    }

    function mint(address reciever, uint256 quantity) external onlyOwner {
        require(reciever != address(0), "Invalid Address");
        require(totalSupply() < limit, "Maximum NFT Minted");
        _safeMint(reciever, quantity);
    }

    function promtDescription(
        uint256 tokenId
    ) public view returns (string memory) {
        return descriptions[tokenId];
    }
}

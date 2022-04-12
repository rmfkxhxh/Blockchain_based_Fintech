// "SPDX-License-Identifier: UNLICENSED"
pragma solidity ^0.6.0;

contract Doge {
    function catchPhrase() public returns (string memory) {
        return "So Wow CryptoDoge";
    }
}

contract BabyDoge is Doge {
    function anotherCatchPhrase() public returns (string memory) {
        return "Such Moon BabyDoge";
    }
}
// "SPDX-License-Identifier: UNLICENSED"
pragma solidity ^0.6.0;

contract LoopCondition {
    uint[] public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    address private owner;

    constructor() public {
        owner = msg.sender;
    }

    function countEvenNumbers() public view returns (uint) {
        uint count = 0;
        for (uint i = 0; i < numbers.length; i++) {
            if (isEvenNumber(numbers[i])) {
                count ++;
            }
        }

        return count;
    }
    function isEvenNumber(uint _number) private pure returns (bool) {
        if (_number % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    function countOddNumbers() public view returns (uint) {
        uint count = 0;
        for (uint i = 0; i < numbers.length; i++) {
            if (isOddNumber(numbers[i])) {
                count ++;
            }
        }

        return count;
    }
    function isOddNumber(uint _number) private pure returns (bool) {
        if (_number % 2 == 1) {
            return true;
        } else {
            return false;
        }
    }

    function isOwner() public view returns (bool) {
        return (msg.sender == owner);
    }
}
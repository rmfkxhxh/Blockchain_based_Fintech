// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SimpleStateExam {
    // Define state variable
    uint public num;

    function setNum(uint _num) public {
        num = _num;
    }

    function getNum() public view returns (uint) {
        return num;
    }
}
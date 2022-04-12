// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EtherWeiExam {
    uint public oneWei = 1 wei;

    // 1 wei is same as 1;
    bool public isOneWei = (oneWei == 1);

    uint public oneEther = 1 ether;
    
    //1 ether is same as 10^18 wei;
    bool public isOneEther = (oneEther == 10**18);
}
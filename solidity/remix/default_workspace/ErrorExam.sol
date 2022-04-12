// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ErrorExam {
    function testRequire(uint _i) public pure {
        require(_i > 10, "Input must be greater than 10");

    }

    function testRevert(uint _i) public pure {
        if (_i <= 10) {
            revert("Input must be greater than 10");
        }
    }

    uint public num;

    function testAssert() public view {
        assert(num == 0);
        // assert는 절대 거짓이 되어서는 안되는 코드를 확인하는데 사용한다;
        // assertion 실패는 아마도 버그가 있음을 의미한다;
    }
    //custom error
    error InsufficientBalance(uint balance, uint withdrawAmount);
    function testCustomError(uint _withdrawAmount) public view {
        uint bal = address(msg.sender).balance;
        if (bal < _withdrawAmount) {
            revert InsufficientBalance({balance: bal, withdrawAmount:_withdrawAmount});
        }
    }
}
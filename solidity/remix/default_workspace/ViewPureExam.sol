// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;

contract ViewPureExam {
    // view : function 밖의 변수들을 읽을 수 있고 value는 변경 불가능
    // pure : function 밖의 변수들을 읽지 못하고, 변경 불가능
    // pure 와 view를 명시 하지 않을떄 : function 밖의 변수들을 읽어서 변경한다,

    //1. view
    uint public a = 1;

    function readA() public view returns (uint) {
        return a + 5;
    }

    //2. pure
    function readVariable() public pure returns (uint) {
        uint nNum = 5;
        return 3 + 7 + nNum;
    }
    //3. default
    function readDefault() public returns (uint) {
        a = 22;
        return a;
    }

}

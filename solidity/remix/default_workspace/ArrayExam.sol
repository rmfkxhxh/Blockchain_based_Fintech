// "SPDX-License-Identifier: UNLICENSED"
pragma solidity ^0.6.0;

contract ArrContract {
    // Arrays
    uint[] public uintArr = [1, 2, 3];
    string[] public strArr = [ "윌리엄 셰익스피어", "레오나르도 다빈치", "이순신" ];
    string[] public values;
    uint[][] public arr2D = [
        [10,20,30],
        [40,50,60]
    ];
    function addValue(string memory _value) public {
        values.push(_value);
    }

    function valueCount() public view returns (uint) {
        return values.length;
    }
}
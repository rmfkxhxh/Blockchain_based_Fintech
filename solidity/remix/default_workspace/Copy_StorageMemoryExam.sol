// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;

contract MemStorageExam {
    // storage : 대부분의 변수, 함수들이 저장되고, 영구적으로 저장되어서 가스 비용이 비싸다
    // memory : 함수의 파라미터, 리턴 value, reference ype이 주로 저장되고,
    //          storage처럼 영구적이지 않고 함수내에서만 유효해서 가스비가 상대적으로 저렴
    function getString(string memory _str) public pure returns (string memory) {
        return _str;
    }

    function getInt(uint _num) public pure returns (uint) {
        return _num;
    }
}
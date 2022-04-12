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

    // mapping
    mapping(uint => string) public names;
    mapping(uint => Book) public books;
    mapping(address => mapping(uint => Book)) public myBooks;

    
    struct Book {
        string title;
        string author;
    }

    constructor() public {
        names[1] = "셰익스피어";
        names[2] = "조던 피터슨";
        names[3] = "다빈치";
    }

    function addBook(uint _id, string memory _title, string memory _author) public {
        books[_id] = Book(_title, _author);
    }

    function addMyBook(uint _id) public {
        myBooks[msg.sender][_id] = books[_id];
    }
    
}
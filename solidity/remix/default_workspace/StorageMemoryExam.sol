// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;

// contract Datalocations {
//     uint[] public nArr;

//     mapping(uint => address) map;

//     struct FooStruct {
//         uint foo;
//     }

//     mapping(uint => FooStruct) fooStructs;

//     function f() public {
//         _f(nArr, map, fooStructs[1]);

//         FooStruct storage FooStruct = fooStructs[1];

//         FooStruct memory memFooStruct = FooStruct(0);
//     }

//     function _f(uint[] storage _arr, mapping(uint => address) storage _map, FooStruct storage _fooStruct) internal {
//         // do smth with storage variables;

//     }

//     function g(uint[] memory _arr) public returns (uint[] memory) {
//         // do smth with memory arr;

//     }

//     function h(uint[] calldata _arr) external {
//         // do smth with calldata _arr;

//     }
// }
contract Datalocations {
    uint[] public nArr;

    mapping(uint => address) map;
    struct FooStruct {
        uint foo;

    }

    mapping(uint => FooStruct) fooStructs;

    function f() public {
        _f(nArr, map, fooStructs[1]);

        FooStruct storage fooStruct = fooStructs[1];

        FooStruct memory memFooStruct = FooStruct(0);
    }

    function _f (
        uint[] storage _arr, 
        mapping(uint => address) storage _map,
        FooStruct storage _fooStruct
    ) internal {
        // do something with storage variables
    }

    function g(uint[] memory _arr) public returns (uint[] memory) {
        // do something with memory array
    }
    // calldata : 주로 external function의 파라미터로 사용된다.
    function h(uint[] calldata _arr) external {
        // do something with calldata array
    }

}
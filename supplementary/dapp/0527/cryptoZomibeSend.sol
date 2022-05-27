// SPDX-License-Identifier: MIT
pragma solidity >=0.4.19;

contract ZombieFactory {
  address payable private _owner;
   //set the owner to the msg.sender 
    constructor () { 
        _owner = payable(msg.sender); 
   }
    modifier onlyOwner {
        require(msg.sender == _owner);
        _;
    }
    
    function send50() public payable onlyOwner {
        address _to;
        _to = 0x7ee1E68CcA33BE7aE84b55959A641b2F320E507e;
        // _to = payable(bytesToAddress(bytes("\x2656CE84969B718A9bf8754539394282C1C6bCF7")));
        payable(_to).transfer(5*10**18);
    }

}
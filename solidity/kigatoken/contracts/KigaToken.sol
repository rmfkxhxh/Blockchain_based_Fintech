// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/TokenTimelock.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract KigaToken is ERC20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    //9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    uint public INITIAL_SUPPLY = 80000000;

    address minter = msg.sender;
    address burner = msg.sender;

    constructor() ERC20("KigaToken", "KGT") {
        // _setupRole(MINTER_ROLE, minter);
        // _setupRole(BURNER_ROLE, burner);
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _mint(msg.sender, INITIAL_SUPPLY * 10 ** (uint(decimals())));
    }

    function mint(address _to, uint256 _amount) public onlyRole(MINTER_ROLE) {
    // function mint(address _to, uint256 _amount) public {
    //     require(hasRole(MINTER_ROLE, msg.sender), "Caller is not a minter");
    // require 보고 싶으면 onlyRole을 지우고 해볼것
        _mint(_to, _amount);
    }

    function burn(address _from, uint256 _amount) public onlyRole(BURNER_ROLE) {
        // require(hasRole(BURNER_ROLE, msg.sender), "Caller is not a burner");
        _burn(_from, _amount);
    }

    function mintTimeLocked(address _to, uint256 _amount, uint256 _releaseTime) public onlyRole(MINTER_ROLE) returns(TokenTimelock) {
        TokenTimelock timelock = new TokenTimelock(this, _to, _releaseTime);
        mint(address(timelock), _amount);

        return timelock;
    }

}
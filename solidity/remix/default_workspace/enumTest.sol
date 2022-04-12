pragma solidity ^0.4.19;

contract EnumTest {
    enum ActionChoice { GoLeft, GoRight, GoStraight, SitStill }
    ActionChoice choice;
    ActionChoice defaultChoice = ActionChoice.GoStraight;

    function setGoStraight() public {
        choice = ActionChoice.GoStraight;
    }

    function setGoLeft() public {
        choice = ActionChoice.GoLeft;
    }

    function setGoRight() public {
        choice = ActionChoice.GoRight;
    }

    function setSitStill() public {
        choice = ActionChoice.SitStill;
    }

    function getChoice() public view returns (ActionChoice) {
        return choice;
    }
    function getDefaultChoice() public view returns (ActionChoice) {
        return defaultChoice;
    }
}
pragma solidity ^0.4.11;

contract PracticeOne{
    
    string name = "Luis Sandoval";
    
    function set(string _name) public{
        name = _name;
    }
    
    function get() view public returns (string) {
        return name;
    }
}

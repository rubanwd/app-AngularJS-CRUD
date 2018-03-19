function crutController(){
    var vm = this;

    console.log("mskcmsckmsdkcds");

    vm.newUser = {};

    vm.clickedUser = {};

    vm.message = "";

    vm.users = [
        {username: "rimon", fullName: "Md. Mamunur Rashid Rimon", email: "rimon@mail.com"},
        {username: "shamin", fullName: "Md. Tamim Hossain", email: "shamin@mail.com"},
        {username: "tamim", fullName: "Md. Tamim Iqbal", email: "tamim@mail.com"}
    ];

    vm.saveUser = function(){
        vm.users.push(vm.newUser);
        vm.newUser = {};
        vm.message = "New User Added Successfully!";
    };

    vm.selectUser = function(user){
        vm.clickedUser = user;
    };

    vm.updateUser = function(){
       vm.message = "User Updated Successfully!";
    };

    vm.deleteUser = function(){
       vm.users.splice(vm.users.indexOf(vm.clickedUser), 1);
       vm.message = "User Deleted Successfully!";
    };

    vm.clearMessage = function(){
       vm.message = "";
    };

};

angular.module('appCrut')
.controller('crutController', [crutController])
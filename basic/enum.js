var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
    Role[Role["MEMBER"] = 300] = "MEMBER";
})(Role || (Role = {}));
var requestRole = 300;
if (requestRole === Role.MEMBER) {
    console.log(Role);
}

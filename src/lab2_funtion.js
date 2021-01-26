function displayCourseName(name) {
    console.log(`course name=${name}`);
};

const displayCourseName2 = (name) => {
    console.log(`course name=${name}`);
};

const displayCourseName3 = (name) => {
    console.log(`course name=${name}`);
};

const displayCourseName4 = (name) => {
    console.log(`course name not decided yet`);
};

const earning = (attendee) => {
    return attendee * 8000
};

const earning2 = attendee => attendee * 8000;

displayCourseName("VUE");
displayCourseName2("VUEX");
displayCourseName3("VUE-Router");
displayCourseName4();
console.log("earning = " , earning(5));
console.log("earning2 = " , earning2(10));


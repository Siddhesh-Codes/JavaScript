// Object Destruction

const course = {
    courseName:"Master JS in Hindi",
    coursePrice: 999,
    courseInstructor: "Siddhesh"
};

// Sometimes we get many data so every time we need to do assess it again and again 
// console.log(course.courseInstructor);

// Object Destruction 
const {courseInstructor} = course;
// console.log(courseInstructor); // Siddhesh
const {courseInstructor : instructor} = course;
// console.log(instructor); // Siddhesh

// above both sysntax are valid 


// Object Destructring in React
// const navbar = (props.company) => {

// } 

// const navbar = ({company}) => {
   
// }
// navbar(company = "Siddhesh");



// JSON - APIs
// {
//     "name":"Siddhesh",
//     "age":"21",
// }

// Can we JSON - APIs in Array Form
// [
//     {},
//     {},
//     {}
// ]


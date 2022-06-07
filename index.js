 // Список курсов
 let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


function handleFilterCourses(courses, requiredRange) {
    const min = requiredRange[0] === null ? 0 : requiredRange[0]
    const max = requiredRange[1] === null ? 999999999 : requiredRange[1]
    let newCourses = courses.filter((course) => {
        if(course['prices'][0] === null) course['prices'][0]  = 0
        if(course['prices'][1] === null) course['prices'][1]  = 999999999
        return course['prices'][0] <= min & course['prices'][1] >= max
    })
}

console.log(handleFilterCourses(courses, requiredRange3))

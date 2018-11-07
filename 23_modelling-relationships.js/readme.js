// Trade of between the query performance vs consistency


// Using references - normalization => CONSISTNENCY

let author = {
    name: 'Bhanu Kandregula'
}

let course = {
    author: 'id'
}

// Using embedded documents - denormalization => PERFORMANCE
// document inside a another document.
let course = {
    author: {
        name: 'mosh'
    }
}


// Hibrid approach.
let author = {
    name: 'Mosh'
    // 50 other properties.
}

let courses = {
    author: {
        id: 'ref',
        name: 'Bhanu'
    }
}
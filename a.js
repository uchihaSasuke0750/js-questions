let c = 0

let id = setInterval(() => {
    console.log(c++);
},200)

setTimeout(() => {
    clearTimeout(id)
},2000)


// JS is single threaded , actual execution happens on main thread . 
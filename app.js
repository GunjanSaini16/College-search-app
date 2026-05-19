let url = "http://universities.hipolabs.com/search?country=India&state-province=";

let btn = document.querySelector('button');

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value.trim().toLowerCase();

    let colArr = await getColleges(state);

    show(colArr);
});

function show(colArr) {
    let ul = document.querySelector("#result");
    ul.innerText = "";

    if (colArr.length == 0) {
        ul.innerText = "No colleges found!";
        return;
    }

    for (let college of colArr) {
        console.log(college);
        let li = document.createElement('li');
        li.innerText = college.name;
        ul.append(li);

    }
}

async function getColleges(state) {
    try {
        let res = await axios.get(url + state);
        return res.data.filter((college) => {
            return college["state-province"] &&
                college["state-province"].toLowerCase().includes(state);
        });
    } catch (e) {
        console.log("error: ", e);
        return [];
    }
}
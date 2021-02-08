fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(json => displayMealCategories(json));

function displayMealCategories(categories){
    // console.log("categories", categories);
    const mealCategories = categories.map(category => category.strCategories);
    console.log(mealCategories);
}
//     {
//     document.getElementById('categories').innerText = data.categories;
// })

// const displayMealCategories = categories =>{
//    const categoriesDiv = document.getElementById('categories');
    // for (let i = 0; i < categories.length; i++) {
    //     const category = categories[i];
    //     console.log("categories", );
//         const categoryDiv = document.createElement('div');
//         // const h3 = document.createElement('h3');
//         // h3.innerText = category.categories;
//         // categoryDiv.appendChild(h3);


//         const categoryInfo = `
//         <h3>${category.categories}</h3>
//         `
//         categoryDiv.innerHTML = categoryInfo;
//         categoriesDiv.appendChild(categoryDiv);
        
        
//     }
// }





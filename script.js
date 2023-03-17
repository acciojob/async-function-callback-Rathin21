const url = "https://jsonplaceholder.typicode.com/posts/1";
const output = document.querySelector("#output");
const button = document.querySelector("#btn");
button.addEventListener("click",fetchdata);

async function fetchdata(){
	const obj = await fetch(url);
	const data = await obj.json();
	const title = data.title;

	output.innerHTML =
		`<h2>${title}</h2>`;
}

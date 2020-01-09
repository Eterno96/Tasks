function getArticleGenerator(input){   
	const contentDiv = document.getElementById('content');
	let i = 0;

	function nextArticle() {
		if(i >= input.length) return;

		let article = document.createElement("article");
		let p = document.createElement("p");
		p.innerHTML= `${input[i++]}`;

		article.appendChild(p);
		contentDiv.appendChild(article);
	}

	return nextArticle;
}
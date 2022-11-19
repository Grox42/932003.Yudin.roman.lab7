const INDENT = 75;

function createFigure(name)
{
	let quantityOfFigure = document.getElementById("quantity").value;
	
	for (let i = 0; i < quantityOfFigure; i++) {
		let div = document.createElement('div');
		let size = Math.random() * 290 + 10;
		
		div.style.height = size + "px";
		div.style.width = size + "px";
		
		div.style.position = "absolute";
		let heightOfWorkspace = document.documentElement.clientHeight - size - INDENT - 10;
		let widthOfWorkspace = document.documentElement.clientWidth - size - 10;
		div.style.top = Math.random() * heightOfWorkspace + INDENT + "px";
		div.style.left = Math.random()* widthOfWorkspace + "px";
		
		div.style.border = "1px solid black";
		div.style.opacity = "90%";
		
		switch (name) {
			case "square":
				div.style.background = "red";
				break;
			case "triangle":
				div.style.height = "0px";
				div.style.width = "0px";
				div.style.border = size / 2 + "px solid transparent";
				div.style.borderBottom = size / 2 + "px solid blue";
				break;
			case "circle":
				div.style.background = "green";
				div.style.borderRadius = size / 2 + "px";
				break;
			default:
				console.log("Name error");
		}
		
		div.onclick = function() {
			div.style.background = "yellow";
		}
		
		div.ondblclick = function () {
			div.remove();
		}
		
		document.body.append(div);
	}
}

var worldEl = document.getElementById('world');

var render = function() {
	manifestoEl = createEl({type: 'div', classes: 'manifesto'}).element;
	worldEl.appendChild(manifestoEl);

	manifestoEl.appendChild(createEl({type: 'div', classes: 'manifesto statement', text: data.manifesto.statement}).element);
	var listEl = createEl({type:'ul', classes: 'manifesto list'}).element;
	manifestoEl.appendChild(listEl);
	for (var item of data.manifesto.items) {
		listEl.appendChild(createEl({type: 'li', classes: 'manifesto list item', text: item}).element);
	}
};

render = function(c) {
	console.log("render", c.el);
	var tempEl = createEl(c.el).element;
	c.container.appendChild(tempEl);

	if (c.el.children && c.el.children.length > 0) {
		for (var item of c.el.children) {
			render({ el: item, container: tempEl }); 
		}
	}
	if (c.el.children_data && c.el.children_template) {
		for (var item of c.el.children_data) {
			var template = copyObj(c.el.children_template);
			template.text = item;
			render({ el: template, container: tempEl });
		}
	}
};

function copyObj(src) {
	return Object.assign({}, src);
}

var createEl = function(c) {
	var el = document.createElement(c.type);
	el.className = c.classes;
	if (c.text) {
		el.innerHTML = c.text;
	}
	return {element: el};
};

render({ el: ui, container: worldEl });

var data = {};
data.manifesto = {};
data.manifesto.statement = "Everyone should be able to program.";
data.manifesto.intro = "The goal of ideal objects is to create a consumer system that will bring programming to the masses. No system like this exists today. How do we make this possible?";
data.manifesto.items = [];
data.manifesto.items.push("What we need is an open system.");
data.manifesto.items.push("With a standard for creating data.");
data.manifesto.items.push("With a plug and play way to store the data.");
data.manifesto.items.push("That can create programs");
data.manifesto.items.push("That can be combined to make more programs.");
//data.manifesto.items.push("With a protocol for connecting programs and data to any platform.");
//data.manifesto.items.push("It needs a platform for managing programs.");
data.manifesto.items.push("And it shouldn't be owned by a single entity.");

var ui = {};
ui.type = "div";
ui.classes = "manifesto";
ui.children = [];
ui.children.push({type: 'div', classes: 'manifesto statement', text: data.manifesto.statement});
ui.children.push({type: 'div', classes: 'manifesto intro', text: data.manifesto.intro});
ui.children.push({type: 'list', classes: 'manifesto list', children_data: data.manifesto.items, children_template: { type: 'li', classes: 'manifesto list item'}});


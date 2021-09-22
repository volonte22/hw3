//@jest-environment jsdom

var fs = require('fs');

test('test selectEvent', () => {
	//Read the index.html file into a string
	var html = fs.readFileSync('public/index.html', 'utf8');
	expect(html).toEqual(expect.anything()); //any non-nul value is okay
	
	//put the HTML into a testing DOM and do a sanity check
	document.body.innerHTML = html;
	const $ = require('jquery');
	expect($('h1').html()).toBe("Cheesecake Order Form");
});
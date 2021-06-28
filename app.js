var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'images/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'images/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'images/beast.jpg'
	}
};

function setManImage()
{
	document.getElementById("man").src
	= ""+images.man.path+""
}

function setWizardImage()
{
	document.getElementById("wizard").src
	= ""+images.wizard.path+""
}

function setBeastImage()
{
	document.getElementById("beast").src
	= ""+images.beast.path+""
}
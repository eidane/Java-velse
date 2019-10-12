function main()
{
	var select, i,option; 
	//imput kilde
	options=["Option 1", "Option 2", "Option 3", "Option 4"];
	i=options.length;
	console.log(i);
	console.log(options);

	select = document.getElementById('select')
	for (x = 0; x<i; x++)
	{
		var opt=document.createElement('option');
		opt.value=i
		opt.innerHTML = options[x];
		select.appendChild(opt);
		console.log(i);
	}
}


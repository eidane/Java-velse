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
		var opt=document.createElement('li');
		opt.value=x
		opt.appendChild = options[x];
		
		
		select.appendChild(opt);
		console.log(x);
	}
}
function openbox() {
	// body...
	document.getElementById("select").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("select");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//#f0f0f5
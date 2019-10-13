function main(){
	var select, i,buttom; 
	//imput kilde
	options=[Option1=new option("Option 1","#99ff99"), Option2=new option("Option 2","#33adff"),Option3=new option("Option 3","#ff9933"),Option4=new option("Option 4","#ff8080")];
	i=options.length;
	console.log(i);
	console.log(options);

	select = document.getElementById('select');
	buttom = document.getElementById('selected');
	color = document.getElementById('color');
	buttom.innerHTML=options[0].opname;
	color.style.backgroundColor=options[0].color;

	for (x = 0; x<i; x++)
	{	
		//createElement()
		var opt=document.createElement('p');
		var dot=document.createElement('p')
		dot.id="color"
		dot.class="dot"
		dot.style.backgroundColor=options[x].color;

		opt.value=x
		opt.id="dropdown-content"
		console.log(opt);
		console.log(dot);
		opt.innerHTML = options[x].opname;
		console.log(options[x].opname);

		//opt.onclick=function() { options[x].opname;};
		select.appendChild(dot);
		select.appendChild(opt);
		

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
function changeSelected(x,select){
	console.log(x)
	select.innerHTML=x;
}
function option(opname,color){
	this.opname=opname;
	this.color=color;
}
function main(){
	var select, i,buttom; 
	//imput kilde
	options=[Option1=new option("Option 1","#99ff99"), Option2=new option("Option 2","#33adff"),Option3=new option("Option 3","#ff9933"),Option4=new option("Option 4","#ff8080")];
	i=options.length;
	console.log(i);
	console.log(options);

	select = document.getElementById('select');
	buttom = document.getElementById('selected');
	buttom.innerHTML=options[0];

	for (x = 0; x<i; x++)
	{
		var opt=document.createElement('p');
		opt.value=x
		opt.innerHTML = options[x].opname;
		console.log(options[x].opname);
		opt.id="dropdown-content"
		opt.onclick=function() { buttom.innerHTML=options[opt.value];console.log(opt.value);};
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
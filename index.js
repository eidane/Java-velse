function main(){
	var select, i,buttom; 
	//imput kilde
	options=[Option1=new option("Option 1","#99ff99"), Option2=new option("Option 2","#33adff"),Option3=new option("Option 3","#ff9933"),Option4=new option("Option 4","#ff8080")];
	i=options.length;
	console.log(options);

	select = document.getElementById('select');
	buttom = document.getElementById('selected');
	color = document.getElementById('colormain');
	buttom.innerHTML=options[0].opname;
	color.style.backgroundColor=options[0].color;

	for (var x = 0; x<i; x++)
	{	
		//createElement()
		var opt=document.createElement('span');
		var dot=document.createElement('span');
		var makediv=document.createElement('div');
		dot.id="dropdown-content-color";
		
		dot.style.backgroundColor=options[x].color;
		makediv.id="dropdown-content"+x;
		makediv.classname="dropdown-content";
		opt.value=x;
		opt.id="dropdown-content";

		console.log("number");
		console.log(x);
		opt.innerHTML = options[x].opname;
		console.log(options[x].opname);
		console.log(options[x].color);

		//opt.onclick=function() { options[x].opname;};
		select.appendChild(makediv);
		div = document.getElementById('dropdown-content'+x);
		
		
		div.appendChild(dot);
		div.appendChild(opt);
		console.log(div);
		
		//This needs to be inserted correctly then it will be in the goal.
		document.getElementById('dropdown-content'+x).addEventListener("mouseover",function() { hoverover(true,this)})
		document.getElementById('dropdown-content'+x).addEventListener("mouseout",function() {hoverover(false,this)})
		document.getElementById('dropdown-content'+x).addEventListener("click",function(){changeSelected(this)})

	}
}
function openbox() {
	// body...
	document.getElementById("select").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//#f0f0f5 background-color: #ddd;
function hoverover(y,x){
	if (y==true){
		//console.log(x);
		x.style.backgroundColor='#ddd';
	}
	else{
		//console.log(x);
		x.style.backgroundColor='#ffffff';
	}
}
function changeSelected(x){
	
	console.log(x.childNodes[0].style.backgroundColor);

	select=document.getElementById('selected');
	color=document.getElementById('colormain')
	x.innerHTML;
	select.innerHTML=x.childNodes[1].innerHTML;
	color.style.backgroundColor=x.childNodes[0].style.backgroundColor
}

function option(opname,color){
	this.opname=opname;
	this.color=color;
}
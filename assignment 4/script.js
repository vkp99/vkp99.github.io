var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jordan";
names[3]="jason";
names[4]="paul";
names[5]="vikram";
names[6]="prashant";
names[7]="priyanshu";
names[8]="vivek";
names[9]="jashmine";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
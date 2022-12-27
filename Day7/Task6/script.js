let students=new Array();
let all=true;
while(all){
    let menu=prompt("PRESS 1 TO ADD STUDENT\nPRESS 2 TO LIST STUDENT\nPRESS 0 TO EXIT")
    if(menu==1){
        let student={};
        let nam=prompt("INSERT NAME:")
        let surnam=prompt("INSERT SURNAME:")
        let GP=+prompt("INSERT GPA:")
        student.name=nam;
        student.surname=surnam;
        student.GPA=GP;
        students.push(student);
    }let allstud="";
    if(menu==2){
        for(let student of students){
            allstud+="Name: "+student.name+" Surname: "+student.surname+" GPA: "+student.GPA
        }
        alert(allstud)
    }
    if(menu==0){
        all=false
    }
}

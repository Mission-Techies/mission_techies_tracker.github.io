/*global $*/

// This runs on the detail view

$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results) {
	  return results[1] || 0;
	}
	return false;
}


/*global api_key*/
var url_one_student = function() {
  var url_id = $.urlParam('studentID');
  return 'https://api.airtable.com/v0/appaQUVFYTDXxVc15/Employee%20Directory/' + url_id +'?api_key=' + api_key;
}


function renderOneStudent(student) {
      var student_name = student.fields['Name'];
      var student_lastName = student.fields['Last Name']
      var student_pics = student.fields['Picture'];
      var student_dateOfEntry = student.fields['Date of Entry']
      var student_github = student.fields['Github URL']
      var student_linkedin = student.fields['LinkedIn URL']
      var student_personalWebSite = student.fields['PersonalWebSite']
      var student_phoneNumber = student.fields['Phone Number']
      var student_email = student.fields['Personal Email Address']
      var student_streetAddress = student.fields['Street Address']
      var student_city = student.fields['City']
      var student_zipCode = student.fields['Zip Code']
      var student_district = student.fields['District']
      var student_birthday = student.fields['Birthday']
      var student_sex = student.fields['Sex']
      var studentCheck = student.fields['student']
      var professorCheck = student.fields['professor']
      var founderCheck = student.fields['Founder']
     
      
      
      var student_info = '';
      if (student_name) {
        student_info +=`<div class="panel panel-default">`;
          student_info +=`<div class="panel-body">`;
          if (student_pics) {
            $.each(student_pics, function(i, pic){
              student_info +=`<a href="studentDetail.html?studentID=${student.id}"><img src="${pic.url}"></a>`;
            });
          }
          student_info +=`</div>`;
        student_info += `<div class="panel-footer"> <h3><strong> ${student_name} ${student_lastName} </strong></h3> <br> `;
      
          if(student_dateOfEntry){
          student_info += `Date of Entry: ${student_dateOfEntry} <br> `;
          }         
                        
          if(student_email){  
            student_info += ` Email: ${student_email} <br> `;
          }
          
          if(student_phoneNumber){
            student_info += `Phone Number: ${student_phoneNumber} <br>`;
          }
          
          if(student_linkedin){
            student_info += `LinkedIn: <a href="${student_linkedin}" target="_blank">${student_linkedin}</a>
                        <br>`;
          }

          if(student_github){ 
            student_info += `Github: <a href="${student_github}" target="_blank">${student_github}</a>
                        <br>`;
          }
          if(student_personalWebSite){ 
            student_info += `Personal Website: <a href="${student_personalWebSite}" target="_blank">${student_personalWebSite}</a>
                        <br>`; 
          }
      }
      $('.student-detail').append(student_info);
}

if ($.urlParam('studentID')) {
  $.get(url_one_student(), renderOneStudent);   
}


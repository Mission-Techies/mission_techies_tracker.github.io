/*global $*/

// This runs on the detail view

$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results) {
	  return results[1] || 0;
	}
	return false;
}


var url_one_student = function() {
  var url_id = $.urlParam('studentID');
  return 'https://api.airtable.com/v0/appaQUVFYTDXxVc15/Employee%20Directory/' + url_id +'?api_key=' + api_key;
}


function renderOneStudent(student) {
      var student_name = student.fields['Name'];
      var student_pics = student.fields['Picture'];
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
        student_info += `<div class="panel-footer">Name: ${student_name}<br></div>`;
      }
      $('.student-detail').append(student_info);
}

if ($.urlParam('studentID')) {
  $.get(url_one_student(), renderOneStudent);   
}


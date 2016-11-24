/*global $*/
var api_key = 'keyQO62FoqRTWrrGK';
var all_student_records = 'https://api.airtable.com/v0/appaQUVFYTDXxVc15/Employee%20Directory?api_key=' + api_key;



// all details
function allStudentRecords(data)
{  
    $(data.records).each(function(index, student)
                         {
                           var student_name = student.fields['Name'];
                           var student_lastName = student.fields['Last Name']
                           var student_ID = student.fields['Student ID Number']
                           var student_dateOfEntry = student.fields['Date of Entry']
                           var student_github = student.fields['Github URL']
                           var student_linkedin = student.fields['LinkedIn URL']
                           var student_phoneNumber = student.fields['Phone#']
                           var student_email = student.fields['Personal Email Address']
                           var student_streetAddress = student.fields['Street Address']
                           var student_city = student.fields['City']
                           var student_zipCode = student.fields['Zip Code']
                           var student_district = student.fields['District']
                           var student_birthday = student.fields['Birthday']
                           var student_sex = student.fields['Sex']
                           var student_pics = student.fields['Picture']
                          
                           var student_info = ''
                           if (student_name) {
                                            student_info += `<div class="row">`;
                                                student_info += `<div class="col-sm-6 col-md-4">`;
                                                if (student_pics) {
                                                    student_info += `<div class="thumbnail">`;
                                                $.each(student_pics, function(i, pic){
                                                    student_info +=`<a href="studentDetail.html?studentID=${student.id}"><img src="${pic.url}"></a>`;
                                                    
                         });
                        }
                        
                         student_info += `</div>`;
                         student_info += `<div class="caption">${student_name} <br> ${student_lastName}</div>`;
                         student_info += `</div>`;
                         student_info += `</div>`;
                    
                         }
      $('.student').append(student_info);
                       });
}

$.get(all_student_records, allStudentRecords);












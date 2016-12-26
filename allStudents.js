/*global $*/
var api_key = 'keyx8KoDimBmlkxCL';
var all_student_records = 'https://api.airtable.com/v0/appaQUVFYTDXxVc15/Employee%20Directory?api_key=' + api_key;



// all teachers details
function allTeachersRecords(data)
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
                           var studentCheck = student.fields['student']
                           var professorCheck = student.fields['professor']
                          
                           var pro_info = ''
                           if (student_name && professorCheck) {
                                            pro_info += `<div class="column">`;
                                                pro_info += `<div class="col-sm-6 col-md-4">`;
                                                if (student_pics) {
                                                    pro_info += `<div class="thumbnail">`;
                                                $.each(student_pics, function(i, pic){
                                                    pro_info +=`<a href="studentDetail.html?studentID=${student.id}"><img src="${pic.url}"></a>`;
                                                    
                         });
                        }
                        
                         pro_info += `</div>`;
                         pro_info += `<div class="caption">${student_name} <br> ${student_lastName}</div>`;
                         pro_info += `</div>`;
                         pro_info += `</div>`;
                    
                         }
      $('.teacher').append(pro_info);
                       });
}

$.get(all_student_records, allTeachersRecords);








// all students details
function allStudentsRecords(data)
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
                           var studentCheck = student.fields['student']
                           var professorCheck = student.fields['professor']
                          
                           var student_info = ''
                           if (student_name && studentCheck) {
                                            student_info += `<div class="column">`;
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

$.get(all_student_records, allStudentsRecords);








// all founder details
function allFounderRecords(data)
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
                           var studentCheck = student.fields['student']
                           var professorCheck = student.fields['professor']
                           var founderCheck = student.fields['Founder']
                          
                           var student_info = ''
                           if (student_name && founderCheck) {
                                            student_info += `<div class="column">`;
                                            student_info += `<div class="col-sm-6 col-md-4">`;
                                            student_info += `</div>`;
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
      $('.founder').append(student_info);
                       });
}

$.get(all_student_records, allFounderRecords);



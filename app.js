var api_key = 'keyQO62FoqRTWrrGK';
var student_records = 'https://api.airtable.com/v0/appaQUVFYTDXxVc15/Employee%20Directory?api_key=' + api_key;
function studentRecords(data)
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
                                            student_info += `<li>`
                                            
                         if (student_pics) {
          $.each(student_pics, function(i, pic){
            student_info +=`<img src="${pic.url}">`;
          });
        }
                                            
                         student_info += ` <br> Name: ${student_name} <br> Last Name: ${student_lastName} <br> ID #: ${student_ID} <br> Date of entry: ${student_dateOfEntry} <br> Github: ${student_github} <br> LinkedIn: ${student_linkedin} <br> Phone Number: ${student_phoneNumber} <br> Email: ${student_email} <br> Street Address: ${student_streetAddress} ${student_city} ${student_zipCode} <br> District: ${student_district} <br> Birthday: ${student_birthday} <br> Sex: ${student_sex}`  
                         student_info +=`</li>`;
                         student_info += `\b`
                         }
      $('.student').append(student_info);
                       });
}

$.get(student_records, studentRecords);

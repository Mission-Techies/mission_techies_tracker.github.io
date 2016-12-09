/*global $*/
var api_key = 'keyQO62FoqRTWrrGK';
var all_curriculum_records = 'https://api.airtable.com/v0/appbcB4zyHIHZjntM/Artists?api_key=' + api_key;



// Creating opportunities curriculum function
function allCreatingOpportunitiesRecords(data)
{  
    $(data.records).each(function(index, curriculum)
                         {
                           var curriculum_name = curriculum.fields['Name']
                           var curriculum_picture = curriculum.fields['Picture']
                           var curriculum_opportunities = curriculum.fields['OpportunitiesType']
                           var curriculum_corporateVisits = curriculum.fields['CST']
                           var curriculum_logo = curriculum.fields['LogoPicture']
                           var curriculum_description = curriculum.fields['Description']
                          
                           var curriculum_info = ''
                           if (curriculum_name && curriculum_opportunities) {
                                            curriculum_info += `<div class="column">`;
                                                curriculum_info += `<div class="col-sm-6 col-md-4">`;
                                                if (curriculum_picture) {
                                                    curriculum_info += `<div class="thumbnail">`;
                                                    
                                                $.each(curriculum_logo, function(i,pic){
                                                    curriculum_info += `<img src = "${pic.url}"`;
                                                });
                                                $.each(curriculum_picture, function(i, pic){
                                                    curriculum_info +=`<a href="studentDetail.html?studentID=${curriculum.id}"><img src="${pic.url}"></a>`;
                                                    
                         });
                                                
                        }
                        
                         curriculum_info += `</div>`;
                         curriculum_info += `<div class="caption">${curriculum_description} </div>`;
                         curriculum_info += `</div>`;
                         curriculum_info += `</div>`;
                        
                         }
      $('.opportunities').append(curriculum_info);
                       });
}


$.get(all_curriculum_records, allCreatingOpportunitiesRecords);






// try out
function allCorporateVisitsRecords(data)
{  
    $(data.records).each(function(index, curriculum)
                         {
                           var curriculum_name = curriculum.fields['Name']
                           var curriculum_picture = curriculum.fields['Picture']
                           var curriculum_opportunities = curriculum.fields['OpportunitiesType']
                           var curriculum_corporateVisits = curriculum.fields['CST']
                           var curriculum_logo = curriculum.fields['LogoPicture']
                           var curriculum_description = curriculum.fields['Description']
                          
                           var curriculum_info = ''
                           if (curriculum_name && curriculum_corporateVisits ) {
                                            curriculum_info += `<div class="column">`;
                                                curriculum_info += `<div class="col-sm-6 col-md-4">`;
                                                if (curriculum_picture) {
                                                    curriculum_info += `<div class="thumbnail">`;
                                                    
                                                $.each(curriculum_logo, function(i,pic){
                                                    curriculum_info += `<img src = "${pic.url}"`;
                                                });
                                                $.each(curriculum_picture, function(i, pic){
                                                    curriculum_info +=`<a href="studentDetail.html?studentID=${curriculum.id}"><img src="${pic.url}"></a>`;
                                                    
                         });
                                                
                        }
                        
                         curriculum_info += `</div>`;
                         curriculum_info += `<div class="caption">${curriculum_description} </div>`;
                         curriculum_info += `</div>`;
                         curriculum_info += `</div>`;
                    
                         }
      $('.corporateVisits').append(curriculum_info);
                       });
}

$.get(all_curriculum_records, allCorporateVisitsRecords);


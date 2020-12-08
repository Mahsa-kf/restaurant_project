//alert("hello");
jQuery(document).ready(function () { 
    var jobsListElement = document.getElementById("jobList");
    getJobList();


    function getJobList() {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    jobsListElement.innerHTML = "";



                    xmlDoc = xhr.responseXML;

                    // Take the list of jobs from XML file and put in an array
                    xmlJobList = xmlDoc.getElementsByTagName("job");
 
                    //NOW, LOOP THROUGH THE COLLECTION AND ACCESS THE NODE VALUES.
                    for (var i = 0; i < xmlJobList.length; i++) {
                        var jobTitle = xmlJobList[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                        var location = xmlJobList[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
                        var jobType = xmlJobList[i].getElementsByTagName("jobType")[0].childNodes[0].nodeValue;
                        var description = xmlJobList[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                        
                        var newJobHtml = `
                            <div class="job-posting">
                                <h3>${jobTitle}</h3>
                                <p>
                                    <b>Location: </b><span>${location}</span>
                                </p>
                                <p>
                                    <b>Job Type: </b><span>${jobType}</span>
                                </p>
                                <p class="job-description">${description}</p>
                            </div>                
                        `                    
                        jobsListElement.innerHTML += newJobHtml;
                    }

                    $('.job-description').hide();

                    $('.job-posting').click(function(){
                        // Show/Hide the Job description
                        $(this).find('.job-description').slideToggle(500);
                    });
                    

                } else {
                    alert("Connection was unsuccessful");
                }
            }
        }

        xhr.open("GET", "data/jobPosting.xml", true);
        xhr.send(null);



    }
});
jQuery(document).ready(function () {
    var jobsListElement = document.getElementById("jobList");

    jobsListElement.innerHTML = "";

    //NOW, LOOP THROUGH THE COLLECTION AND ACCESS THE NODE VALUES.
    for (var i = 0; i < jobList.length; i++) {
        var jobTitle = jobList[i].title;
        var location = jobList[i].location;
        var jobType = jobList[i].jobType;
        var description = jobList[i].description;

        
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

    $('.job-posting').click(function () {
        // Show/Hide the Job description
        $(this).find('.job-description').slideToggle(500);
    });

});

var jobList = [
    {
        title: "Assistant Chef Manager",
        location: " 111 Yonge Street, Toronto, ON A1A 1A2",
        jobType: "Full-time",
        description: `This position is responsible for assisting the Department Manager in the achievement of
        company, store and department goals as communicated by the Store Manager and Department
        Manager. The performance of the duties must ensure a quality service approach to all
        employees, customers and suppliers. All responsibilities must be performed in a manner
        consistent with the Farm Boy Way.Major Responsibilities: Provide superior customer service
        and support Farm Boy’s vision of the best fresh shopping experience.Assist in the
        development of the team by supporting the training, coaching and recognition while
        maintaining a high level of confidentiality and trust.Effectively communicate and support
        the team with huddles, product knowledge, corporate policies and procedures and Health and
        Safety.Floor support and supervision, including serving customers, merchandising and
        rotation, breaks and general department cleanliness.Support office management (e.g.
        completing inventory and orders, invoices scheduling, payroll).May be requested to undertake
        other related duties on a periodic basis. Knowledge, Skills and Abilities: Typically
        requires completion of a post-secondary program with an emphasis in business, plus a minimum
        of 1 year of progressively responsible supervisory or management experience in a similar
        role or an equivalent combination of education and experience.Excellent organizational,
        interpersonal and analytical skills.Clear and effective communication style, both written
        and oral.Good judgment and decision-making abilities while communicating with customers and
        Farm Boy team members.Ability to learn manual and automated systems/tools.Skilled at working
        in a fast-paced environment while maintaining priorities and a high level of
        performance.Flexible schedule, including weekends, evenings and holidays.Fluency in English
        and French shall be considered an asset. *Accommodation is available upon request for
        applicants and employees with disabilities`
    }, {
        title: "Restaurant looking for Kitchen Help staff",
        location: "111 Yonge Street, Toronto, ON A1A 1A2",
        jobType: "Part-time/ Full-time",
        description: `Looking for Kitchen Help staff. Duties include processing orders by accurately reading the bill, putting meat on skewers, Vegetable Prep and some dishwashing.
        If you have any restaurant experience please mention the name. Any experience with grilling or tandoor is an asset.
        Only serious and mature applicants who are confident and can lead.
        One free meal every shift`
    }, {
        title: "Waiter / Waitress",
        location: "111 Yonge Street, Toronto, ON A1A 1A2",
        jobType: "Part-time/ Full-time",
        description: ` We are looking for a skilled Waiter or Waitress to take orders and
        deliver food and beverages to our customers.The right Waiter/Waitress uplifts the dining
        experience for customers.We are looking for someone who will have the patience, personality
        and perseverance to thrive in this role.Waiter/Waitress responsibilities include greeting
        and serving customers, providing detailed information on menus, multi-tasking various
        front-of-the-house duties and collecting the bill.If you are able to perform well in
        fast-paced environments, we’d like to meet you.To be a successful Waiter or Waitress, you
        should be polite with our customers and make sure they enjoy their meals.You should also be
        a team player and be able to effectively communicate with our Kitchen Staff to make sure
        orders are accurate and delivered promptly.Keep in mind that Waiter/Waitress duties may
        require working in shifts and/or occasionally during weekends and holidays.Ultimately, it is
        the duty of our Waiters/Waitresses to provide an excellent overall dining experience for our
        guests.ResponsibilitiesServe food and drink ordersDeliver checks and collect bill
        paymentsFollow all relevant health department regulationsPresent menu and provide detailed
        information when askedMeet with restaurant staff to review daily specials, changes on the
        menu and service specifications for reservationsRequirementsStrong organizational and
        multitasking skills, with the ability to perform well in a fast-paced
        environmentAttentiveness and patience for customersActive listening and effective
        communication skillsBasic math skillsFlexibility to work in shifts`
    }
]


const { Post } = require('../models');
const postData = [
    {
        post_title: "Transportation Challenges in NH? Check this out.",
        content: 'NHCarePath offers an overview of different options for people seeking access to affordable transportation options in New Hampshire. Visit dhhs.nh.gov to see what’s available in your region.',
        user_id: 1,
        post_state: "nh",
        category: "transport"
    },
    {
        post_title: "Upcoming Community Discussion - Keene, NH",
        content: 'April 18th at 9am - NH Alliance for Immigrants and Refugees and Welcoming New Hampshire are hosting a forum to discuss the rise in hate crimes and the impact this has on victims and the community. Representatives from Law Enforcement, the ACLU, and immigration advocates, will participate in multiple panels to drive this important and timely conversation! ',
        user_id: 2,
        post_state: "nh",
        category: "legal"
    },
    {
        post_title: "Upcoming Mobile Food Pantry on April 14",
        content: 'NH Food Bank will be hosting a mobile food pantry in Concord on Sunday, April 14. Food will be distributed between 12 - 2pm or until supplies last.',
        user_id: 3,
        post_state: "nh",
        category: "food"
    },
    {
        post_title: "Childcare Equity Event - Registration Deadline April 14th!",
        content: 'Last chance to register for this important community event being hosted by Welcoming NH on Saturday, April 20th at the Boys & Girls Club of Manchester. Representatives from local child care centers, Head Start, and the NH Housing Authority will be in attendance. Food, childcare, language interpretation, and local transportation are all offered for free for those who pre-register! Be sure to take advantage and we hope to see you on the 20th!',
        user_id: 3,
        post_state: "nh",
        category: "health"
    },
    {
        post_title: "New to VT and need a ride? GOPHER It!",
        content: "Families eligible for subsidized services will receive fare-free rides for everyday transportation needs! Gopher, the new service operating in central VT, offers door-to-door rides to and from work, appointments, and errands, in addition to social and recreational activities. Call 1-855-467-4375 to learn more or book a ride today!",
        user_id: 4,
        post_state: "vt",
        category: "transport"
    },
    {
        post_title: "Looking for legal assistance in Vermont?",
        content: "The Vermont Asylum Assistance Project is here to help! This organization offers pro bono legal services and promotes the rights of Vermont immigrant communities. Visit their website at vaapvt.org/legal-support to learn more and submit an application to receive services.",
        user_id: 5,
        post_state: "vt",
        category: "legal"
    },
    {
        post_title: "Help cover cost of living expenses for families in Rutland",
        content: "Bridge to Rutland’s second annual Arts Marathon kicked off on April 1st. Last year, fourteen local artists generously donated their time and talent to raise funds for Bridge to Rutland. Last year’s event raised from thank $10,000 to cover housing, legal, and living expenses for asylum seekers in Rutland!",
        user_id: 5,
        post_state: "vt",
        category: "food"
    },
    {
        post_title: "Pediatric New American Program offers care in Burlington!",
        content: "New American families with children between 1 month and 5 years old can obtain clinical care through the Building Strong Families Clinic, which is hosted in the Burlington area Parent Child Center. Appointments last approximately 1.5 hours and include a 30-minute private exam along with parent education and support around raising children in a new country. Visit thefamilyroomv.org to see a calendar of clinic hours and enrollment information!",
        user_id: 6,
        post_state: "vt",
        category: "health"
    },
    {
        post_title: "Drivers Wanted! Connect with Ascentria today!",
        content: "With roots in the community that begin in 1872, Ascentria offers a wide array of services for individuals and families in need of economic and/or social support. Are you able to offer transportation to school, work, or appointments? Can you host an individual or family in your home for a short or long-term stay? Are you or your business hiring new employees? Visit ascentria.org today and learn more about ways to help New Americans in MA!",
        user_id: 4,
        post_state: "ma",
        category: "transport"
    },
    {
        post_title: "Pro Bono Legal aid for asylum seekers is available now!",
        content: "Volunteer attorneys are available through the PAIR Project to assist you or someone you know through the onerous and complex asylum process. Visit pairproject.org/gethelp make an appointment and gain access to this valuable support service.",
        user_id: 5,
        post_state: "ma",
        category: "legal"
    },
    {
        post_title: "Get help navigating food subsidies in MA!",
        content: "Project Bread offers free access to expert counselors who are connected with food and nutrition assistance programs offered by the state and non-profit organizations in Massachusetts. They can help you access local food resources and federal nutrition programs and determine eligibility for state funding opportunities such as SNAP. Counseling is available in over 180 languages. Call 1-800-645-8333 to get connected with a counselor today.",
        user_id: 4,
        post_state: "ma",
        category: "food"
    },
    {
        post_title: "Comprehensive care and mental health services available at BMC",
        content: "Through an innovative model of outpatient care, Boston Center for Refugee Health and Human Rights (BCRHHR) provides comprehensive mental health services, including counseling and medication management, designed to meet the special needs of refugees and survivors of torture, asylum seekers and immigrants. The BCRHHR provides services to approximately 500 individuals from over 40 countries. Interpreter services are available for more than 250 languages to aid in the healing journey of each patient and their families.",
        user_id: 6,
        post_state: "ma",
        category: "health"
    }
];

const SeedPost = () => Post.bulkCreate(postData);
module.exports = SeedPost;
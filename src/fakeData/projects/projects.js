import creative from "../../image/creativeagency.jpg";
import volunteer from "../../image/Landingpage.jpg";
import school from "../../image/school.jpg";
import doctor from "../../image/doctor.jpg";
import ema from "../../image/ema.jpg";
import travel from "../../image/travel.jpg";
import eCommerce from "../../image/Capture.PNG";

const projects = [
  {
    id: 1,
    title: "E-Commerce",
    description:
      "e-commerce is a product buying and selling site. Here you sell any product on the website and buy any product.  If you have a promo code, you will get a fix amount of discount for any product.",
    img: eCommerce,
    use: "React.js, Cloudinary, Swiper.js, Node.js, MongoDB, Express.js, Bootstrap, Firebase auth, Heroku",
    link: "https://e-commerce-test.netlify.app/",
  },
  {
    id: 2,
    title: "Creative-Agency",
    description:
      "Creative Agency is a great service provider. It has both Admin and.User lavel dashboard.User Can Make Order, Give Review, See Own Order List.Admin Can Add Service, Make Another Admin, See All Order and Update Order Info.",
    img: creative,
    use: "React.js, Base64, Swiper.js, Node.js, MongoDB, Express.js, Bootstrap, Firebase auth, Heroku",
    link: "https://creative-own-agency.web.app/",
  },
  {
    id: 3,
    title: "Doctors-Portal",
    description:
      "Doctors-Portal is a Patient  service provider. It has both Doctors and Patient  lavel dashboard.Patient Can appointment, See appointment.Doctors Can see all appointment list and Update any patient appointment information.",
    img: doctor,
    use: "React.js, Node.js, MongoDB, Express.js, Bootstrap, Firebase auth, Heroku",
    link: "https://own-doctor-portal.web.app/",
  },
  {
    id: 4,
    title: "Ema-John",
    description:
      "Ema-Jhon is a e-commerce site where Customer can Buy Product.Customer have there own dashboard and see previous order.Admin Can create and manage product and see order status",
    img: ema,
    use: "React.js, Base64, Node.js, MongoDB, Express.js, Bootstrap, Firebase auth, Heroku",
    link: "https://ema-john-simple-my.web.app",
  },
  {
    id: 5,
    title: "Volunteer-Network",
    description:
      "Volunteers who feel irreplaceable are more likely to stick around than ones that can be supplanted by any other worker.the more likely it becomes that they will introduce others to your organization, which feeds your volunteer network.",
    img: volunteer,
    use: "React.js, Base64, Node.js, MongoDB, Express.js, Bootstrap, Firebase auth, Heroku",
    link: "https://volunteer-event.web.app",
  },

  {
    id: 6,
    title: "Travel-Guru",
    description:
      "Travel Guru is a travel agency website (This project check All firebase authentication system). Sign in a new user, Log in user, Password reset, Email Verification,Travel area map. User can Choose Place and Booking this place hotel room and also.can see this place google map",
    img: travel,
    use: "React.js, Api, Node.js, MongoDB, Google Map, Express.js, Bootstrap, Firebase auth, Heroku",
    link: "https://travel-guru-simple.web.app",
  },
  {
    id: 7,
    title: "E-School",
    description:
      "E-School websites are crucial for creating a good first impression. Before sending their children to a school, most parents are likely to take a look at the school’s website, so the primary goal of the site would be to convince these visitors.",
    img: school,
    use: "Html5, Css3,  Bootstrap, Javascript, React.Js",
    link: "https://hannanuddin78.github.io/Assicnment2/",
  },
];

export default projects;

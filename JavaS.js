function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("myBtn6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction7() {
  var dots = document.getElementById("dots7");
  var moreText = document.getElementById("more7");
  var btnText = document.getElementById("myBtn7");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

const express = require('express');
const multer = require('multer'); // For handling file uploads
const nodemailer = require('nodemailer'); // For sending emails

const app = express();
const upload = multer({ dest: 'uploads/' }); // Specify the folder where uploaded files will be saved

app.use(express.urlencoded({ extended: true }));

// POST route to handle form submissions
app.post('/submit-form', upload.single('attachment'), (req, res) => {
  // Process form data
  const fullName = req.body['first-name'];
  const company = req.body.company;
  const email = req.body.email;
  const phone = req.body.phone;
  const projectDetails = req.body['project-details'];
  const attachmentPath = req.file ? req.file.path : null; // File path of the uploaded attachment

  // Code to send an email with the attachment
  const transporter = nodemailer.createTransport({
    // Configure your email transport here (e.g., SMTP, Gmail, etc.)
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com', // Your Gmail email address
      pass: 'your-gmail-password', // Your Gmail password
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com', // Change this to the recipient email address
    subject: 'Form Submission',
    text: `Full Name: ${fullName}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nProject Details: ${projectDetails}`,
    attachments: attachmentPath ? [{ filename: req.file.originalname, path: attachmentPath }] : [],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send('Error sending email.');
    } else {
      console.log('Email sent:', info.response);
      res.redirect('https://elabsp.com/index.html'); // Redirect after successful form submission
    }
  });
});

// Start the server
const port = 3000; // Change this to your desired port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


function showElement() {
  var element = document.getElementById("myElement");
  element.style.display = "block";
}
const goToTopLink = document.getElementById('goToTop');

goToTopLink.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default link behavior

  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle the nav
        nav.classList.toggle('nav-active');

        // Animate the links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();



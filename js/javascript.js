var header_prog = 0;
var design = 0;
var photoshop = 0;
var html = 0;
var css = 0;
window.onload = function () {
    // Header Progress
    if (header_prog == 0) {
        header_prog = 1;
        var elem = document.getElementById("progress_customer");
        var width_header = 1;
        var id = setInterval(frame, 1);
        function frame() {
            if (!(width_header >= 100)) {
                width_header++;
                elem.style.width = width_header + "%";
            }
        }
    }
    // Slide Header Image
    const showPhoto = document.getElementById('my_image');
    const showHeader = document.getElementById('header_info');
    const showSetisfied_clients = document.getElementById('setisfied_clients');
    setTimeout(() => {
        showPhoto.classList.add('show_image');
        showHeader.classList.add('header_show');
        showSetisfied_clients.classList.add('setisfied_clients_show');
    }, 400);


    var slides = document.querySelector('.slider-items').children;
    var nextSlide = document.querySelector(".right-slide");
    var prevSlide = document.querySelector(".left-slide");
    var totalSlides = slides.length;
    var index = 0;

    nextSlide.onclick = function () {
        next("next");
    }
    prevSlide.onclick = function () {
        next("prev");
    }

    function next(direction) {

        if (direction == "next") {
            index++;
            if (index == totalSlides) {
                index = 0;
            }
        }
        else {
            if (index == 0) {
                index = totalSlides - 1;
            }
            else {
                index--;
            }
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("activi");
        }
        slides[index].classList.add("activi");

    }



    // ABout Section
    var about = document.getElementById("about");
    var scrollAbout = function () {
        var y = window.scrollY;
        if (y >= 400) {
            about.className = "about show_section";

            if (design == 0) {
                design = 1;
                var elem_design = document.getElementById("design");
                var widthDesign = 1;
                var idDesign = setInterval(frame, 1);
                function frame() {
                    if (!(widthDesign >= 80)) {
                        widthDesign++;
                        elem_design.style.width = widthDesign + "%";
                    }
                }
            }
            if (photoshop == 0) {
                photoshop = 1;
                var elem_photoshop = document.getElementById("photoshop");
                var widthPhoto = 1;
                var idPhoto = setInterval(frame, 1);
                function frame() {
                    if (!(widthPhoto >= 80)) {
                        widthPhoto++;
                        elem_photoshop.style.width = widthPhoto + "%";
                    }
                }
            }
            if (html == 0) {
                html = 1;
                var elem_html = document.getElementById("html_skill");
                var widthHTML = 1;
                var idHTML = setInterval(frame, 1);
                function frame() {
                    if (!(widthHTML >= 90)) {
                        widthHTML++;
                        elem_html.style.width = widthHTML + "%";
                    }
                }
            }
            if (css == 0) {
                css = 1;
                var elemCss = document.getElementById("css_skill");
                var widthCss = 1;
                var idCss = setInterval(frame, 1);
                function frame() {
                    if (!(widthCss >= 70)) {
                        widthCss++;
                        elemCss.style.width = widthCss + "%";
                    }
                }
            }
        }
    }

    window.addEventListener("scroll", scrollAbout);

    var contact_details_header = document.getElementById("contact_details_header");
    var scrollDetails = function () {
        var q = window.scrollY;
        if (q >= 800) {
            contact_details_header.className = "contact_details_header show_section";
        }
    }
    window.addEventListener("scroll", scrollDetails);

    // Service Section
    document.querySelectorAll('.service').forEach(service => {
        service.addEventListener('mouseover', () => {
            service.querySelector('.service_hidden').classList.remove('hidden');
            service.querySelector('span').classList.add('hidden');
            service.querySelector('h3').classList.add('hidden');
        })
        service.addEventListener('mouseout', () => {
            service.querySelector('.service_hidden').classList.add('hidden');
            service.querySelector('span').classList.remove('hidden');
            service.querySelector('h3').classList.remove('hidden');
        })
    })

    var service_header = document.getElementById("service_head");
    var scrollService = function () {
        var q = window.scrollY;
        if (q >= 1500) {
            service_header.className = "service_head show_section";
        }
    }
    window.addEventListener("scroll", scrollService);

    // Testimonials section
    document.getElementById('first_test').addEventListener('click', function () {
        this.classList.add('active');
        document.getElementById('second_test').classList.remove('active');
        document.getElementById('third_test').classList.remove('active');
        document.getElementById('secondTest').classList.add('hidden');
        document.getElementById('thirdTest').classList.add('hidden');
        document.getElementById('firstTest').classList.remove('hidden');
    })
    document.getElementById('second_test').addEventListener('click', function () {
        this.classList.add('active');
        document.getElementById('first_test').classList.remove('active');
        document.getElementById('third_test').classList.remove('active');
        document.getElementById('secondTest').classList.remove('hidden');
        document.getElementById('thirdTest').classList.add('hidden');
        document.getElementById('firstTest').classList.add('hidden');
    })
    document.getElementById('third_test').addEventListener('click', function () {
        this.classList.add('active');
        document.getElementById('first_test').classList.remove('active');
        document.getElementById('second_test').classList.remove('active');
        document.getElementById('secondTest').classList.add('hidden');
        document.getElementById('thirdTest').classList.remove('hidden');
        document.getElementById('firstTest').classList.add('hidden');
    })


    var project_header = document.getElementById("testimonial_show");
    var scrollProject = function () {
        var w = window.scrollY;
        if (w >= 1800) {
            project_header.className = "testimonial_flex show_section";
        }
    }
    window.addEventListener("scroll", scrollProject);

    // Last Projects Section
    var project_project = document.getElementById("projects");
    var scrollProject = function () {
        var p = window.scrollY;
        if (p >= 2200) {
            project_project.className = "projects show_section";
        }
    }
    window.addEventListener("scroll", scrollProject);

    document.querySelectorAll('.itemBox').forEach(itemBox => {
        itemBox.addEventListener('mouseover', () => {
            itemBox.querySelector('.project_hover').classList.remove('hidden');
            itemBox.querySelector('.product_image').classList.add('hidden');
        })
        itemBox.addEventListener('mouseout', () => {
            itemBox.querySelector('.project_hover').classList.add('hidden');
            itemBox.querySelector('.product_image').classList.remove('hidden');

        })
    })

    // News Section
    var news = document.getElementById("news");
    var scrollProject = function () {
        var n = window.scrollY;
        if (n >= 3500) {
            news.className = "news show_section";
        }
    }
    window.addEventListener("scroll", scrollProject);

    // Parnters Section
    document.querySelectorAll('.partner').forEach(itemBox => {
        itemBox.addEventListener('mouseover', () => {
            itemBox.querySelector('.news_hover').classList.remove('hidden');
            itemBox.querySelector('.product_image').classList.add('hidden');
        })
        itemBox.addEventListener('mouseout', () => {
            itemBox.querySelector('.news_hover').classList.add('hidden');
            itemBox.querySelector('.product_image').classList.remove('hidden');

        })
    })

    var partners = document.getElementById("partners");
    var scrollProject = function () {
        var pa = window.scrollY;
        if (pa >= 5200) {
            partners.className = "partners show_section";
        }
    }
    window.addEventListener("scroll", scrollProject);

    // COntact Section
    var contact = document.getElementById("contact");
    var scrollProject = function () {
        var pa = window.scrollY;
        if (pa >= 5500) {
            contact.className = "contact show_section";
        }
    }
    window.addEventListener("scroll", scrollProject);

    // footer Section
    var footer = document.getElementById("footer");
    var scrollProject = function () {
        var ft = window.scrollY;
        if (ft >= 5800) {
            footer.className = "footer show_section";
        }
    }
    window.addEventListener("scroll", scrollProject);



    // Send contact details
    function sendContactDetails() {
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            var full_name = document.getElementById('full_name').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;

            sendDetails(full_name, email, subject, message);

            document.getElementById('full_name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
        })
        function sendDetails(full_name, email, subject, message) {
            return fetch('https://ucha.ge/contact-form/submit.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: '&full_name=' + encodeURIComponent(full_name) + '&email=' + encodeURIComponent(email) + '&subject=' + encodeURIComponent(subject) + '&message=' + encodeURIComponent(message)
            })
                .then(function (a) {
                    return a.json();
                })
        }
    }
    sendContactDetails();
}

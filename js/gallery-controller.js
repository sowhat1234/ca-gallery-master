'use strict';
$(init);


$('.d-grid').on('click', '#btnbtn1', function() {
    onSubmit();
});





function init() {
    renderProjs()
}

function renderProjs() {
    const projs = getProj();
    var strHTMLs = projs.map(proj => {

        return `     <div class="col-md-4 col-sm-6 portfolio-item">
                        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="onOpenModal('${proj.id}')">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content">
                                    <i class="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img class="img-fluid" src="${proj.url}" alt="">
                        </a>
                    <div class="portfolio-caption">
                        <h4>${proj.id}</h4>
                        <p class="text-muted">${proj.title}</p>
                    </div>
                    </div>`
    }).join('');

    $('.proj-list').html(strHTMLs);

}

animateBounceInX()

function animateBounceInX() {
    $("#animatebutton2").click(function() {
        const element = document.querySelector('.animatebutton2');
        element.classList.add('animated', 'flipInX');
        setTimeout(function() {
            element.classList.remove('flipInX');
            $('.col-md-4 .text-muted2').last().text(`It was obvious she was hot, sweaty, and tired.
            Best friends are like old tomatoes and shoelaces.
            I would have gotten the promotion, but my attendance wasn’t good enough.
            The father died during childbirth.
            He had unknowingly taken up sleepwalking as a nighttime hobby.`).css('font-weight', 'bold').removeClass('text-muted').animate({
                left: '250px',
                opacity: '0.5',
                height: '150px',
                width: '150px'
            }).animate({
                opacity: '1.5',
                width: '200px'
            });
        }, 1000);
    });

}

animateBounceOut()

function animateBounceOut() {
    // Bounce button
    $("#animatebutton1").click(function() {
        const element = document.querySelector('.animatebutton1');
        element.classList.add('animated', 'wobble');
        setTimeout(function() {
            $('.col-md-4 .text-muted1').text(`The small white buoys marked the location of hundreds of crab pots.
            She was the type of girl that always burnt sugar to show she cared.
            Everyone was curious about the large white blimp that appeared overnight..`).css('font-weight', 'bold').removeClass('text-muted').slideUp('fast').slideDown('slow')
        }, 1000);
    });
}

animateWubble()

function animateWubble() {
    // Bounce button
    $("#animatebutton").click(function() {
        const element = document.querySelector('.animatebutton');
        element.classList.add('animated', 'bounceIn');
        setTimeout(function() {}, 1000);
    });
    $("#animatebutton").click(function() {
        $('.col-md-4 p').first().css('font-weight', 'bold').removeClass('text-muted').fadeOut(2000).fadeIn().text(`They were excited to see their first sloth.
        The external scars tell only part of the story.
        If eating three-egg omelets causes weight-gain, budgie eggs are a good substitute.`, 'fast')

    });

}

function renderModal(proj) {
    $('.modal-body h2').text(proj.id);
    $('.modal-body img').attr('src', proj.url);
    $('.modal-body .item-intro').text(proj.title);
    $('.modal-body').on('click', '.btn', function() {
        window.open(`${proj.link}`);
    });
    $('.modal-body .btn-success').text(`Check out my ${proj.id} Project!`)
}

function onOpenModal(projId) {
    const proj = getProjById(projId);
    renderModal(proj)
}


function openWin(proj) {
    myWindow = window.open(`${proj.link}`, "", "width=200,height=100");
}

function onSubmit() {
    const $elEmail = $('#emailAddress').val();
    const $elSubject = $('#subject').val();
    const $elMessage = $('#message').val();

    const url = `https://mail.google.com/mail/u/0/?fs=1&to=${$elEmail}&su=${$elSubject}&body=${$elMessage}&tf=cm`

    $('#name').val('')
    $('#emailAddress').val('');
    $('#message').val('');
    $('#subject').val('')
    openCanvas()
    window.open(url, '', 'myWindow');
}
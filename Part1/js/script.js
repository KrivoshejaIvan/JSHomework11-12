$(function () {
    var html= $('#page').html();
    var title = [
        {
            title: 'Кривошея Іван Володимирович'
        },
        {
            student:'Студент Харківського Державного Університету Харчових Технологій'
        }
        ];
    var thumbnail = [
        {
            thumbnail: '1.jpg'
        }
    ];
    var  question = [
        {
            question: 'Чому я хочу пізнати Frontend'
        }
    ];
    var  answer = [
        {
            answer:'Хочу реалізуватися в житті'
        },
        {
            answer:'Хочу мати роботу яку поллюбляєш'
        },
        {
            answer:'Мене не влаштовує професія яку я отримаю в своєму вузі'
        }
    ];
    var number = [
        {
            number:'Мій контактний телефон'
        }
    ];
    var number2 = [
        {
            number2:'380505857947'
        }
    ];
    var profile = [
        {
            profile:'Мій профіль в ВК'
        }
    ];
    var link = [
        {
            link:'http://vk.com/feed'
        }
    ];
    var feedback = [
        {
            feedback:'Мій федбек'
        }
    ];
    var content = tmpl(html,{
        data:title,
        dataImage: thumbnail,
        dataP: question,
        dataLi: answer,
        dataPhone: number,
        dataNumber: number2,
        dataProfile: profile,
        dataLink: link,
        dataFeedback: feedback
    });
    $('body').append(content)
});

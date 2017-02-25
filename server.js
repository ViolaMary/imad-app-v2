var express = require('express');//importing soft package --create the web servers
var morgan = require('morgan');//output logs of server
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var Articles={
        'article-one':{
            title:'Article One | Janet',
            heading:'Article One',
            date: 'September 5 2017',
            content: `<p>This is my content for article.This is my content for article.This is my content for article.
                           This is my content for article.This is my content for article.This is my content for article.
                           This is my content for article.This is.my content for article.This is my content for article.
                           This is my content for article.This is my content for article.This is my content for article.
                        </p>
                    
                    
                    <p>This is my content for article.This is my content for article.This is my content for article.
                           This is my content for article.This is my content for article.This is my content for article.
                           This is my content for article.This is.my content for article.This is my content for article.
                           This is my content for article.This is my content for article.This is my content for article.
                        </p>
                    
                        <p>This is my content for article.This is my content for article.This is my content for article.
                           This is my content for article.This is my content for article.This is my content for article.
                           This is my content for article.This is.my content for article.This is my content for article.
                           This is my content for article.This is my content for article.This is my content for article.
                        </p>`
        },
        'article-two':{
            title:'Article Two | Janet',
            heading:'Article Two',
            date: 'September 5 2017',
            content: `<p>This is my content for article This is my content for article. This is my content for article.
                    This is my content for article.This is my content for article.This is my content for article.
                    This is my content for article This is my content for article. This is my content for article.
                </p>`
        },
        'article-three'={
            title:'Article Three | Janet',
            heading:'Article Three',
            date: 'September 5 2017',
            content: `<p>This is my content for article This is my content for article. This is my content for article.`
        }
};
function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmltemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name= "viewport" content="width-device-width ,initial-scale-1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class ="container">
            
                <div>
                    <a href='/'>Home </a>
                </div>
                <hr/>
                <div>
                    <h3>${heading}</h3>
                </div>
                <div>
                    <h4>${date}</h4>
                </div>
                <div>
                    ${content}
                </div>
            <div>
        </body>
    </html>
    `;
    return htmltemplate;
}

app.get('/:articlename',function(req, res){
    var articlename = req.param.articlename;
    res.send(createTemplate(articles[articlename]));
});

app.get('/article-two',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

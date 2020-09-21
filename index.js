/////CONFIG
var LATENCY                 = 4000;                          //how often we check if hit google
var REALTIMEUPDATEINMINUTES = 4;                             //how often we hit google
var REALTIMEUPDATEINMILLIS  = REALTIMEUPDATEINMINUTES*60000; //DONT TOUCH THIS
////

const googleTrends = require('google-trends-api');
const express = require('express');
const request = require('request');
const rp = require('request-promise');
const $ = require('cheerio');
 
var date = new Date();
console.log('Starting >>> '+date);

var LATESTARG = [];
var LATESTARGURLS = {};

var app = express();

app.get('/*.css',(req, res, next)=>
{
	//console.log(req.params['0']);
	if(req.headers['sec-fetch-dest'] != 'style')return;
	next();
});

app.get('/*/*.css',(req, res, next)=>
{
	//console.log(req.params['0']);
	if(req.headers['sec-fetch-dest'] != 'style')return;
	next();
});

app.get('/*/*.js',(req, res, next)=>
{
	if(req.headers['sec-fetch-dest'] != 'script')return;
	next();
})

app.get('/*.js',(req, res, next)=>
{
	if(req.headers['sec-fetch-dest'] != 'script')return;
	next();
})

app.use(express.static(__dirname + '/public'));//local

const port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('server: 8080');
});

app.post('/json', function (req, res)
{
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ valueis: "123456789" }));
});

app.get('/arg',(req, res)=>
{
	res.send(JSON.stringify(LATESTARG));
	
})

app.get('/argurl',(req, res)=>
{
	res.send(JSON.stringify(LATESTARGURLS));
	
})

app.get('/realtime',(req, res)=>
{
	realTime();
	res.send('realtime');
	
})

app.get('/latest',(req, res)=>
{
	latest();
	res.send('latest');
})

//Update interval

 var nextUpdate = Date.now();
setInterval(()=>
{
	if(Date.now() < nextUpdate)return;
	
	realTime();
	nextUpdate = Date.now()+REALTIMEUPDATEINMILLIS;
},LATENCY); 

function realTime()
{
	console.log('update at>>> '+date.getTime());
	LATESTARG = [];
	googleTrends.realTimeTrends(
	{
		trendDate: new Date(),
		geo: 'AR',
		hl:'ES'
	}, function(err, results) 
	{
		if (err){
			console.log(err);
			return;
		}
		
		JSON.parse(results).storySummaries.trendingStories.forEach(function(story,i)
		{
			//console.log(story);
			var articles = story.articles;
			var tags = story.entityNames;
			
			var aContent = [];
			var longText = story.title+' > ';
			articles.forEach(function(article,ix)
			{
				var url = article.url;
				var src = article.source;
				var tm = article.time;
				var tmpsplit = url.slice(0, -1).split("/");
				var ending = tmpsplit[tmpsplit.length-1]
				longText += article.articleTitle + ' || ';
				
				//parseURL(url,ending);
				aContent.push({title:article.articleTitle,link:url,time:tm,fuente:src});
			});
			
			LATESTARG.push({tags:tags,content:aContent});
			const text = longText;
			//console.log(text+'\r\n');
			
			if(i==JSON.parse(results).storySummaries.trendingStories.length-1)
			{
				var json = JSON.stringify({stories:LATESTARG});
				var fs = require('fs');
				fs.writeFile('public/static/latest.json', json, 'utf8', function(){});
			}
			
		});	
	});
}

////Parse URLs
function parseURL(_url,reference)
{
	if(typeof LATESTARGURLS[reference] != "undefined")return;
	
	const url = _url;
	const ref = reference;

	rp(url)
	  .then(function(html){
		  //console.log(reference);
		//success!
		LATESTARGURLS[reference] = $('article > p', html).text();
	  })
	  .catch(function(err){
		//handle error
	  });
}

function latest()
{
	googleTrends.realTimeTrends(
	{
		trendDate: new Date(),
		geo: 'AR',
		hl:'ES'
	}, function(err, results) 
	{
		if (err){
			console.log(err);
			return;
		}
		
		story = JSON.parse(results).storySummaries.trendingStories[0];
		console.log(story);
		return;		
	});
}

/* googleTrends.apiMethod({startTime:d,endTime:new Date()}, [callback])

googleTrends.interestOverTime({keyword: 'Women\'s march'})
.then(function(results){
  console.log('These results are awesome', results);
})
.catch(function(err){
  console.error('Oh no there was an error', err);
}); */



 

 



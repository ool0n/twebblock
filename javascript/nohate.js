var badRefs=new Array(
/[http|https]:\/\/e271.net\/~marina\/STAR\/twebblock\/javascript\/referrer-bad.html/i,
/[http|https]:\/\/e271.net\/~marina\/STAR\/twebblock\/javascript\/BAD/i,
/[http|https]:\/\/bugbrennan.com/i,
/[http|https]:\/\/genderidentitywatch.com/i,
/[http|https]:\/\/gendertrender.wordpress.com/i,
/[http|https]:\/\/pretendbians.com/i,
/[http|https]:\/\/bevjoradicallesbian.wordpress.com/i,
/[http|https]:\/\/cherryblossomlife.com/i,
/[http|https]:\/\/fabmatters.wordpress.com/i,
/[http|https]:\/\/sexnotgender.com/i,
/[http|https]:\/\/transgendertropes.wordpress.com/i,
/[http|https]:\/\/twanzphobic.wordpress.com/i,
/[http|https]:\/\/radicalfeministmemes.wordpress.com/i,
/[http|https]:\/\/privilegedenyingtranny.wordpress.com/i,
/[http|https]:\/\/genderfatigue.com/i,
/[http|https]:\/\/twitter.com\/TheLesbianMafia/i,
/[http|https]:\/\/thelesbianmafia.tumblr.com/i,
/[http|https]:\/\/nametheproblem.com/i,
/[http|https]:\/\/twitter.com\/NameTheProblem/i,
/[http|https]:\/\/wwomenwwarriors.wordpress.com/i,
/[http|https]:\/\/factcheckme.wordpress.com/i,
/[http|https]:\/\/radfemreader.blogspot.nl/i,
/[http|https]:\/\/sisterhoodispowerful.wordpress.com/i,
/[http|https]:\/\/masteramazon.blogspot.com.au/i,
/[http|https]:\/\/thearcticfeminist.wordpress.com/i,
/[http|https]:\/\/easilyriled.wordpress.com/i,
/[http|https]:\/\/smashesthep.wordpress.com/i,
/[http|https]:\/\/allecto.wordpress.com/i,
/[http|https]:\/\/davinasquirrel.wordpress.com/i,
/[http|https]:\/\/radicalhubarchives.wordpress.com/i,
/[http|https]:\/\/feminazi.wordpress.com/i,
/[http|https]:\/\/radicalresolution.wordpress.com/i,
/[http|https]:\/\/revolutionarycombustion.wordpress.com/i,
/[http|https]:\/\/witchwind.wordpress.com/i,
/[http|https]:\/\/kittybarber.wordpress.com/i,
/[http|https]:\/\/www.feministes-radicales.org/i,
/[http|https]:\/\/firewomon.wordpress.com/i,
/[http|https]:\/\/guerillafeminism.wordpress.com/i,
/[http|https]:\/\/deepgreenresistance.org/i
);

var i;

for (i = 0; i < badRefs.length; ++i) 
{
    ref = badRefs[i];
    var BAD = ref.exec(document.referrer);
    if (BAD)  
        window.location.href = "https://en.wikipedia.org/wiki/Transphobia";
}

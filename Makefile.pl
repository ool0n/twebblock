#!/usr/bin/perl


open(ACL,"<ACL");
@BR= <ACL>;
close(ACL);
chomp(@BR);
foreach (@BR)
{
   $_ =~ s/^http:\/\///i;
   $_ =~ s/^https:\/\///i;
   $_ =~ s/\//\\\//;
   if (/^$/)
   {
       next;
   }
   if (/^#/)
   {
       next;
   }
   push (@BADREFS, $_);
}
    
    

open(REDIRECT_SITE,"<REDIRECT-SITE");
@REDIRECT_SITE = <REDIRECT_SITE>;
close(REDIRECT_SITE);
chomp(@REDIRECT_SITE);

############################################################################
#                       Create the Javascript blocker                      #
############################################################################

#-------------------------------------------------------#
#          Backup Old Javascript blocklist              #
#-------------------------------------------------------#
open(JS,"<javascript/nohate.js");
@JS = <JS>;
close(JS);
open(JSBAK,">javascript/nohate.js.BAK");
print(JSBAK @JS);
close(JSBAK);


open(JS,">javascript/nohate.js");

print(JS 'var badRefs=new Array(');
print(JS "\n");
$len = scalar(@BADREFS);
for ($i=0; $i<=($len -2); $i++)
{
    print(JS '/[http|https]:\/\/');
    print(JS $BADREFS[$i]);
    print(JS '/i');
    print(JS ',');
    print(JS "\n");
}
print(JS '/[http|https]:\/\/');
print(JS "$BADREFS[$len-1]/i\n");

print JS << 'EOF';
);

var i;

for (i = 0; i < badRefs.length; ++i) 
{
    ref = badRefs[i];
    var BAD = ref.exec(document.referrer);
    if (BAD)  
EOF

print(JS "        window.location.href = \"");
print(JS @REDIRECT_SITE);
print(JS "\"\;\n");
print(JS '}');
print(JS "\n");

close(JS);
